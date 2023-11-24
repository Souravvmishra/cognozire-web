'use client'

import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { TypeAnimation } from 'react-type-animation';


const list = ['Get End-to-End AI   Consultation', 'Get End-to-End AI   Advisory', 'Get End-to-End AI   Guidance']

const HeroSection = () => {
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setLoading(false)
    }, [])

    if (loading) {
        return (
            <div className='w-screen h-screen flex justify-center items-center fixed top-0 z-50 bg-cg-white text-cg-black'>
                <div className="loader"></div>
            </div>

        )
    }


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
                        <h1 className="text-5xl font-extrabold md:text-6xl text-cg-white ">
                            <TypeAnimation
                                sequence={list}
                                speed={250}
                                repeat={Infinity}
                            />
                        </h1>

                        <p className="mt-4  sm:text-xl/relaxed text-cg-white">
                            Cognozire is a forward-thinking and inventive consulting and product development firm specializing in crafting cutting-edge artificial intelligence solutions tailored to meet the distinct requirements of individuals and businesses.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <a
                                href="#contactUs"
                                className="block w-full rounded-xl bg-cg-red px-12 py-3 text-sm text-white shadow  focus:outline-none focus:ring duration-300 sm:w-auto font-bold hover:ring hover:ring-cg-red border-2"
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
