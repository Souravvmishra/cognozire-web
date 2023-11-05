import React from 'react';

const testimonials = [
    {
        name: 'John Smith',
        title: '2BSafe GmbH',
        comment: "Cognozire has been an invaluable partner in helping us harness the power of AI for our business. Their innovative solutions have not only improved our efficiency but also transformed the way we approach data. We highly recommend their forward-thinking expertise.",
    },
    {
        name: 'Alice Johnson',
        title: 'Exaum',
        comment:
            `Working with Cognozire has been a game-changer for our organization. Their dedication to understanding our unique needs and crafting custom AI solutions has made a significant impact on our operations. We're excited about the possibilities that their inventive approach continues to unlock for us.`,
    },
    {
        name: 'Eleanor Adams',
        title: 'Turtle method',
        comment:
            "Cognozire is a true pioneer in the field of AI. Their team's deep knowledge and creative thinking have allowed us to stay at the forefront of our industry. Their cutting-edge solutions have given us a competitive edge, and we couldn't be happier with the results.",
    },
    {
        name: 'Michael Lee',
        title: 'The Mindshift',
        comment:
            "Cognozire's commitment to excellence and their ability to tailor AI solutions to our specific requirements have made a substantial difference in our business outcomes. Their innovative approach and dedication to problem-solving are truly commendable.",
    },
    {
        name: 'Sophia Rodriguez',
        title: 'Karjan Music Tech',
        comment:
            "Cognozire's AI tools have transformed the way we approach marketing. With their AI-driven insights, we've gained a deeper understanding of consumer behavior, resulting in more targeted and effective marketing strategies. Our campaigns have never been more successful.",
    },
    {
        name: 'David Williams',
        title: 'HealthTech Solutions',
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
                                            <h6 className="font-bold text-sm uppercase text-gray-800">
                                                {testimonial.name}  
                                            </h6>
                                            <h6 className="font-semibold text-xs uppercase text-gray-600">
                                                {testimonial.title} 
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
