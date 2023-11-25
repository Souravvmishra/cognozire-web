import { render } from '@react-email/render';
import EmailTemplate from '@/templates/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


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



    try {
        const data = await resend.emails.send({
            from: 'No Reply <noreply@cognozire.in>',
            to: ['souravvmishra@gmail.com', 'kushwaha@codestam.com'],
            subject: 'Hello world',
            react: EmailTemplate({ name, message }),
        });

        return NextResponse.json(data);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error });
    }
}
