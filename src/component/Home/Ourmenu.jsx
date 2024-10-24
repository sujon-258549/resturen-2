import { FaPlus } from "react-icons/fa";
import Addtocard from "../Main/Addtocard";
import Header from "../Main/Header";
import './ourstory.css'
import { useState } from "react";
import ViewsDetailbutton from "../Main/VieswDetailbutton";

const menus = [
    {
        image: 'https://takumibd.com/assets/front/img/category/5f49f32b3e7f6.png',
        text: 'Bento Box (6)'
    },
    {
        image: 'https://takumibd.com/assets/front/img/category/5f49f38d9b272.png',
        text: 'Udon (6)'
    },
    {
        image: 'https://takumibd.com/assets/front/img/category/623bfc0791566.png',
        text: 'Japanese Sweets (3)'
    },
    {
        image: 'https://takumibd.com/assets/front/img/category/623bfc51e2c98.jpg',
        text: 'Donburi (4)'
    },
    {
        image: 'https://takumibd.com/assets/front/img/category/623bfc7f6b19c.png',
        text: 'Onigiri (0)'
    }
];

const menuItems = [
    {
        image: 'https://takumibd.com/assets/front/img/product/featured/1648362629.png',
        name: "Curry Croquette Bento (カレーコロ)",
        description: "The curry croquettes with original curry spices are highly appreciated...",
        price: 600,
        discountPrice: 550, // Discounted price
        isSpecial: false
    },
    {
        image: 'https://takumibd.com/assets/front/img/product/featured/1648362283.png',
        name: "Beef Croquette Bento (牛コロッケ弁当)",
        description: "The croquettes are crunchy and have chunks of meat inside. The sauce...",
        price: 600,
        discountPrice: 580, // Discounted price
        isSpecial: true
    },
    {
        image: 'https://takumibd.com/assets/front/img/product/featured/1648362058.png',
        name: "Yu-rin-chi Bento",
        description: "The refreshing sweet vinegar is very tasty and makes the rice go faster...",
        price: 600,
        discountPrice: 570, // Discounted price
        isSpecial: false
    },
    {
        image: 'https://takumibd.com/assets/front/img/product/featured/1648361841.png',
        name: "Karaage Bento (からあげ弁当)",
        description: "The number one repeat customer. Crispy on the outside. Juicy and tender...",
        price: 600,
        discountPrice: 590, // Discounted price
        isSpecial: false
    },
    {
        image: 'https://takumibd.com/assets/front/img/product/featured/1648361649.png',
        name: "Shogayaki Bento",
        description: "Japanese ginger barbecue. Grilled beef. Enjoy with Japanese Ginger sauce...",
        price: 650,
        discountPrice: 620, // Discounted price
        isSpecial: true
    },
    {
        image: 'https://takumibd.com/assets/front/img/product/featured/1648361428.png',
        name: "Yakiniku Bento (牛焼肉弁当)",
        description: "Japanese barbecue. Grilled beef. Enjoy with Japanese sauce. Side dishes...",
        price: 650,
        discountPrice: 630, // Discounted price
        isSpecial: false
    }
];



const Ourmenu = () => {
    const [isopern, setIsopen] = useState(false)
    console.log(isopern)
    return (
        <section className="my-10 md:my-20">
            <div className="main_container">
                <Header topheader={'Our Menus'} mainheader={'Discover Food Menus'} />
                <div className="menu-container flex justify-center gap-5 pt-10 md:pt-20 flex-wrap">
                    {menus.map((menu, index) => (
                        <div key={index} className="border p-8 rounded-md" style={{ boxShadow: '1px 1px 10px' }}>
                            <img className="flex justify-center mx-auto" src={menu.image} alt={menu.text} />
                            <p className="text-xl font-bold font-playfair text-center">{menu.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="main_container py-10">


                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 pt-10 md:pt-20">
                    {menuItems.map((menuItem, index) => (

                        <div key={index} onMouseEnter={() => setIsopen(index)} onMouseLeave={() => setIsopen(false)} style={{transition:'.4s'}}>
                            <div className="w-full md:flex-row  relative flex-col flex items-center justify-center">
                                {/* Author card */}
                                <div className="relative w-full hover:border-custom-red border border-dashed hover:border-solid py-5 flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 px-4" style={{ boxShadow: '1px 1px 10px' }}>

                                    <div className="w-full relative flex justify-center sm:justify-start sm:w-auto">
                                        <img
                                            className="object-cover w-full md:h-20 md:w-40"
                                            src={menuItem.image}
                                        />
                                        {
                                            isopern === index &&
                                            <div className="w-full absolute bottom-0 h-full bg-[#131313c0] flex justify-center items-center">
                                                <FaPlus className="text-4xl p-2 rounded-full text-white border" />
                                            </div>
                                        }
                                    </div>
                                    <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">
                                        <p
                                            className="font-display  text-[16px] mb-2 font-playfair text-2xl font-semibold "
                                            itemProp="author"
                                        >
                                            {menuItem.name}
                                        </p>

                                        <p className="text-slate-500">{menuItem.description}</p>
                                    </div>
                                    <div className="w-20 relative">
                                        <h4 className="text-custom-red text-3xl font-medium font-playfair flex gap-1">৳{menuItem.discountPrice}</h4>
                                        <div>
                                            <h4 className="text-center text-red-500 text-xl font-medium font-playfair">৳ {menuItem.price}</h4>
                                            <div className="border-1 border-b -mt-4 border-red-500 w-10 mx-auto"></div>
                                        </div>
                                        {
                                            isopern === index &&
                                            <div className="absolute right-1 top-3" style={{ zIndex: '999' }}>
                                                <div className="w-[143px]">
                                                    <Addtocard addtocard={"Add to Card"}></Addtocard>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div className={menuItem.isSpecial ? '' : "hidden"}>
                                    <div className="menu_special rotate-[270deg] absolute -left-[34px] top-[27px]">
                                        <h3 className="text-center text-[16px] font-bold font-playfair pt-2 pb-1 text-white">Special</h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
                    <div className="pt-10 flex justify-center">
                        <ViewsDetailbutton text={'View All Items'}></ViewsDetailbutton>
                    </div>

            </div>
        </section>
    );
};

export default Ourmenu;
