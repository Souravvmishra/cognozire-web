import React from 'react'
import Card from './card/Card'
import { AiFillAlert } from 'react-icons/ai'
import { MdHealthAndSafety, MdPermMedia, MdOutlineCastForEducation } from 'react-icons/md'
import { BiMoneyWithdraw } from 'react-icons/bi'
import { AiOutlineCustomerService } from 'react-icons/ai'
import More from './buttons/More'
import Link from 'next/link'


const services = [
    {
        icon: <MdHealthAndSafety size={35} />,
        title: "Health Tech",
        desc: "Developed predictive models to identify early signs of cardiac arrest from medical records."
    },
    {
        icon: <MdPermMedia size={35} />,
        title: "Media Tech",
        desc: "Unsupervised music generator using AI, enabling artists to produce copyright-free music instantly."
    },
    {
        icon: <BiMoneyWithdraw size={35} />,
        title: "Fin Tech",
        desc: "To protect financial institutions from fraudulent transactions."
    },
    {
        icon: <AiOutlineCustomerService size={35} />,
        title: "Customer Solutions",
        desc: "Adapting to the project and timelines for efficient delivery."
    },
    {
        icon: <MdOutlineCastForEducation size={35} />,
        title: "Edtech",
        desc: "Adaptive learning platform that personalizes educational content based on individual student progress, improving retention rates."
    }
];


const Services = () => {
    return (
        <div>
            <div className='py-14 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
                <h2 className='text-3xl  md:text-4xl xl:text-5xl font-bold'>
                    SERVICES
                </h2>
                <div className='flex flex-wrap  py-4'>
                    {services.map((service, i) => (
                        <div key={i} className='w-[25rem] flex-shrink p-2'>
                            <Card service={service} />
                        </div>
                    ))}
                </div>
                <Link href={'/services'} className=''>
                    <More text={'Know More'} />
                </Link>
            </div>
        </div>
    )
}

export default Services
