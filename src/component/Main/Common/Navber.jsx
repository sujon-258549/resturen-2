import { useState } from 'react';
import {  FaChevronRight } from 'react-icons/fa';
import { IoMenu, IoTimeOutline } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';

const Navber = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    return (
        <section className='bg-[#0F1012]'>
            <div className='main_container'>
                <header className='flex shadow-md py-4 px-4 sm:px-10 font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
                    <div className='flex flex-wrap items-center justify-between gap-5 w-full'>
                        <a href="javascript:void(0)">
                            <img src="https://takumibd.com/assets/front/img/624921a7199ec.jpg" alt="logo" className='w-16' />
                        </a>

                        <div
                            id="collapseMenu"
                            className={`${isMenuOpen ? 'block' : 'max-lg:hidden'
                                } lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}
                        >
                            <button
                                id="toggleClose"
                                className='lg:hidden fixed top-6 border right-[36px] md:right-[60px] rounded-full bg-white p-2' style={{ zIndex: '999' }}
                                onClick={toggleMenu}
                            >
                                <RxCross2 className='text-3xl text-black' />
                            </button>

                            <ul
                                className={`lg:flex gap-x-0 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[360px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 ${isMenuOpen ? 'block' : 'hidden'
                                    }`}
                            >
                                <li className='max-lg:border-b font-playfair border-gray-300 max-lg:py-2 px-3'>
                                    <a href='#' className='hover:text-blue-500 text-blue-500 block  uppercase font-semibold text-[14px]' aria-current="page">Home</a>
                                </li>
                                <li className='max-lg:border-b font-playfair border-gray-300 max-lg:py-3 px-2'>


                                    <div className="group relative cursor-pointer">
                                        <div className="flex items-center justify-between space-x-2 ">
                                            <a href='#' className='hover:text-blue-500 text-black lg:text-white  block  uppercase font-semibold text-[14px]'>Team</a>
                                            <span>
                                            <FaChevronRight className='text-sm text-black lg:text-white rotate-90'  />
                                              
                                            </span>
                                        </div>
                                        <div className="invisible absolute z-50 lg:mt-0 mt-3 flex w-full -ml-4 lg:-ml-0 lg:w-56 flex-col bg-gray-100   text-gray-800 shadow-xl group-hover:visible">


                                            <a
                                                href="#"
                                                className=" hover:bg-custom-red block border-b border-gray-100 py-2 font-semibold text-black px-4 hover:text-white  text-[14px]"
                                            >
                                                Foods
                                            </a>

                                            <a
                                                href="#"
                                                className=" hover:bg-custom-red block border-b border-gray-100 py-2 font-semibold text-black px-4 hover:text-white  text-[14px]"
                                            >
                                                Cart
                                            </a>

                                            <a
                                                href="#"
                                                className=" hover:bg-custom-red block border-b border-gray-100 py-2 font-semibold text-black px-4 hover:text-white  text-[14px]"
                                            >
                                                Checkout
                                            </a>

                                        </div>
                                    </div>


                                </li>
                                <li className='max-lg:border-b font-playfair border-gray-300 max-lg:py-3 px-3'>
                                    <a href='#' className='hover:text-blue-500 text-black lg:text-white  block  uppercase font-semibold text-[14px]'>Feature</a>
                                </li>
                                <li className='max-lg:border-b font-playfair border-gray-300 max-lg:py-3 px-2'>
                                    <a href='#' className='hover:text-blue-500 text-black lg:text-white  block  uppercase font-semibold text-[14px]'>Blog</a>
                                </li>
                                <li className='max-lg:border-b font-playfair border-gray-300 max-lg:py-3 px-2'>


                                    <div className="group relative cursor-pointer">
                                        <div className="flex items-center justify-between space-x-2 ">

                                            
                                            <a href='#' className='hover:text-blue-500 text-black lg:text-white  block  uppercase font-semibold text-[14px]'>About</a>
                                            <span>
                                            <FaChevronRight className='text-sm text-black lg:text-white rotate-90'  />
                                            </span>
                                        </div>
                                        <li>

                                            <ul>
                                        
                                                <li>
                                                <div className="invisible absolute z-50 lg:mt-0 mt-3 flex  -ml-4 lg:-ml-0 lg:w-56 flex-col bg-gray-100   text-gray-800 shadow-xl group-hover:visible">

                                                        <li
                                                            onMouseEnter={() => setIsOpen(true)}
                                                            onMouseLeave={() => setIsOpen(false)}
                                                            className="relative" // Make this li relative to position the submenu absolutely
                                                        >
                                                            <a
                                                                href="#"
                                                                className="block border-b border-gray-100 pt-5 font-semibold  hover:bg-custom-red hover:text-white lg:text-black  px-5 uppercase flex justify-between items-center"
                                                            >
                                                                Dynamic Pages <FaChevronRight className='text-sm ' />
                                                            </a>
                                                            {isOpen && (
                                                                <div className='absolute left-full top-0 w-64'> {/* Adjust positioning as needed */}
                                                                    <ul className='bg-white'>
                                                                        <li>
                                                                            <a
                                                                                href="#about-us"
                                                                                className="hover:bg-custom-red block border-b border-gray-100 py-2 font-semibold text-black px-4 hover:text-white  text-[14px]"
                                                                            >
                                                                                About Us
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#privacy-policy"
                                                                                className="hover:bg-custom-red block border-b border-gray-100 py-2 font-semibold text-black px-4 hover:text-white  text-[14px]"
                                                                            >
                                                                                Privacy Policy
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#terms-and-conditions"
                                                                                className="hover:bg-custom-red block border-b border-gray-100 py-2 font-semibold text-black px-4 hover:text-white  text-[14px]"
                                                                            >
                                                                                Terms and Conditions
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            )}
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="hover:bg-custom-red block border-b border-gray-100 py-2 font-semibold text-black px-4 hover:text-white  text-[14px]"
                                                            >
                                                                Gallery
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="hover:bg-custom-red block border-b border-gray-100 py-2 font-semibold text-black px-4 hover:text-white  text-[14px]"
                                                            >
                                                                FAQ
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="hover:bg-custom-red block border-b border-gray-100 py-2 font-semibold text-black px-4 hover:text-white  text-[14px]"
                                                            >
                                                                Career
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="hover:bg-custom-red block border-b border-gray-100 py-2 font-semibold text-black px-4 hover:text-white  text-[14px]"
                                                            >
                                                                Team Members
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className=" hover:bg-custom-red block border-b border-gray-100 py-2 font-semibold text-black px-4 hover:text-white  text-[14px]"
                                                            >
                                                                Reservation
                                                            </a>
                                                        </li>
                                                        <li
                                                            onMouseEnter={() => setIsOpen2(true)}
                                                            onMouseLeave={() => setIsOpen2(false)}
                                                            className="relative" // Make this li relative to position the submenu absolutely
                                                        >
                                                            <a
                                                                href="#"
                                                                className="hover:bg-custom-red block border-b border-gray-100 py-2 font-semibold text-black px-4 hover:text-white  text-[14px] flex justify-between items-center"
                                                            >
                                                                Unlimited Levels  <FaChevronRight className='text-sm' />
                                                            </a>
                                                            {isOpen2 && (
                                                                <div className='absolute left-full top-0 w-64'> {/* Adjust positioning as needed */}
                                                                    <ul className='bg-white'>
                                                                        <li>
                                                                            <a
                                                                                href="#about-us"
                                                                                className="hover:bg-custom-red block border-b border-gray-100 py-2 font-semibold text-black px-4 hover:text-white  text-[14px]"
                                                                            >
                                                                                Level 3-1
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#privacy-policy"
                                                                                className="hover:bg-custom-red block border-b border-gray-100 py-2 font-semibold text-black px-4 hover:text-white  text-[14px]"
                                                                            >
                                                                                Level 3-2
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#terms-and-conditions"
                                                                                className="hover:bg-custom-red block border-b border-gray-100 py-2 font-semibold text-black px-4 hover:text-white  text-[14px]"
                                                                            >
                                                                                Level 3-3
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            )}
                                                        </li>

                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </div>


                                </li>
                                <li className='max-lg:border-b font-playfair border-gray-300 max-lg:py-3 px-2'>
                                    <a href='#' className='hover:text-blue-500 text-black lg:text-white  block  uppercase font-semibold text-[14px]'>Contact</a>
                                </li>
                            </ul>
                        </div>

                        <div className='flex max-lg:ml-auto space-x-3'>
                            <div className='hidden lg:block'>
                                <div className='flex gap-2 items-center'>
                                    <IoTimeOutline className='text-custom-red text-4xl' />
                                    <div>

                                        <h5 className='text-[12px] text-black lg:text-white  font-semibold'>Opening Time</h5>
                                        <p className='text-black lg:text-white  text-sm'>Mon to Friday 9Am - 11 Pm</p>
                                    </div>
                                </div>
                            </div>
                            <button className='bg-custom-red block rounded-md py-2 font-semibold text-white px-4 hover:text-white  text-[14px]'>
                                Reservation
                            </button>


                            <button id="toggleOpen" className='lg:hidden border  z-[100] rounded-full bg-white p-2' onClick={toggleMenu}>
                                <IoMenu className='text-3xl text-black' />
                            </button>
                        </div>
                    </div>
                </header>
            </div >
        </section >
    );
};

export default Navber;
