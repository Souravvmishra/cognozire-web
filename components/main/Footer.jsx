import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="sm:col-span-2">
                    <Link
                        href="/"
                        aria-label="Go home"
                        title="Company"
                        className="inline-flex items-center"
                    >
                        <Image className='pr-2' alt='Cognozire Logo' src={'/cognozireLogo.png'} width={70} height={70} />
                        <span className="ml-1 text-2xl font-bold tracking-wide text-gray-800 uppercase">
                            COGNOZIRE
                        </span>
                    </Link>
                    <div className="mt-6 ">
                        <p className="text-sm text-gray-800">
                            At Cognozire, we are driven by a passion for reshaping the future through AI innovation, guiding both individuals and businesses on a transformative path toward unprecedented success and growth.
                        </p>
                    </div>
                </div>
                <div className="space-y-2 text-sm">
                    <p className="text-base font-bold tracking-wide text-gray-900">
                        Contacts
                    </p>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Phone:</p>
                        <Link
                            href="tel:+917709149202"
                            aria-label="Our phone"
                            title="Our phone"
                            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            +91 77091 49202
                        </Link>
                    </div>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Email:</p>
                        <a
                            href="mailto:info@cognozire.com"
                            aria-label="Our email"
                            title="Our email"
                            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            rhythm.bhatia@cognozire.in
                        </a>
                    </div>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Email:</p>
                        <a
                            href="mailto:info@cognozire.com"
                            aria-label="Our email"
                            title="Our email"
                            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            captdeepakdogra@cognozire.in
                        </a>
                    </div>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Address:</p>
                        <a
                            href="https://www.google.com/maps"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Our address"
                            title="Our address"
                            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Pune, India
                        </a>
                    </div>
                </div>
                <div>
                    <span className="text-base font-bold tracking-wide text-gray-900">
                        Social
                    </span>
                    <div className="flex items-center mt-1 space-x-3">
                        <a
                            target='_blank'
                            href="https://twitter.com/cognozire"
                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24">
                                <path d="M20,6v12c0,1.1-0.9,2-2,2H6c-1.11,0-2-0.9-2-2V6c0-1.11,0.89-2,2-2h12C19.1,4,20,4.89,20,6z" opacity=".3"></path><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="0" stroke-width="1" d="M18,20	H6c-1.105,0-2-0.895-2-2V6c0-1.105,0.895-2,2-2h12c1.105,0,2,0.895,2,2v12C20,19.105,19.105,20,18,20z"></path><path fillRule="evenodd" d="M13.351,11.01L16.774,7h-1.311l-2.704,3.16L10.552,7h-3.85l3.941,5.633	L6.906,17h1.333l3.001-3.516L13.698,17h3.839L13.351,11.01z M8.566,7.988h1.487l5.631,8.024h-1.497L8.566,7.988z" clipRule="evenodd"></path>
                            </svg>
                        </a>

                        {/* Linkedin */}
                        <a
                            target='_blank'
                            href="https://www.linkedin.com/company/cognozire/"
                            className="text-linkedin-blue transition-colors duration-300 hover:text-linkedin-blue-darker">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24">
                                <path d="M18,21H6c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h12c1.657,0,3,1.343,3,3v12	C21,19.657,19.657,21,18,21z" opacity=".35"></path><path d="M9,17H6.477v-7H9V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2	S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826	h-2.523v-7h2.523v0.977C13.93,10.407,14.581,10,15.802,10S18,10.977,18,13.174V17z"></path>
                            </svg>
                        </a>

                    </div>
                </div>
            </div>
            <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                <p className="text-sm text-gray-600">
                    © Copyright 2023 Cognozire Inc. All rights reserved.
                </p>

            </div>
        </div>
    )
}

export default Footer
