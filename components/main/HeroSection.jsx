import React from 'react'
import Navbar from './Navbar'
import ListComponent from './List'

const list = ['Consultation', 'Advisory', 'Guidance']

const HeroSection = () => {
    return (
        <div>

            <section
                className={` h-screen relative bg-[url('/hero_bg.png')] bg-red-50  bg-cover bg-center bg-no-repeat`}
            >

                <Navbar />
                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:flex  lg:items-center lg:px-8"
                >
                    <div className="max-w-xl  ">
                        <h1 className="text-3xl font-extrabold sm:text-5xl text-cg-white">
                            Get End-to-End AI

                            <ul className="block font-extrabold text-cg-blue">
                                <li>Consultation</li>
                                {/* <ListComponent items={list} /> */}
                            </ul>
                        </h1>

                        <p className="mt-4  sm:text-xl/relaxed text-cg-white">
                            Cognozire is a forward-thinking and inventive consulting and product development firm specializing in crafting cutting-edge artificial intelligence solutions tailored to meet the distinct requirements of individuals and businesses.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <a
                                href="#contactUs"
                                className="block w-full rounded-xl bg-cg-red px-12 py-3 text-sm text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto font-bold"
                            >
                                Let's Connect
                            </a>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default HeroSection
