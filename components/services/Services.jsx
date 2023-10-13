import React from 'react'

const servicesArray = [
    {
        category: "Health Tech",
        description: "Our Health Tech Solutions: Tracking Progress and Personalized Techniques Incorporating cutting-edge AI/ML services, with a focus on Big Data & Analytic tools, wellness & stress analysis.",
        keyFeatures: [
            "Calorie Analysis: Precision tracking of calorie consumption and expenditure.",
            "Sleep Cycle Monitoring: In-depth analysis of sleep patterns for improved rest.",
            "Step Count Tracking: Accurate monitoring of daily physical activity.",
            "Menstrual Cycle Insights: Personalized predictions and insights.",
            "Stress Level Prediction: Advanced stress analysis for holistic well-being."
        ]
    },
    {
        category: "Environment & Sustainability",
        description: "Develop a cutting-edge web-based application that empowers users to track and reduce their greenhouse gas emissions. Encourage sustainable living practices for individuals, construction companies, governments, students, and citizens.",
        keyFeatures: [
            "Comprehensive Tracking: Monitor and quantify your environmental impact.",
            "Sustainable Living Guide: Discover best practices for greener lifestyles.",
            "Industry Impact: Assist construction companies in adopting sustainable methods.",
            "Educational Tool: Educate students and citizens on sustainability."
        ]
    },
    {
        category: "Food Tech",
        description: "Data-Driven Insights: Utilize AI/ML to analyze vast datasets for valuable insights. Personalized Nutrition: Tailor recommendations based on individual preferences and dietary needs.",
        keyFeatures: [
            "Menu Optimization: Develop data-backed menus for restaurants and food services.",
            "Nutritional Analysis: Provide detailed nutritional information for consumers.",
            "Food Quality Assurance: Ensure product quality and safety through AI-driven inspections.",
            "Customized Recommendations: Offer personalized food choices and recipes.",
            "Allergen Detection: Identify and manage allergens for safer dining."
        ]
    },
    {
        category: "Media Tech",
        keyFeatures: [
            "Seamless Connectivity: Paving the way for a unified digital and physical experience.",
            "Immersive Engagement: Plunge users into captivating virtual worlds.",
            "Emotional Range: Craft diverse scenarios, from gloomy and happy to motivational and beyond.",
            "Immersive Storytelling: Redefine narratives through interactive and sensory-rich experiences.",
            "Enhanced Learning: Make education engaging and memorable with immersive lessons."
        ]
    }
];





const Services = () => {
    return (
        <div>
            <div>
                <h2 className='text-3xl  md:text-4xl xl:text-5xl font-bold pb-16 uppercase'>
                    OUR EXPERTISE
                </h2>
                {
                    servicesArray.map((service, i) => (
                        <div key={i} className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                            <h3 className="text-3xl font-bold text-cg-blue">{service.category}</h3>
                            <p className="my-6 dark:text-gray-400 text-lg font-semibold">{service.description}</p>
                            <h3 className="text-2xl font-bold text-cg-black">Key Features</h3>
                            <ul>
                                {
                                    service.keyFeatures.map((point, i) => (
                                        <li className='list-disc font-medium text-base list-inside' key={i}>
                                            {point}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Services
