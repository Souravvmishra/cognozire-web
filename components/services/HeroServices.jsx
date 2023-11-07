import React from 'react'
import Navbar from '../main/Navbar'

const HeroServices = () => {
    return (
        <div>

            <section
                className={` h-screen relative bg-[url('/servicesBg.png')] bg-cg-white  bg-cover bg-center bg-no-repeat`}
            >

                <Navbar />
                <div
                    className="relative mx-auto max-w-screen-xl px-4 pt-32 sm:px-6 lg:px-8"
                >
                    <div className="max-w-xl  tracking-wider ">
                        <h3 className="text-4xl sm:text-5xl font-extrabold md:text-7xl text-cg-blue pb-2 ">
                            SERVICES
                        </h3>
                        <h3 className="text-4xl sm:text-5xl font-extrabold md:text-7xl text-cg-blue pb-2 ">
                            WE PROVIDE
                        </h3>
                        <p className="my-6 dark:text-gray-400 text-lg font-semibold text-cg-white">
                            Using the power of AI, we at Cognozire is creating New Digital Experiences for our Customers
                            Our team of AI & ML Experts works together to build Intelligent Digital Solutions that can transform Customers Applications & Services. We Hope to Transform the World around by our Solutions thereby Powering Progress.
                        </p>
                    </div>
                </div>
                <div className="px-4 max-w-screen-xl mx-auto lg:px-8">

                </div>

            </section>

        </div>
    )
}

export default HeroServices
