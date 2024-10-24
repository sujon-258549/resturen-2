
import { IoMdPlay } from "react-icons/io"
import { MdOutlinePhoneInTalk } from "react-icons/md"


const Homecontact = () => {
    return (
        <div>
            <div className=" py-40 main_container">
                <div className="items-center lg:gap-10 lg:flex">
                    <div className="w-full lg:w-[40%]">
                        <div className="lg:max-w-lg">
                           <div className="bg-custom-red max-w-[380px] border-[5px] border-[#CBA16A] p-4 mx-auto">
                            <div className="flex gap-5">
                            <MdOutlinePhoneInTalk className="text-6xl font-bold text-white"/>
                            <div>
                                <h4 className="text-white text-[18px] font-semibold font-playfair">Our 24/7 Phone Services</h4>
                                <h2 className="text-white text-3xl md:text-4xl font-semibold">017-2920-1215</h2>
                            </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div className="flex relative items-center justify-center w-full mt-6 lg:mt-0 lg:w-[60%]">
                        <img
                            className="w-full h-full lg:max-w-3xl"
                            src="https://takumibd.com/assets/front/img/5f3b83bbf0042.jpg"
                            alt="Catalogue-pana.svg"
                        />
                        <div className="absolute border px-[100px] md:px-64 py-10 md:py-20">
                        <IoMdPlay className="text-white text-6xl bg-black border-white rounded-full border p-2" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Homecontact
