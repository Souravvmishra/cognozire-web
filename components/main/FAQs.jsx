import React from 'react'
import { BsFillCaretDownFill } from 'react-icons/bs'



const faqs = [
    {
        "question": "What types of solutions does Cognozire offer?",
        "answer": "Cognozire offers a wide range of machine learning and AI solutions tailored to the specific needs of our clients. This includes data analytics, predictive modeling, natural language processing, computer vision, and more."
    },
    {
        "question": "How can I get in touch with Cognozire for consultation?",
        "answer": "You can get in touch with Cognozire by visiting our website and filling out the contact form. We'll be happy to schedule a consultation to discuss your organization's needs and how our AI solutions can benefit you."
    },
    {
        "question": "What are the charges for consultation?",
        "answer": "Cognozire offers a complimentary initial consultation to understand your organization's needs and discuss potential solutions. During this consultation, we will provide a general overview of our services and how we can assist you. Specific pricing for our services will depend on the scope and complexity of the project, and we will provide a detailed proposal after the initial consultation."
    },
    {
        "question": "What type of AI problems do we work on?",
        "answer": "At Cognozire, we work on a wide range of AI problems and projects. Our expertise covers various domains, including natural language processing, computer vision, predictive modeling, data analytics, recommendation systems, and more. We are dedicated to tailoring AI solutions to meet the specific needs of our clients, whether they are individuals or enterprises. If you have a unique AI problem or requirement, don't hesitate to reach out to us, and we'll be happy to discuss how we can assist you."
    },
    {
        "question": "Does the client need to provide resources for the project?",
        "answer": "In most cases, Cognozire can provide the necessary resources for AI projects, including data, infrastructure, and expertise. However, the specific resource requirements may vary depending on the project's scope and complexity. During the initial consultation, we will assess the resource needs and discuss any requirements with the client to ensure a successful project implementation."
    }
]

const FAQs = () => {
    return (
        <div>
            <div className='py-14 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 bg-gray-100'>
                <h2 className='text-3xl  md:text-4xl xl:text-5xl font-bold'>
                    FAQ's
                </h2>
                <div className='py-4'>
                    {faqs.map((faq, i) => (
                        <div key={i} className="m-2 space-y-2" >
                            <div
                                className="group flex flex-col gap-2 rounded-lg bg-gray-200 px-5 py-3 text-cg-black"
                                tabIndex={i}
                            >
                                <div className="flex cursor-pointer items-center justify-between font-semibold">
                                    <span > {faq.question} </span>
                                    <BsFillCaretDownFill size={10} className="transition-all duration-500 group-focus:-rotate-180"
                                    />
                                </div>
                                <div
                                    className="invisible h-auto duration-300 max-h-0 items-center opacity-0 transition-all   group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 font-medium"
                                >
                                    {faq.answer}
                                </div>
                            </div>

                        </div>)
                    )}
                </div>
            </div>
        </div >
    )
}

export default FAQs
