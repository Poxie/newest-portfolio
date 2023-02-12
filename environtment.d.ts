declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            NEXT_PUBLIC_MAIL_LINK: string;
            NEXT_PUBLIC_WEBSITE_TITLE: string;
            NEXT_PUBLIC_WEBSITE_DESCRIPTION: string;
            EMAIL_SENDER: string;
            EMAIL_RECEIVER: string;
            EMAIL_PASSWORD: string;
            EMAIL_SUBJECT: string;
            EMAIL_FROM: string;
        }
    }
}

export {};