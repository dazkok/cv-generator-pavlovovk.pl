let gaLoaded = false;
let gaQueue: (() => void)[] = [];

export function loadGA4(): Promise<void> {
    return new Promise((resolve) => {
        if (gaLoaded) return resolve();

        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-6PQLCN9TKL';
        script.onload = () => {
            window.dataLayer = window.dataLayer || [];
            window.gtag = (...args: any[]) => window.dataLayer!.push(args);

            window.gtag('js', new Date());
            window.gtag('config', 'G-6PQLCN9TKL', { send_page_view: false });

            gaLoaded = true;

            gaQueue.forEach((fn) => fn());
            gaQueue = [];

            resolve();
        };
        document.head.appendChild(script);
    });
}

export function gtagSafe(callback: () => void) {
    if (gaLoaded) callback();
    else gaQueue.push(callback);
}
