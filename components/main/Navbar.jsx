'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <nav className="relative px-4 py-4 flex justify-between items-center bg-transparent max-w-7xl mx-auto">
                <Link className="glow text-xl md:text-3xl font-bold leading-none text-cg-white flex justify-center items-center" href="/">
                    <Image className='' alt='Cognozire Logo' src={'/cognozireLogo.png'} width={100} height={100} />
                    <span className=''>COGNOZIRE</span>
                </Link>
                <div className="lg:hidden">
                    <button className="navbar-burger flex items-center  p-3" onClick={toggleMenu}>
                        <RxHamburgerMenu size={25} color='white' />
                    </button>
                </div>
                <ul
                    className={`hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-4 ${isMenuOpen ? '' : 'hidden'}`}
                >
                    <li><Link className=" text-cg-white font-semibold text-base hover:text-gray-500 hover:bg-slate-200  duration-300  cursor-pointer w-fit px-3 py-1 rounded-lg" href="/">Home</Link></li>

                    <li><Link className=" text-cg-white font-semibold text-base hover:text-gray-500 hover:bg-slate-200  duration-300  cursor-pointer w-fit px-3 py-1 rounded-lg" href="/services">Services</Link></li>

                    <li><Link className=" text-cg-white font-semibold text-base hover:text-gray-500 hover:bg-slate-200  duration-300  cursor-pointer w-fit px-3 py-1 rounded-lg" href="/clients">Clients</Link></li>

                </ul>
                <a
                    className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 ring hover:ring-slate-200 text-sm text-gray-900 font-bold rounded-xl transition duration-200"
                    href="#contactUs"
                >
                    Contact Us
                </a>
            </nav>
            <div className={`navbar-menu relative z-50 ${isMenuOpen ? '' : 'hidden'}`}>
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25 "></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <a className="mr-auto text-3xl font-bold leading-none" href="#">
                            <svg className="h-12" alt="logo" viewBox="0 0 10240 10240">
                                {/* SVG Path Here */}
                            </svg>
                        </a>
                        <button className="navbar-close" onClick={toggleMenu}>
                            <svg
                                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <RxCross1 size={20} />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="/">
                                    Home
                                </Link>
                                <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="/services">
                                    Services
                                </Link>
                                <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="/clients">
                                    Clients
                                </Link>
                                
                            </li>
                        </ul>
                    </div>
                    <div className="mt-auto">
                        <div className="pt-6">
                            <Link
                                className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold  bg-gray-50 hover:bg-gray-100 rounded-xl"
                                href="#contactUs"
                            >
                                Contact Us
                            </Link>
                        </div>
                        <p className="my-4 text-xs text-center text-gray-400">
                            <span>Copyright © 2023</span>
                        </p>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
