const menuItems = [
    {
        image: 'https://takumibd.com/assets/front/img/product/featured/1648362629.png',
        name: "Curry Croquette Bento",
        description: "The curry croquettes with original curry spices are highly appreciated...",
        price: 600,
        discountPrice: 550, // Discounted price
        isSpecial: false
    },
    {
        image: 'https://takumibd.com/assets/front/img/product/featured/1648362283.png',
        name: "Beef Croquette Bento",
        description: "The croquettes are crunchy and have chunks of meat inside. The sauce...",
        price: 600,
        discountPrice: 580, // Discounted price
        isSpecial: true
    },
    {
        image: 'https://takumibd.com/assets/front/img/product/featured/1648362058.png',
        name: "Yu-rin-chi Bento casus psssdf",
        description: "The refreshing sweet vinegar is very tasty and makes the rice go faster...",
        price: 600,
        discountPrice: 570, // Discounted price
        isSpecial: false
    },
    {
        image: 'https://takumibd.com/assets/front/img/product/featured/1648361841.png',
        name: "Karaage Bento basus king",
        description: "The number one repeat customer. Crispy on the outside. Juicy and tender...",
        price: 600,
        discountPrice: 590, // Discounted price
        isSpecial: false
    },
    {
        image: 'https://takumibd.com/assets/front/img/product/featured/1648361649.png',
        name: "Shogayaki Bento masus",
        description: "Japanese ginger barbecue. Grilled beef. Enjoy with Japanese Ginger sauce...",
        price: 650,
        discountPrice: 620, // Discounted price
        isSpecial: true
    },
    {
        image: 'https://takumibd.com/assets/front/img/product/featured/1648361428.png',
        name: "Yakiniku Bento gasus assets",
        description: "Japanese barbecue. Grilled beef. Enjoy with Japanese sauce. Side dishes...",
        price: 650,
        discountPrice: 630, // Discounted price
        isSpecial: false
    }
];


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './slider2.css'

// Import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function Slider3() {
    return (
        <>
            <Swiper
                navigation={true}
                loop={true}
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                }}
                modules={[Navigation, Autoplay, Pagination]}
                className="mySwiper"
            >
                {menuItems.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="product-card rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
                            <div className="absolute -left-[40%] top-0 group-hover:rotate-12 transition-all duration-300 group-hover:scale-150">
                                <div className="flex gap-1">
                                    <svg
                                        stroke-linejoin="round"
                                        stroke-linecap="round"
                                        stroke-width="1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="fill-gray-300 rotate-[24deg]"
                                        height="200"
                                        width="200"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                                        ></polygon>
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute rounded-full bg-gray-500 z-20 left-1/2 top-[44%] h-[110%] w-[110%] -translate-x-1/2 group-hover:top-[58%] transition-all duration-300"></div>
                            <div className="para uppercase text-center leading-none z-40">
                                <h1 className="text-black font-semibold font-playfair text-2xl md:text-4xl lg:text-5xl">
                                    ৳ {item.price}
                                </h1>
                                <div>
                                    {item.discountPrice && (
                                        <>
                                            <h4 className="text-center text-red-500 text-2xl font-medium font-playfair">
                                                ৳ {item.discountPrice}
                                            </h4>
                                            <div className="border-1 border-b -mt-4 border-red-500 w-16 mx-auto"></div>
                                        </>
                                    )}
                                </div>
                                <h2 className="text-2xl py-5 font-semibold font-playfair">
                                    {item.name}
                                </h2>
                                <p className="pb-5">
                                    {item.description.slice(0, 60)}
                                </p>
                            </div>
                            <div className="img w-[300px] aspect-square bg-gray-100 z-40 rounded-md">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="btm-_container z-40 w-full">
                                <button className="btn bg-custom-red text-xl font-semibold text-white border-none font-playfair  w-full">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}