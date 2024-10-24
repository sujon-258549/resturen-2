import { FaCalendarAlt } from "react-icons/fa"
import Addtocard from "../Main/Addtocard"
import Header from "../Main/Header"


const OurBlog = () => {
    return (
        <div className="main_container ">
            <Header mainheader={'Latest News Feeds'} topheader={'Our Blog'}></Header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10  md:pt-20">
                <div>
                    {/* CARD 1 */}
                    <div className="rounded overflow-hidden  flex flex-col">
                        <a href="#" />
                        <div className="relative">
                            <a href="#">
                                <img
                                    className="w-full"
                                    src="https://takumibd.com/assets/front/img/blogs/1702788949.jpeg"
                                    alt="Sunset in the mountains"
                                />
                                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0"></div>
                            </a>

                        </div>
                        <div className="px-6 py-4 mb-auto">
                            <a
                                href="#"
                                className=" text-xl md:text-2xl font-bold font-playfair inline-block hover:text-custom-red transition duration-500 ease-in-out inline-block mb-2"
                            >
                                Takumi || The Best Japanese Restaurant in Dhaka
                            </a>
                            <p className="text-gray-500 text-[16px]">
                                Are you looking for the best Japanese restaurant in Dhaka? Takumi is here to provide the best &amp; ...
                            </p>
                        </div>
                        <div className="px-6 py-3 flex flex-row items-center justify-between">
                            <Addtocard addtocard={'Read More'}></Addtocard>
                            <div>
                                <div className="flex">
                                <FaCalendarAlt className="text-sm md:text-xl" /><p className="text-[12px] md:text-[16px] font-playfair font-semibold ml-1 md:ml-3">10 months ago | Admin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* CARD 1 */}
                    <div className="rounded overflow-hidden  flex flex-col">
                        <a href="#" />
                        <div className="relative">
                            <a href="#">
                                <img
                                    className="w-full"
                                    src="https://takumibd.com/assets/front/img/blogs/1598695007.jpg"
                                    alt="Sunset in the mountains"
                                />
                                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0"></div>
                            </a>

                        </div>
                        <div className="px-6 py-4 mb-auto">
                            <a
                                href="#"
                                className=" text-xl md:text-2xl font-bold font-playfair inline-block hover:text-custom-red transition duration-500 ease-in-out inline-block mb-2"
                            >
                               Fusce convallis enim non magna Duis lacus dignissim.
                            </a>
                            <p className="text-gray-500 text-[16px]">
                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry,s s...
                            </p>
                        </div>
                        <div className="px-6 py-3 flex flex-row items-center justify-between">
                            <Addtocard addtocard={'Read More'}></Addtocard>
                            <div>
                                <div className="flex">
                                <FaCalendarAlt className="text-sm md:text-xl" /><p className="text-[12px] md:text-[16px] font-playfair font-semibold ml-1 md:ml-3">10 months ago | Admin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurBlog
