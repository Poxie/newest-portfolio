import React, { FormEvent, useEffect, useRef, useState } from 'react';
import styles from '../../../styles/Home.module.scss';
import Button from '../../button';
import { Input } from '../../input';

export const Footer = () => {
    const [hidden, setHidden] = useState(true);
    const [loading, setLoading] = useState(false);
    const [feedback, setFeedback] = useState('');
    const ref = useRef<HTMLDivElement>(null);
    const name = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const message = useRef<HTMLInputElement>(null);

    // Checking if content is within threshold within viewport
    useEffect(() => {
        const scroll = () => {
            if(!ref.current) return;
            const fromTop = ref.current.getBoundingClientRect().top;
            const percent = fromTop / window.innerHeight;
            
            if(percent < .76) {
                setHidden(false);
            }
        }
        scroll();

        window.addEventListener('scroll', scroll);
        return () => window.removeEventListener('scroll', scroll);
    }, []);

    // Sending message
    const sendMessage = async (e: FormEvent) => {
        if(!name.current || !email.current || !message.current) return;
        e.preventDefault();

        // Sending message request
        setLoading(true);
        const data = await fetch('/api/message', {
            method: 'POST',
            body: JSON.stringify({
                name: name.current.value,
                email: email.current.value,
                message: message.current.value
            })
        });
        setLoading(false);

        // Success
        if(data.status === 200) {
            setFeedback('Thank you for your message.')
            name.current.value = '';
            email.current.value = '';
            message.current.value = '';
            return;
        }
        // Error
        setFeedback('Something went wrong while sending message.' );
    }

    const className = [
        styles['footer'],
        hidden ? styles['hidden'] : ''
    ].join(' ');
    return(
        <footer 
            className={className}
            data-section="contact"
            ref={ref}
        >
            <span>
                Well, are you ready?
            </span>

            <form 
                onSubmit={sendMessage}
                className={styles['contact-form']}
            >
                {feedback && (
                    <p className={styles['feedback']}>
                        {feedback}
                    </p>
                )}
                <Input 
                    label={'Name'}
                    ref={name}
                />
                <Input 
                    label={'Email'}
                    ref={email}
                />
                <Input 
                    label={'Message'}
                    ref={message}
                    textArea
                />
                <Button 
                    className={styles['footer-button']}
                    type={'hollow'}
                    disabled={loading}
                    buttonType={'submit'}
                >
                    {loading ? 'Sending message...' : 'Create Connection'}
                </Button>
            </form>
        </footer>
    )
}