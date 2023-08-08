import { NextRequest, NextResponse } from 'next/server'
import { sendEmail, EmailData } from '@/lib/email';

export async function POST(req: NextRequest) {
    const { email, name, message } = await req.json();

    if (!email || !name || !message) {
        return NextResponse.json({ error: 'Missing fields! "name", "email" and "message" are required fields.' }, { status: 400 });
    };

    const emailData: EmailData = {
        name,
        email,
        message
    };

    try {
        await sendEmail(emailData);
    } catch (err) {
        return NextResponse.json({ error: 'Something went wrong! Please try again in some time.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Message sent!' });
}

