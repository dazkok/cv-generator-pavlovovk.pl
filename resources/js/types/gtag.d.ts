export interface ConsentOptions {
    analytics_storage?: 'granted' | 'denied';
    ad_storage?: 'granted' | 'denied';
    ad_user_data?: 'granted' | 'denied';
    ad_personalization?: 'granted' | 'denied';
}

export type GtagArgs =
    | ['js', Date]
    | ['config', string, Record<string, unknown>?]
    | ['consent', 'default' | 'update', ConsentOptions]
    | [string, ...unknown[]];

declare global {
    interface Window {
        dataLayer?: unknown[];
        gtag?: (...args: GtagArgs) => void;
    }
}
