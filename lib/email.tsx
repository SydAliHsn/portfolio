import nodemailer from 'nodemailer';

let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    }
});

export interface EmailData {
    name: string;
    email: string;
    message: string;
}

export const sendEmail = async ({ message, email, name }: EmailData) => {
    let mailDetails = {
        from: email,
        to: process.env.RECEIVING_EMAIL,
        subject: `Message from ${name} <${email}> through your website.`,
        text: message
    };

    try {
        await mailTransporter.sendMail(mailDetails);
    } catch (err) {
        console.log(err);
        throw err;
    }
};