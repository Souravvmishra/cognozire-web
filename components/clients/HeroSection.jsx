import React from 'react'
import Navbar from '../main/Navbar'
import ListComponent from '../main/List'

const list = ['Consultation', 'Advisory', 'Guidance']

const HeroSection = () => {
    return (
        <div>

            <section
                className={` h-screen relative bg-[url('/clientHero.png')] bg-red-50  bg-cover bg-center bg-no-repeat`}
            >

                <Navbar />
                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex  lg:items-center lg:px-8"
                >
                    <div className="max-w-xl  tracking-wider ">
                        <h3 className="text-4xl font-extrabold sm:text-6xl text-cg-red pb-2 ">
                            Client Stories: 
                        </h3>
                        <h3 className="text-4xl font-extrabold sm:text-6xl text-cg-white pb-2 ">
                            Real Experiences,
                        </h3>
                        <h3 className="text-4xl font-extrabold sm:text-6xl text-cg-white pb-2 ">
                            Real Results
                        </h3>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default HeroSection
