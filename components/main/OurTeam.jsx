'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const members = [
    {
        name: "Deepak Dogra",
        position: "President",
        image: '/member02.png',
        description: "An ex-army officer, who brings a lot of experience of approximately 35 years, he has worked for various corporates like Enron, General Motors, Skoda, Volkswagen and many more, in the fields of HR, Admin and related areas.",
        linkedIn: 'https://www.linkedin.com/in/deepak-dogra-3b0b45199'
    },
    {
        name: "Rhythm Bhatia",
        position: "CEO",
        image: '/member01.png',
        description: `Rhythm is a researcher with 7 years of corporate experience in applying Artificial Intelligence to diverse fields, including Medical Data, Banking Data, Cryptocurrency, Music/Speech Segmentation, Bird Audio Generation, and more. She has published in prestigious conferences and is currently pursuing a PhD in Big Data analytics on person-centered data at the University of Eastern Finland. For additional details, `,
        portfolio: ' https://rhythmbhatia.com/',
        linkedIn: 'https://www.linkedin.com/in/rhythm-rajiv-bhatia-she-her-541b9857'
    },
    {
        name: "Kustaa Valtonen",
        position: "Advisor",
        image: '/member03.png',
        description: "Mr. Kustaa Valtonen is an experienced sales and investment professional. He has more than 13 years of experience working with corporates like HP and Microsoft. For last 10+ years he has worked as a business angel helping a large number of startups get funding and grow their businesses internationally. He is also a major contributor to the FinEstBayArea initiative.",
        linkedIn: 'https://www.linkedin.com/in/kustaavaltonen'
    }
];





const OurTeam = () => {
    return (
        <div>
            <div className='py-14 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
                <h2 className='text-3xl  md:text-4xl xl:text-5xl font-bold'>
                    OUR TEAM
                </h2>

                <div className="lg:flex md:flex sm:flex items-stretch xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around ">

                    {members.map((member, i) => (
                        <div key={i} role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative xl:max-w-sm lg:w-2/5 mt-24 hover:scale-105 duration-300 group cursor-pointer ">
                            <div className="rounded overflow-hidden shadow-md bg-white py-6 border">
                                <div className="absolute -mt-20 w-full flex justify-center ">
                                    <div className="h-32 w-32  overflow-hidden border border-black rounded-full shadow-xl">
                                        <Image
                                            width={250}
                                            height={250}
                                            src={member.image}
                                            alt="Display Picture of Andres Berlin"
                                            role="img"
                                            className="rounded-full object-cover h-full w-full shadow-md  group-hover:scale-105 duration-300"
                                        />
                                    </div>
                                </div>
                                <div className="px-6 mt-16 ">
                                    <h1 className="font-bold text-3xl text-center mb-1">{member.name}</h1>
                                    <p className="text-gray-800 font-semibold text-sm text-center">{member.position}</p>
                                    <p className="text-center text-gray-600 text-base pt-3 font-normal">
                                        {member.description}
                                        {
                                            member.portfolio && (<a className='underline font-semibold' href={member.portfolio}>check out her portfolio</a>)
                                        }
                                    </p>
                                    <a href={member.linkedIn} className='block text-center bg-[#0077B5] text-white py-2 px-4 rounded font-semibold mt-4 w-1/2 mx-auto '>Connect</a>
                                </div>
                            </div>
                        </div>


                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurTeam
