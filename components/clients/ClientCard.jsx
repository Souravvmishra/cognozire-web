import Image from 'next/image'
import React from 'react'

const clients = [
    {
        name: '2BSafe GmbH',
        desc: '2BSafe is an esteemed partner from Germany. \nEstablished in 2003, and headed by Christian Burkart and Michaela Burkart, 2BSafe is an organization, which is expert in Cryptocurrencies, Inventory Management and Online Marketing.',
        logo: '/clients/2BSafe GmbH.png'
    },
    {
        name: 'Exaum',
        desc: 'Finland based company working on accelerating green energy transition by electric grid power demand balancing.',
        logo: '/clients/Exaum.png'
    },
    {
        name: 'Turtle method',
        desc: 'An application that provides a new perspective on weight loss, your own mind, diet and a way to lose weight that’s genuinely light, fun and effective. There team is primarily based in Britain.',
        logo: '/clients/Turtle method.png'
    },
    {
        name: 'The Mindshift',
        desc: 'An unconventional consulting firm based in Austria working on innovation management and innovative culture.',
        logo: '/clients/The Mindshift.png'
    },
    {
        name: 'Karjan Music Tech',
        desc: 'Karjan Music Tech is a research based organisation from Austria working on music analysis and generation.',
        logo: '/clients/Karjan Music Tech.png'
    },

]

const ClientCard = () => {
    return (
        <div>
            <div className='py-14 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
                <h2 className='text-3xl  md:text-4xl xl:text-5xl font-bold pb-16 uppercase'>
                    Our Valued Partners
                </h2>
                <section className=" dark:bg-gray-800 dark:text-gray-100">
                    <div className="container mx-auto space-y-12">
                        {
                            clients.map((client, i) => (
                                i % 2 === 0 ? (<div key = {i} className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                                    <Image src={client.logo} alt="" className="h-80 dark:bg-gray-500 aspect-video object-contain" width={500} height={500} />
                                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                                        <h3 className="text-3xl font-bold">{client.name}</h3>
                                        <p className="my-6 dark:text-gray-400">{client.desc}</p>
                                        <button type="button" className="self-start underline text-cg-blue">Know More</button>
                                    </div>
                                </div>)
                                    :
                                    (<div key={i} className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                                    <Image src={client.logo} alt="" className="h-80 dark:bg-gray-500 aspect-video object-contain" width={500} height={500} />
                                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                                            <h3 className="text-3xl font-bold">{client.name}</h3>
                                            <p className="my-6 dark:text-gray-400">{client.desc}</p>
                                            <button type="button" className="self-start underline text-cg-blue">Know More</button>
                                        </div>
                                    </div>)
                            ))
                        }
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ClientCard
