import {motion} from 'framer-motion'
import zaman from '../assets/zaman-img.png'
import marque from '../assets/streamline-solid.png'
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { BsMoon, BsSun } from 'react-icons/bs';
import TextChange from './TextChange';
const Hero = () => {
     const {isDarkMode,toggleTheme} = useContext(ThemeContext);
  return (
    <section className=" section-1 h-screen md:pt-44  ">
      <div className="container    mx-auto">
      <div className="flex flex-col sm:flex-col md:flex-row  items-center justify-between">
        {/* text content */}
            <div className="w-[50%]">
                <h2 className=" heading-a font-semibold  text-4xl py-2 px-5    border-2 border-gray-400 inline p-2">Hello !</h2>
                <h1 className=" heading-1 font-semibold text-6xl mt-10 mb-6">I'm <span className='underline text-[#F9AD1B]'>Parvej Jaman,</span>
                   </h1>
                
                <h1 className="heading-2 font-semibold text-6xl mb-3">Embedded Enginner,</h1>
                <h1 className="font-semibold heading-3 text-6xl mb-6">
                  <TextChange/>
                </h1>
                <p className="text-[#b3b3b3] heading-4 font-semibold mb-8">Entrepreneur & Inventor | RTOS & IoT Solutions Expert | Marketing & <br /> Branding Specialist | Innovation Management Professional | Musical <br /> Instrument Researcher & Performer</p>
                <div className="btn-group flex sm:flex-row space-x-3">
                    <button className="bg-black btn-2 animate__animated animate__backInLeft text-white hover:bg-[#F9AD1B] cursor-pointer transition-all font-semibold px-8 py-2 rounded-full">Hire Me</button>
                    <button className=" text-black btn-2 cursor-pointer hover:bg-[#F9AD1B] hover:text-white transition-all border-2 border-gray-500 font-semibold px-8 py-2 rounded-full animate__animated animate__backInRight">Whatsapp</button>
                </div>
            </div>
       
        {/* right image */}
        <div className=" -mt-16 img-1-group" >
            <motion.img src={zaman} alt=""  className="w-[680px] img-1"
              
              whileTap={{
                scale:1.2,
                backgroundColor:'orange'
              }}
            />
        </div>
        <button onClick={toggleTheme} className="focus:outline-none font-bold text-lg p-5 bg-black rounded-full">
                {
                    isDarkMode ? <BsSun className="text-yellow-300"/> : <BsMoon className="text-yellow-300"/>
                }
                
            </button>
        </div>
      </div>
      {/* marque */}
      <div>
            <div className="w-full marque h-[96px] bg-[#353341] rotate-1 -mt-4  relative  ">
                <div  id='elem'  className='w-full h-[86px] bg-[#F9AD1B] -rotate-1 flex justify-between items-center'>
                   <h1 className='font-medium text-4xl text-white'>Brand Specialist</h1>
                   <h1 className='font-medium text-4xl text-white'>Embedded Engineer</h1>
                   <h1 className='font-medium text-4xl text-white'>IOT Expert</h1>
                   <h1 className='font-medium text-4xl text-white'>Entrepreneur &</h1>

                      


                    {/* <motion.h1
                   initial={{x:'left'}}
                   animate={{x:-100}} 
                    transition={{ease:"linear",duration:1,repeat:Infinity}}
                    className='font-medium text-4xl text-white'>Brand Specialist</motion.h1>
                   <motion.img
                    initial={{x:0}}
                    animate={{x:-100}} 
                     transition={{ease:"linear",duration:1,repeat:Infinity}}
                    src={marque} alt="" className='w-10 h-10'/>
                   <motion.h1
                    initial={{x:'left'}}
                    animate={{x:-100}} 
                     transition={{ease:"linear",duration:1,repeat:Infinity}}
                    className='font-medium text-4xl text-white'>Embedded Engineer</motion.h1>
                   <motion.img
                    initial={{x:'left'}}
                    animate={{x:-100}} 
                     transition={{ease:"linear",duration:1,repeat:Infinity}}
                    src={marque} alt="" className='w-10 h-10'/>
                   <motion.h1
                    initial={{x:'left'}}
                    animate={{x:-100}} 
                     transition={{ease:"linear",duration:1,repeat:Infinity}}
                    className='font-medium text-4xl text-white'>IOT Expert</motion.h1>
                   <motion.img
                    initial={{x:'left'}}
                    animate={{x:-100}} 
                     transition={{ease:"linear",duration:1,repeat:Infinity}}
                    src={marque} alt="" className='w-=10 h-10'/>
                   <motion.h1
                    initial={{x:'left'}}
                    animate={{x:-100}} 
                     transition={{ease:"linear",duration:1,repeat:Infinity}}
                    className='font-medium text-4xl text-white'>Entrepreneur &</motion.h1> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero