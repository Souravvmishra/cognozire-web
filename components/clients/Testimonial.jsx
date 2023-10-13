import React from 'react';

const testimonials = [
    {
        name: 'John Smith',
        title: 'CEO, TechCorp',
        comment:
            "Cognozire's AI solutions have had a profound impact on our organization. Their team of experts guided us through the implementation process, and we've witnessed a remarkable increase in productivity and cost-efficiency.",
    },
    {
        name: 'Alice Johnson',
        title: 'CTO, InnovateTech',
        comment:
            `Cognozire has been a key partner in our digital transformation journey. Their AI products are cutting-edge and have revolutionized the way we operate. With their support, we've unlocked new opportunities and competitive edge.`,
    },
    {
        name: 'Eleanor Adams',
        title: 'COO, DataTech Solutions',
        comment:
            "Cognozire's AI consultancy services have been a game-changer for our business. Their dedicated team worked closely with us to harness the power of data and AI. As a result, we've optimized our operations, improved decision-making, and achieved significant growth.",
    },
    {
        name: 'Michael Lee',
        title: 'CFO, FinanceWorld',
        comment:
            "Cognozire's AI products have exceeded our expectations. They've streamlined our financial processes, enabling us to allocate resources more effectively. Their commitment to innovation and excellence is apparent in the quality of their solutions.",
    },
    {
        name: 'Sophia Rodriguez',
        title: 'CMO, MarketWise',
        comment:
            "Cognozire's AI tools have transformed the way we approach marketing. With their AI-driven insights, we've gained a deeper understanding of consumer behavior, resulting in more targeted and effective marketing strategies. Our campaigns have never been more successful.",
    },
    {
        name: 'David Williams',
        title: 'CTO, HealthTech Solutions',
        comment:
            "Cognozire's AI consultancy services have been indispensable in our mission to advance healthcare technology. Their deep expertise in both AI and the healthcare sector has been invaluable. With their support, we've developed groundbreaking solutions that improve patient care and outcomes.",
    },
];

const Testimonial = () => {
    return (
        <div className='py-14 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl  md:text-4xl xl:text-5xl font-bold pb-16 uppercase'>
                Testimonials
            </h2>
            <div className="w-full bg-white  text-gray-800 ">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="-mx-3 md:flex flex-wrap items-start">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="px-3 md:w-1/2 lg:w-1/3 " 
                            >
                                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6 shadow-lg hover:scale-105 duration-300 cursor-pointer">
                                    <div className="w-full flex mb-4 items-center">
                                        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <img src="https://i.pravatar.cc/100?img=1" alt="" />
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <h6 className="font-bold text-sm uppercase text-gray-600">
                                                {testimonial.name}
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-sm leading-tight">
                                            <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                                                &ldquo;
                                            </span>
                                            {testimonial.comment}
                                            <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                                                &rdquo;
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
