import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Tailwind,
    Text,
} from '@react-email/components';
import * as React from 'react';

const EmailTemplate = ({ name, message }) => {
    return (
        <Tailwind>
            <Html className='font-sans '>
                <Head>
                    <Preview>Form Submission - Cognozire</Preview>
                </Head>
                <Body className='bg-white '>
                    <Container className='bg-white flex justify-center items-center '>
                        <div>
                            <Img className='inline-block translate-y-3 pr-4' width={50} src='https://www.cognozire.in/_next/image?url=%2FcognozireLogo.png&w=256&q=75' />
                        </div>
                        <div>
                            <Heading className='text-left text-4xl inline-block -pb-2  text-black' as='h1'>
                                COGNOZIRE
                            </Heading>
                        </div>
                    </Container>
                    <Container className='text-left'>
                        <Text className='text-slate-9 opacity-50 px-2'>
                            This is an automated mail sent from Cognozire
                        </Text>
                    </Container>
                    <Container className='text-black px-2'>
                        <Text as='h3' className='text-3xl font-semibold'>
                            Hi {name}!
                        </Text>
                    </Container>
                    <Container className='border border-dashed rounded-lg px-2 '>
                        <Text className='text-lg'>
                            <div>We hope this message finds you well and excited to work with us!</div>
                            <div>Our team will reach out to you as soon as possible</div>
                            <div>We carry the following information about you : </div>
                        </Text>
                        <Text className='text-xl font-semibold'>
                            <div className='text-xl font-semibold pb-1'>Name : {name}</div>
                            <div className='text-xl font-semibold pb-1'>Message : {message}</div>
                        </Text>
                        <Text>
                            <div>
                                For any queries, Feel free to reach us at
                                <div>
                                    <span className='pr-2'>📨</span>
                                    <Link className='text-black' href='mailto:rhythm.bhatia@cognozire.in '>Here</Link>
                                </div>
                            </div>
                        </Text>
                        <Text>
                            <div>Have a wonderful day!</div>
                            <div>Team Cognozire</div>
                        </Text>
                        <Text className='text-center '>
                            <Link href='https://www.linkedin.com/company/cognozire/'>
                                <Img className='mx-auto inline-block px-2' width={20} src='https://cdn-icons-png.flaticon.com/128/1384/1384088.png' />
                            </Link>
                            <Link href='https://twitter.com/cognozire'>
                                <Img className='mx-auto inline-block px-2' width={20} src='https://cdn-icons-png.flaticon.com/128/5968/5968958.png' />
                            </Link>
                        </Text>
                        <Text className='text-center'>
                            ©️ Cognozire
                        </Text>
                    </Container>
                    <Container className='text-center '>
                        <Text>
                            Please do not reply to this mail
                        </Text>
                    </Container>

                </Body>
            </Html>
        </Tailwind>
    )
}

export default EmailTemplate
