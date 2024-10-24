

const ViewsDetailbutton = ({text}) => {
    return (
        <div>
            <div className="relative">
                <button className="border flex bg-white justify-center  text-xl font-playfair px-4 py-2 border-black">{text}

                </button>
                <button className="border text-xl w-full h-full absolute  -top-[5px] left-[5px] font-playfair px-4 py-2 bg-slate-400" style={{ zIndex: '-1' }}>

                </button>
            </div>
        </div>
    )
}

export default ViewsDetailbutton
