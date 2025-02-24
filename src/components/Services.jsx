import { FaArrowRight } from "react-icons/fa"
import embeded from '../assets/embeded.png'
import iot from '../assets/iot.png'
import brand from '../assets/brand.webp'
import {motion} from 'framer-motion'
const Services = () => {
  return (
    <section className="container mx-auto  max-w-screen-2xl py-20 px-4">
        <div>
           {/* heading content */}
           <h1 className="text-black text-2xl font-semibold"><span className="text-[#1464ff] text-3xl">-</span>Services</h1>
           <div className="flex justify-between">
            <h1 className="font-semibold text-5xl"><span className="text-[#F9AD1B]">Services</span> I Provide</h1>
            <button className="flex hover:bg-black hover:text-white cursor-pointer transition-all items-center justify-center gap-2 px-6 py-2 rounded-full bg-[#F9AD1B]">See More<FaArrowRight  className=" rounded-full  bg-white "/></button>
            </div>
            {/* card design */}
            <div className="mt-10">
                <div className=" flex flex-col sm:flex-col md:flex-row items-center justify-around  gap-6    ">
                <motion.div drag className="card w-[345px]  flex flex-col rounded-2xl shadow-2xl  hover:scale-125 transition-all gap-3 p-8 ">
                    <img className="w-[90px]" src={embeded} alt="" />
                    <h1 className="heading  text-3xl font-semibold">Embedded Engineer</h1>
                    <p className="text text-[#737171] font-medium">Designs & develops optimized firmware and hardware solutions for embedded systems.</p>
                </motion.div>
                <motion.div drag className="card w-[345px]  flex flex-col gap-3 hover:scale-125 transition-all p-8 rounded-2xl shadow-2xl ">
                    <img className="w-[90px]" src={iot} alt="" />
                    <h1 className="heading  text-3xl font-semibold">Embedded Engineer</h1>
                    <p className="text text-[#737171] font-medium">Designs & develops optimized firmware and hardware solutions for embedded systems.</p>
                </motion.div>
                <motion.div drag className="card w-[345px]  flex flex-col gap-3 rounded-2xl p-8 shadow-2xl hover:scale-125 transition-all ">
                    <img className="w-[90px]" src={brand} alt="" />
                    <h1 className="heading  text-3xl font-semibold">Embedded Engineer</h1>
                    <p className="text text-[#737171] font-medium">Designs & develops optimized firmware and hardware solutions for embedded systems.</p>
                </motion.div>
                <motion.div drag className="card w-[345px]  flex flex-col gap-3 rounded-2xl p-8 shadow-2xl hover:scale-125 transition-all ">
                    <img className="w-[90px]" src={brand} alt="" />
                    <h1 className="heading  text-3xl font-semibold">Embedded Engineer</h1>
                    <p className="text text-[#737171] font-medium">Designs & develops optimized firmware and hardware solutions for embedded systems.</p>
                </motion.div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services