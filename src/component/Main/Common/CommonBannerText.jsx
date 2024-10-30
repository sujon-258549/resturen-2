import { FaHome } from "react-icons/fa"
import '../../Home/home.css'
import { RiArrowLeftDoubleFill } from "react-icons/ri"

const CommonBannerText = ({ bannertext, subtext }) => {
    return (
        <div className="home">
            <div className="py-40">
                <h1 className="text-3xl md:text-6xl text-white lg:text-[100px] text-center font-extrabold font-playfair">{bannertext}</h1>
                <h3 className="text-xl md:text-2xl flex gap-2 justify-center items-center text-white lg:text-[30px] text-center  font-playfair"><FaHome className="text-4xl " /> Home <span><RiArrowLeftDoubleFill className="text-3xl" /></span> <span className="text-custom-red">{subtext}</span></h3>
            </div>
        </div>
    )
}

export default CommonBannerText
