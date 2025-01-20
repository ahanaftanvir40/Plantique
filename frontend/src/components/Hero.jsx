import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"
gsap.registerPlugin(useGSAP, ScrollTrigger)

function Hero() {
    const textRef = useRef(null)
    const containerRef = useRef(null)
    const imageRef = useRef(null)

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                // markers: true,
                start: "48% 50%",
                scrub: true,


            }
        })
        tl.to(textRef.current, {
            y: -100
        }, 'a')
            .to(imageRef.current, {
                scale: 1.1,
                y: 120
            }, 'a')
            .to(containerRef.current, {
                // background: '#1F4529',
                y: 200
            }, 'a')
    })


    return (
        <div ref={containerRef} className="h-screen">
            <h1 ref={textRef} className="text-[10rem] font-bold text-center text-white">Plantique.</h1>
            <div className="flex items-center justify-center relative">
                <img src="./plant.png" alt="" className="w-[1200px]" />
                <div className="bg-gray-500 w-[600px] h-[700px] top-2 rounded-t-full absolute"></div>
                <img ref={imageRef} src="./hero.png" alt="" className="girl w-[799px] absolute " />
            </div>
        </div>
    )
}

export default Hero
