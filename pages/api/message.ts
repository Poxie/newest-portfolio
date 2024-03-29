import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_SENDER,
        pass: process.env.EMAIL_PASSWORD
    }
});

const mailOptions = {
    from: `${process.env.EMAIL_FROM}:`,
    to: process.env.EMAIL_RECEIVER,
    subject: process.env.EMAIL_SUBJECT,
    text: ''
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'POST') return res.status(400).send({ message: 'Invalid request method.' });

    const { name, email, message } = JSON.parse(req.body);
    
    if(!name) return res.status(400).send({ message: 'Name is required.' });
    if(!email) return res.status(400).send({ message: 'Email is required.' });
    if(!message) return res.status(400).send({ message: 'Message is required.' });

    mailOptions.text = `${name} (${email}) said: ${message}`;

    const data = await transporter.sendMail(mailOptions);

    if(data.accepted) {
        return res.status(200).send({ message: 'Success' });
    }
    return res.status(500).send({ message: 'Internal error' });
}