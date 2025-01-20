import { useRef } from "react"
import Hero from "../components/Hero"
import { ReactLenis } from '@studio-freight/react-lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from "@gsap/react"
import AllProducts from "../components/AllProducts"
gsap.registerPlugin(ScrollTrigger)


function Home() {
    const topTextRef = useRef(null)
    const containerRef = useRef(null)
    const bottomImageRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: '0% 100%',
                scrub: true,


            }
        })

        tl.from(topTextRef.current, {
            y: -700
        }).to(topTextRef.current, {
            y: 0,

        })

        tl.from(bottomImageRef.current, {
            rotate: 0,
            x: -100
        }).to(bottomImageRef.current, {
            rotate: 45,
            duration: 1,

        })
        
    })
    return (
        <ReactLenis root options={{ lerp: 0.1 }}>
            <div className="h-screen w-full">
                <Hero />
                <div ref={containerRef} className="min-h-screen bg-[#A9B3AE] relative overflow-hidden  ">
                    <div ref={topTextRef} className="flex flex-col justify-between min-h-full">
                        <div className="flex flex-col ">
                            {/* <img src="./section_2.png" alt="" className="w-[400px] z-50 opacity-70" /> */}
                            <div className=" text-white">
                                <h1 className="text-[5rem] font-[350] text-center text-[#102B2C] mb-10">New arrivals in this week</h1>
                            </div>


                            <div className="flex gap-8 mt-16  w-full justify-center ">

                                <div className="bg-[#EAD9CF] h-fit w-[40rem] flex relative overflow-hidden rounded-xl text-[#323A3B]">
                                    <div className="div1 px-6 py-10">
                                        <h1 className=" font-light text-sm">Big sale product</h1>
                                        <h1 className="w-60 text-2xl mt-4">Plant for Interior Decoration</h1>
                                        <div className="mt-6 bg-[#D6C6BB] w-fit px-4 py-2 rounded-3xl">
                                            <h1 className="font-light">Start From <span className="font-semibold text-lg text-[#365241]">$320</span></h1>
                                        </div>
                                        <div className="w-fit mt-8">
                                            <h1>SHOP NOW</h1>
                                            <div className="min-w-fit bg-gray-900 h-[0.1rem] rounded-sm"></div>
                                        </div>
                                    </div>
                                    <div className="w-72 top-5 left-16 relative overflow-hidden" >
                                        <div className="absolute bottom-[-25px]">
                                            <img src="./home_decor.png" alt="" className="w-72 h-72" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col div2 justify-between">
                                    <div className="bg-[#E6EAE2] w-[30rem]  flex relative overflow-hidden rounded-xl text-[#323A3B]">
                                        <div className="div1 px-4 py-3">
                                            <h1 className="font-light text-sm">New category</h1>
                                            <h1 className="w-60 text-2xl mt-4">Monsera</h1>

                                            <div className="w-fit mt-4">
                                                <h1>SHOP NOW</h1>
                                                <div className="min-w-fit bg-gray-900 h-[0.1rem] rounded-sm"></div>
                                            </div>
                                        </div>
                                        <div className="w-40 top-5 relative overflow-hidden" >
                                            <div className="absolute bottom-[-20px] left-[-25px]">
                                                <img src="./home_decor.png" alt="" className="w-40 h-40" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-[#173136]  flex relative overflow-hidden rounded-xl text-white/80">
                                        <div className="div1 px-4 py-3">
                                            <h1 className=" font-light text-sm">New product</h1>
                                            <h1 className="w-60 text-2xl mt-4">Plant for Garden</h1>

                                            <div className="w-fit mt-4">
                                                <h1>SHOP NOW</h1>
                                                <div className="min-w-fit bg-gray-50 h-[0.1rem] rounded-sm"></div>
                                            </div>
                                        </div>
                                        <div className="w-40 top-5 relative overflow-hidden" >
                                            <div className="absolute bottom-[-20px] left-[-25px]">
                                                <img src="./home_decor.png" alt="" className="w-40 h-40" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-20"></div>
                        <div className="main relative flex h-[250px] items-start justify-around">
                            <div ref={bottomImageRef} className="w-[600px] rounded-full bg-[#CAD2CB] rotate-45 absolute left-[-100px] border-8 bottom-[-240px] ">
                                <img src="./plant2.png" alt="" className="w-[600px] h-[600px]   " />
                            </div>
                            <div></div>
                            <div className="text-center ">
                                <h1 className="text-[3rem] text-[#051B20] w-[800px] font-light">We have made the beauty of plants one of the most beautiful features in your home.</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <AllProducts />
            </div>
        </ReactLenis>
    )
}

export default Home
