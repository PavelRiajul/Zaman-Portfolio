// import { FaArrowRight } from "react-icons/fa"
// import embeded from '../assets/embeded.png'
// import iot from '../assets/iot.png'
// import brand from '../assets/brand.webp'
// import {motion} from 'framer-motion'
// const Services = () => {
//   return (
//     <section className="container services-header mx-auto  max-w-screen-2xl py-20 px-4">
//         <div>
//            {/* heading content */}
//            <h1 className="text-black text-2xl font-semibold"><span className="text-[#1464ff] text-3xl">-</span>Services</h1>
//            <div className="flex flex-col sm:flex-col md:flex-row justify-between">
//             <h1 className="font-semibold service-h text-5xl"><span className="text-[#F9AD1B]">Services</span> I Provide</h1>
//             <button className="flex btn-seemore hover:bg-black hover:text-white cursor-pointer transition-all items-center justify-center gap-2 px-6 py-2 rounded-full bg-[#F9AD1B]">See More<FaArrowRight  className=" rounded-full  bg-white "/></button>
//             </div>
//             {/* card design */}
//             <div className="mt-10">
//                 <div className=" flex flex-col sm:flex-col md:flex-row items-center justify-around  gap-6    ">
//                 <motion.div  className="card w-[345px]  flex flex-col rounded-2xl shadow-2xl  hover:scale-125 transition-all gap-3 p-8 ">
//                     <img className="w-[90px]" src={embeded} alt="" />
//                     <h1 className="heading  text-3xl font-semibold">Embedded Engineer</h1>
//                     <p className="text text-[#737171] font-medium">Designs & develops optimized firmware and hardware solutions for embedded systems.</p>
//                 </motion.div>
//                 <motion.div  className="card w-[345px]  flex flex-col gap-3 hover:scale-125 transition-all p-8 rounded-2xl shadow-2xl ">
//                     <img className="w-[90px]" src={iot} alt="" />
//                     <h1 className="heading  text-3xl font-semibold">Embedded Engineer</h1>
//                     <p className="text text-[#737171] font-medium">Designs & develops optimized firmware and hardware solutions for embedded systems.</p>
//                 </motion.div>
//                 <motion.div  className="card w-[345px]  flex flex-col gap-3 rounded-2xl p-8 shadow-2xl hover:scale-125 transition-all ">
//                     <img className="w-[90px]" src={brand} alt="" />
//                     <h1 className="heading  text-3xl font-semibold">Embedded Engineer</h1>
//                     <p className="text text-[#737171] font-medium">Designs & develops optimized firmware and hardware solutions for embedded systems.</p>
//                 </motion.div>
//                 <motion.div  className="card w-[345px]  flex flex-col gap-3 rounded-2xl p-8 shadow-2xl hover:scale-125 transition-all ">
//                     <img className="w-[90px]" src={brand} alt="" />
//                     <h1 className="heading  text-3xl font-semibold">Embedded Engineer</h1>
//                     <p className="text text-[#737171] font-medium">Designs & develops optimized firmware and hardware solutions for embedded systems.</p>
//                 </motion.div>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Services






import { FaArrowRight } from "react-icons/fa";
import embeded from '../assets/embeded.png';
import iot from '../assets/iot.png';
import brand from '../assets/brand.webp';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section className="container services-header mt-[200px]  md:mt-2  mx-auto max-w-screen-2xl py-20 px-4">
      <div>
        {/* heading content */}
        <h1 className="text-black text-2xl font-semibold">
          <span className="text-[#1464ff] text-3xl">-</span> Services
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <h1 className="font-semibold text-4xl md:text-5xl text-center md:text-left">
            <span className="text-[#F9AD1B]">Services</span> I Provide
          </h1>
          <button className="flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-[#F9AD1B] hover:bg-black hover:text-white transition-all">
            See More <FaArrowRight className="rounded-full bg-white" />
          </button>
        </div>
        {/* card design */}
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            <motion.div className="card w-full max-w-[345px] flex flex-col rounded-2xl shadow-2xl hover:scale-105 transition-all gap-3 p-8">
              <img className="w-[90px]" src={embeded} alt="" />
              <h1 className="text-3xl font-semibold">Embedded Engineer</h1>
              <p className="text-[#737171] font-medium">Designs & develops optimized firmware and hardware solutions for embedded systems.</p>
            </motion.div>
            <motion.div className="card w-full max-w-[345px] flex flex-col gap-3 hover:scale-105 transition-all p-8 rounded-2xl shadow-2xl">
              <img className="w-[90px]" src={iot} alt="" />
              <h1 className="text-3xl font-semibold">IoT Expert</h1>
              <p className="text-[#737171] font-medium">Develops innovative IoT solutions, integrating smart devices and cloud platforms.</p>
            </motion.div>
            <motion.div className="card w-full max-w-[345px] flex flex-col gap-3 rounded-2xl p-8 shadow-2xl hover:scale-105 transition-all">
              <img className="w-[90px]" src={brand} alt="" />
              <h1 className="text-3xl font-semibold">Brand Specialist</h1>
              <p className="text-[#737171] font-medium">Crafts powerful brand strategies to enhance market presence and customer engagement.</p>
            </motion.div>
            <motion.div className="card w-full max-w-[345px] flex flex-col gap-3 rounded-2xl p-8 shadow-2xl hover:scale-105 transition-all">
              <img className="w-[90px]" src={brand} alt="" />
              <h1 className="text-3xl font-semibold">Entrepreneur</h1>
              <p className="text-[#737171] font-medium">Builds scalable businesses with innovative solutions and market-driven strategies.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;