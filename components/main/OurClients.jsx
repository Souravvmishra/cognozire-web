import Image from 'next/image'
import React from 'react'
import More from './buttons/More'
import Link from 'next/link'

const clients = [
    {
        name: 'b2safe',
        logo: '/clientLogo01.png'
    },
    {
        name: 'exaum',
        logo: '/clientLogo02.png'
    },
    {
        name: 'turtle method',
        logo: '/clientLogo03.png'
    }
]

const OurClients = () => {
    return (
        <div>
            <div className='py-14 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
                <h2 className='text-3xl  md:text-4xl xl:text-5xl font-bold'>
                    Our Clients
                </h2>
                <p className='py-4 text-base md:text-lg xl:text-xl font-medium'>
                    Cognozire believes in providing Quality Service to it's clients, and aims for a happy and long-lasting relationship with them.
                </p>
                <div className=' flex flex-row justify-between items-center flex-wrap pb-16 '>
                    {

                        clients.map((client, i) => {
                            return (
                                <div key={i} className='w-1/3  '>
                                    <Image className='mx-auto' src={client.logo} alt={client.name} width={250} height={25} />
                                </div>
                            )
                        })
                    }
                </div>
                <Link href={'/clients'} className=''>
                    <More text={'View More'} />
                </Link>
            </div>
        </div>
    )
}

export default OurClients
