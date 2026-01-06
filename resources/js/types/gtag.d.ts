export type GtagCommand =
    | ['consent', 'default', ConsentOptions]
    | ['consent', 'update', ConsentOptions]
    | ['js', Date]
    | ['config', string, Record<string, unknown>?]
    | [string, ...unknown[]];

export interface ConsentOptions {
    analytics_storage?: 'granted' | 'denied';
    ad_storage?: 'granted' | 'denied';
    ad_user_data?: 'granted' | 'denied';
    ad_personalization?: 'granted' | 'denied';
}

declare global {
    interface Window {
        dataLayer?: GtagCommand[];
        gtag?: (...args: GtagCommand) => void;
    }
}
