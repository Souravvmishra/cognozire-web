import { render } from '@react-email/render';
import EmailTemplate from '@/templates/EmailTemplate';
import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';



const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Gmail's SMTP server hostname
    port: 587, // Gmail's recommended SMTP port
    secure: false, // Set to true if you want to use SSL (deprecated) or false for TLS
    auth: {
        user: process.env.EMAIL, // Your Gmail email address
        pass: process.env.PASSWORD // Your Gmail app password 
    },
});


export async function POST(request, res) {

    const { name, message, email } = await request.json()

    if (!message || !name || !email) {
        return new NextResponse(JSON.stringify(
            {
                "error": "Please fill all the fields."
            }),
            {
                status: 400
            });
    }

    const emailHtml = render(<EmailTemplate name={name} message={message} />);


    const mailOptions = {
        from: process.env.EMAIL,
        subject: 'Form Submission',
        text: `
      Name: ${name}
      Message: ${message}
    `,
        html: emailHtml,
    };

    try {
        await transporter.sendMail({ ...mailOptions, to: `rhythm.bhatia@cognozire.in, ${email}` });
        
        await transporter.sendMail({ ...mailOptions, to: `souravvmishra@gmail.com, kushwaha@codestam.com` });
        return new NextResponse(JSON.stringify({ 'status': 'OK' }), { status: 200 });
    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({ error: 'Internal Server Error' }),
            { status: 500 }
        )
    }
}


export async function GET(request, res) {
    return new NextResponse(JSON.stringify({ 'status': 'OK' }), { status: 200 });
}