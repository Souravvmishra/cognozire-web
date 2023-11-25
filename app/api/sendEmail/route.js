import { render } from '@react-email/render';
import EmailTemplate from '@/templates/EmailTemplate';
import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';



const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com', // Hostinger's SMTP server hostname
    port: 587, // Hostinger's recommended SMTP port
    secure: false, // Hostinger typically uses TLS, so set to true if necessary
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD // Your email password (consider using an app-specific password)
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
        // await transporter.sendMail({ ...mailOptions, to: `rhythm.bhatia@cognozire.in, ${email}` });

        await new Promise((resolve, reject) => {
            // send mail
            transporter.sendMail({ ...mailOptions, to: `souravvmishra@gmail.com, kushwaha@codestam.com` }, (err, info) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    console.log(info);
                    resolve(info);
                }
            });
        });

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