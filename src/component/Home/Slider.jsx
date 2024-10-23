
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider1.css'


// import required modules
import { Navigation, Pagination, Autoplay, Mousewheel } from 'swiper/modules';

export default function Slider() {
    return (
        <>
            <Swiper
                // slidesPerView={1}
                // spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                // mousewheel={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                keyboard={true}
                modules={[Navigation, Autoplay, Pagination, Mousewheel]}
                className="mySwiper"
            >
                <SwiperSlide>

                    <div className="max-w-[90%] mx-auto py-10 md:py-20">
                        <div className="items-center lg:flex">
                            <div className="w-full lg:w-1/3">
                                <div className="">
                                    <h1 className="text-2xl font-semibold font-playfair text-gray-800 dark:text-white lg:text-5xl">
                                        Yodare-Chicken
                                    </h1>
                                    <p className="mt-3 text-xl text-gray-600 md:mt-5 dark:text-gray-400">
                                        Shiratama-kinako
                                    </p>
                                    <div className='flex gap-5 pt-5 md:pt-10'>
                                        <button className='border-2 font-playfair text-white text-sm md:text-xl p-2 md:p-4 hover:bg-custom-red duration-[.6s]'> Add to cart</button>


                                        <button className='hover:border-white text-white text-sm md:text-xl p-2 md:p-4 hover:bg-transparent bg-custom-red font-playfair border-custom-red border-2 duration-[.6s]'> Book a Table</button>

                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-2/3">
                                <img
                                    className="w-full h-full "
                                    src="https://takumibd.com/assets/front/img/sliders/1648960080.jpg"
                                    alt="Catalogue-pana.svg"
                                />
                            </div>
                        </div>
                    </div>


                </SwiperSlide>
                <SwiperSlide>

                    <div className="max-w-[90%] mx-auto py-10 md:py-20">
                        <div className="items-center lg:flex">
                            <div className="w-full lg:w-1/3">
                                <div className="">
                                    <h1 className="text-2xl font-semibold font-playfair text-gray-800 dark:text-white lg:text-5xl">
                                    Shiratama-kinako
                                    </h1>
                                    <p className="mt-3 text-xl text-gray-600 md:mt-5 dark:text-gray-400">
                                        Yodare-Chicken
                                    </p>
                                    <div className='flex gap-5 pt-5 md:pt-10'>
                                        <button className='border-2 font-playfair text-white text-sm md:text-xl p-2 md:p-4 hover:bg-custom-red duration-[.6s]'> Add to cart</button>


                                        <button className='hover:border-white text-white text-sm md:text-xl p-2 md:p-4 hover:bg-transparent bg-custom-red font-playfair border-custom-red border-2 duration-[.6s]'> Book a Table</button>

                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-2/3">
                                <img
                                    className="w-full h-full "
                                    src="https://takumibd.com/assets/front/img/sliders/1648960058.jpg"
                                    alt="Catalogue-pana.svg"
                                />
                            </div>
                        </div>
                    </div>


                </SwiperSlide>
                <SwiperSlide>

                    <div className="max-w-[90%] mx-auto py-10 md:py-20">
                        <div className="items-center lg:flex">
                            <div className="w-full lg:w-1/3">
                                <div className="">
                                    <h1 className="text-2xl font-semibold font-playfair text-gray-800 dark:text-white lg:text-5xl">
                                        Gyu Yakiniku (Grilled beef) Bento2 Compressed
                                    </h1>
                                    <p className="mt-3 text-xl text-gray-600 md:mt-5 dark:text-gray-400">
                                        Yodare-Chicken
                                    </p>
                                    <div className='flex gap-5 pt-5 md:pt-10'>
                                        <button className='border-2 font-playfair text-white text-sm md:text-xl p-2 md:p-4 hover:bg-custom-red duration-[.6s]'> Add to cart</button>


                                        <button className='hover:border-white text-white text-sm md:text-xl p-2 md:p-4 hover:bg-transparent bg-custom-red font-playfair border-custom-red border-2 duration-[.6s]'> Book a Table</button>

                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-2/3">
                                <img
                                    className="w-full h-full "
                                    src="https://takumibd.com/assets/front/img/sliders/1647832972.jpg"
                                    alt="Catalogue-pana.svg"
                                />
                            </div>
                        </div>
                    </div>


                </SwiperSlide>



            </Swiper>
        </>
    );
}
