declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            NEXT_PUBLIC_MAIL_LINK: string;
        }
    }
}

export {};