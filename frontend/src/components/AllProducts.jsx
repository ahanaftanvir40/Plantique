import ProductCard from "./ProductCard"
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from "react"
import Testimonial from "./Testimonial"
gsap.registerPlugin(ScrollTrigger)

function AllProducts() {

    const imageContainerRef = useRef(null)
    const containerRef = useRef(null)
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: '0% 100%',
                scrub: true,



            }
        })

        tl.to(imageContainerRef.current, {
            rotate: -65,
            x: -380,

        }, 'a')
        tl.to(containerRef.current, {
            y: -500
        }, 'a')
    })


    return (
        <div ref={containerRef} className="min-h-screen bg-[#a3c4b4] py-4  overflow-hidden ">
            <div className="flex justify-between   relative">
                <div className="div1">
                    <h1 className="text-4xl font-light text-[#102B2C] px-2 py-4 ">Make your home beautiful with plants</h1>
                    <div className="flex gap-4 px-8">
                        <div className="w-28 text-center py-2 bg-green-900 rounded-3xl">
                            <h1 className="text-white/60">All</h1>
                        </div>
                        {/*Categories */}
                        <div className="w-28 text-center  bg-gray-50 rounded-3xl">
                            <div className="flex items-center gap-1">
                                <img src="./cactus.png" className="w-8 h-8 mt-1" alt="" />
                                <h1 className="text-[#102B2C]">Cactus</h1>
                            </div>
                        </div>
                        <div className="w-28 text-center  bg-gray-50 rounded-3xl">
                            <div className="flex items-center gap-1">
                                <img src="./rose.png" className="w-8 h-8 mt-1" alt="" />
                                <h1 className="text-[#102B2C]">Rose</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dummy"></div>
                <div ref={imageContainerRef} className="w-[600px] absolute bottom-[-280px] right-[-450px] ">
                    <img src="./plant3.png" alt="" className="w-[600px] h-[600px]" />
                </div>
            </div>

            <div className="mt-10 px-10 flex flex-wrap gap-4">

                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

            <Testimonial />

        </div>
    )
}

export default AllProducts
