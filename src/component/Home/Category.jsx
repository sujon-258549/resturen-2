const category = [
    {
        image: 'https://takumibd.com/assets/front/img/features/1598681487.png',
        text: 'Sweet Cheeses'
    },
    {
        image: 'https://takumibd.com/assets/front/img/features/1599804681.png',
        text: 'Fresh Items'
    },
    {
        image: 'https://takumibd.com/assets/front/img/features/1598681208.png',
        text: 'Tasty foods'
    },
    {
        image: 'https://takumibd.com/assets/front/img/features/1598681487.png',
        text: 'Sweet cheeses'
    },
    {
        image: 'https://takumibd.com/assets/front/img/features/1598681561.jpg',
        text: 'Bast Pazzas'
    },
    {
        image: 'https://takumibd.com/assets/front/img/features/1598681630.jpg',
        text: 'Hot snacks'
    }
];

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './slider2.css'

// Import required modules
import { Navigation, Pagination , Autoplay} from 'swiper/modules';

export default function Category() {
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
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Navigation, Autoplay,Pagination]}
                className="mySwiper"
            >
                {category.map((item, index) => (
                   <SwiperSlide style={{transition:'.6s'}} key={index} className='bg-white py-14 border-b-[5px]  transition-all border-white hover:border-custom-red'>
                   <div className="flex flex-col items-center">
                       <img
                           src={item.image}
                           alt={item.text}
                           className="h-auto object-cover"
                       />
                       <p className="mt-2 text-lg font-semibold font-playfair">{item.text}</p>
                   </div>
               </SwiperSlide>
               
                ))}
            </Swiper>
        </>
    );
}
