import { MoveLeft, MoveRight } from "lucide-react"

function Testimonial({ containerRef2 }) {



    return (
        <div ref={containerRef2} className="mt-20  w-full">
            <div className="flex justify-around items-center h-full p-1 gap-28  ml-10 mr-10 rounded-t-2xl rounded-b-md bg-[#CAD2CB]">
                <div className="textDiv mt-1 ">
                    <h1 className="text-7xl text-[#102B2C] font-light">&quot; Testimonial <br /> <span className="px-14">highlights &quot;</span></h1>

                    <h1 className="pt-32 pb-20 w-[800px] text-center">&quot;Plantique has completely transformed my gardening experience. Their plant selection is top-notch, and the care guides are incredibly helpful. My home is now filled with thriving, beautiful plants thanks to their expert advice!&quot;</h1>

                    <h1 className="text-2xl text-[#102B2C] px-10">Marry Doe</h1>
                    <span className="text-[#102B2C] text-lg px-10">Artist</span>
                    <div className="arrow flex gap-3 px-8 py-4">
                        <div className="bg-[#C5855D] p-1 rounded-full">
                            <MoveLeft size={22} className="text-white/60" />
                        </div>
                        <div className="bg-[#A1A19D] p-1 rounded-full">
                            <MoveRight size={22} className="text-white/60" />
                        </div>

                    </div>
                </div>
                <div className="">
                    <div className=" w-[500px] rounded-full h-[500px] bg-[#a0a5a7] relative">
                        <div className="absolute top-[-80px] ">
                            <img src="./girl.png" alt="" className="w-[550px] h-[580px] rounded-b-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
