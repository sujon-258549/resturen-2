import Category from "./Category"
import Homecontact from "./Homecontact"
import Hometext from "./Hometext"
import Map from "./Map"
import OurBlog from "./OurBlog"
import Ourmenu from "./Ourmenu"
import Ourstory from "./Ourstory"
import Slider from "./Slider"
import Slider3 from "./Slider3"
import './home.css'

const Home = () => {
    return (
        <section>
            <div className="pt-32 md:pt-24 home">
                <Slider></Slider>
            </div>
            <div className="home2 -mt-5 md:-mt-0">

            </div>
            <div className=" max-w-full mx-auto md:max-w-[70%] -mt-40 md:-mt-64 ">
                <img className="w-full" src="https://takumibd.com/assets/front/img/5fec644e710b9.png" alt="" />
            </div>
            <div className="bg-[#F6F6F6] py-10 md:py-20">
                <div className="max-w-[90%] mx-auto">
                    <Category></Category>
                </div>
            </div>
            <Ourstory></Ourstory>
            <Homecontact></Homecontact>
            <Ourmenu></Ourmenu>
            <div className="lg:flex gap-5 items-center main_container py-10 md:py-20">
                <div className="lg:w-[65%]">
                    <Slider3></Slider3>
                </div>
                <div className="lg:w-[35%]">
                    <Hometext></Hometext>
                </div>
            </div>
            <OurBlog></OurBlog>
            <Map></Map>
        </section>
    )
}

export default Home
