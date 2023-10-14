import React from 'react'

const expertises = [
    {
        "title": "LLMs: Transforming Language Understanding",
        "description": "Our expertise in LLMs, including GPT-3 and beyond, allows us to decode human language like never before. We've developed conversational AI systems, Chatbots, Questionnaires to test students and edtech tools that redefine user interactions across industries."
    },
    {
        "title": "Neural Networks and Deep Learning",
        "description": "Cognozire leverages neural networks and deep learning to create AI systems capable of Autonomous Decision-making. We've applied these technologies to Medical Diagnoses, Audio Generations, Financial analysis, Generative music, and Face modulation."
    },
    {
        "title": "Machine Learning: Intelligent Decision-Making",
        "description": "Machine learning is the heart of our AI solutions. We've developed Predictive models for Financial institutions, Recommendation engines for Media, Personalized algorithms for the Healthcare and Education sectors."
    },
    {
        "title": "Big Data Analytics: Insights from Data Deluge",
        "description": "In the era of big data, we excel at extracting meaningful insights. Our data analysis empowers businesses to optimize processes, uncover hidden trends, and make data-driven decisions."
    }
];


const Expertise = () => {
    return (
        <div>

            <h2 className='text-3xl  md:text-4xl xl:text-5xl font-bold pb-16 uppercase'>
                OUR EXPERTISE
            </h2>
            {
                expertises.map((expertise, i) => (
                    <div key={i} className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                        <h3 className="text-3xl font-bold text-cg-blue">{expertise.title}</h3>
                        <p className="my-6 dark:text-gray-400 text-lg font-semibold">{expertise.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Expertise
