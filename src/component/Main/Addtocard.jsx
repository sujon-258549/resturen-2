const Addtocard = ({addtocard}) => {
    return (
        <div>
            <div className="relative">
                <button className="border flex font-bold bg-white justify-center text-sm md:text-xl font-playfair px-4 py-2 border-custom-red">{addtocard}

                </button>
                <button className="border text-xl w-full h-full absolute  -top-[5px] left-[5px] font-playfair px-4 py-2 bg-custom-red" style={{ zIndex: '-1' }}>

                </button>
            </div>
        </div>
    )
}

export default Addtocard
