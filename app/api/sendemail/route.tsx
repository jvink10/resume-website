import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
    const { email, name, message } = await request.json();

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PASSWORD,
        },
    });

    const mailOptions: Mail.Options = {
        from: process.env.NODEMAILER_EMAIL,
        to: 'jordanvink10@gmail.com',
        subject: `Message from ${name} (${email})`,
        text: message,
    };

    const sendMailPromise = () =>
        new Promise<string>((resolve, reject) => {
            transport.sendMail(mailOptions, function (error) {
                if (!error) {
                    resolve('Email sent');
                } else {
                    reject(error.message);
                };
            });
        });
    
        try {
            await sendMailPromise();
            return NextResponse.json({ message: 'Email sent '});
        } catch (error) {
            return NextResponse.json({ error: error }, { status: 500 });
        };
};
