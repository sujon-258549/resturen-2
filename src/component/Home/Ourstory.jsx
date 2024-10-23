
import './ourstory.css'
const Ourstory = () => {
    return (
        <div>
            <div className="py-16 px-4 md:px-8 lg:px-0 mx-auto">
                <div className=" lg:flex">
                    <div className=" w-full mt-6 lg:mt-0 lg:w-[40%]">
                        <img
                            className="lg:h-[350px]"
                            src="https://takumibd.com/assets/front/img/62377ae96dae8.jpg"
                            alt="Catalogue-pana.svg"
                        />
                    </div>
                    <div className="w-full lg:w-[60%] lg:pt-14 flex relative">
                        <div className='absolute md:top-[153px] top-[113px] lg:top-[65px] -left-16 lg:-left-10'>
                            <div className='ourstory rotate-[270deg] flex justify-center'>
                                <h3 className='text-xl pt-4 pb-2 font-bold font-playfair text-white ml-5 uppercase'> Our Story</h3>
                            </div>
                        </div>
                        <div className="mx-auto lg:pt-0 md:pt-20 pt-10 lg:pr-20 ml-16 md:ml-24 lg:ml-32">
                            <h1 className="text-3xl font-bold  text-gray-800 lg:text-6xl md:text-4xl font-playfair">
                                Our Cafe 20 years working experience.
                            </h1>
                            <p className="mt-3 text-gray-600 dark:text-gray-400 pr-4 lg:pr-24">
                                Donec scelerisque dolor id nunc dictum, interdum gravida mauris rhoncus. Aliquam at ultrices nunc. In sem leo, fermentum at lorem in, porta finibus mauris. Aliquam consectetur, ex in gravida porttitor,
                            </p>
                            <img className="pt-8 " src="https://takumibd.com/assets/front/img/5f5b0ee606923.png" alt="" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Ourstory
