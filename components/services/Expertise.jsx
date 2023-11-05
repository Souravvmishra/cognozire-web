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
                    <div key={i} className="flex flex-col justify-center flex-1 p-6 ">
                        <h3 className="text-3xl font-bold text-cg-blue flex space-x-4">
                            <svg fill="#000000" width="30px" height="30px" viewBox="0 0 24 24" id="right-arrow-direction-square" dataName="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color"><rect id="primary" x="2" y="2" width="20" height="20" rx="2" ></rect><path id="secondary" d="M17.62,11.31,14.5,9.17a1,1,0,0,0-1.5.69V11H7a1,1,0,0,0,0,2h6v1.14a1,1,0,0,0,1.5.69l3.12-2.14A.82.82,0,0,0,17.62,11.31Z" style={{ fill: 'whitesmoke' }}></path>
                            </svg>
                            <span>{expertise.title}</span>
                        </h3>
                        <p className="my-6  text-lg font-semibold">{expertise.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Expertise
