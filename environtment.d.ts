declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            NEXT_PUBLIC_MAIL_LINK: string;
            NEXT_PUBLIC_WEBSITE_TITLE: string;
            NEXT_PUBLIC_WEBSITE_DESCRIPTION: string;
        }
    }
}

export {};