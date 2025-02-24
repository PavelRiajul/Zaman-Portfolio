import { FaArrowRight } from "react-icons/fa"
import card1 from '../assets/potr-1.png'
import card2 from '../assets/port-2.png'
import card3 from '../assets/port-3.png'
import card4 from '../assets/port-4.png'
const Portfolio = () => {
  return (
    <section className="container mx-auto max-w-screen-2xl py-20 px-4">
        <div>
            {/* heading button */}
             <div className="flex flex-col sm:flex-col md:flex-row justify-between items-center">
                <div>
                <h1 className="text-black text-2xl font-semibold"><span className="text-[#F9AD1B] text-3xl">-</span>My Portfolio</h1>
                <h1 className="text-5xl portfolio-heading font-semibold">My Latest <span className="text-[#F9AD1B] italic">Projects</span></h1>
                </div>
            <div className="btn-portfolio-1 w-60  h-11 rounded-full shadow-2xl bg-[#F9AD1B] flex ">
            <div className="flex items-center gap-1  ">
            <button type="submit" className="px-10 hover:bg-emerald-700 transition-all cursor-pointer  flex  text-white bg-emerald-950 rounded-full py-2">View All Projects </button>
            <span className="bg-white rounded-full p-1"><FaArrowRight /></span>
            </div>
        </div>
        </div>
        {/* project cards */}
        <div className="cards mt-5 flex flex-col sm:flex-col md:flex-row justify-between items-center gap-5">
         <div className="card  w-[25%] hover:scale-125 transition-all flex flex-col items-center rounded-md shadow-2xl p-2   ">
            <img src={card1} alt="card1" className="rounded-md" />
            <h2 className="p-2 mt-2 leading-7 hover:text-gray-950 transition-all  pt-2 font-medium text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempore unde.</h2>
         </div>
         <div className="card  w-[25%] hover:scale-125 transition-all flex flex-col items-center rounded-md shadow-2xl p-2  ">
            <img src={card2} alt="card1" className="rounded-md" />
            <h2 className="p-2 mt-2  leading-7 hover:text-gray-950 transition-all font-medium text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempore unde </h2>
         </div>
         <div className="card  w-[25%] flex flex-col hover:scale-125 transition-all items-center rounded-md shadow-2xl p-2  ">
            <img src={card3} alt="card1" className="rounded-md" />
            <h2 className="p-2 mt-2 leading-7 hover:text-gray-950 transition-all  pt-2 font-medium text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempore unde </h2>
         </div>
         <div className="card  w-[25%] flex flex-col hover:scale-125 transition-all items-center rounded-md shadow-2xl p-2  ">
            <img src={card4} alt="card1" className="rounded-md" />
            <h2 className="p-2 leading-7 mt-2 hover:text-gray-950 transition-all  pt-2 font-medium text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempore unde</h2>
         </div>
        </div>
        </div>           
    </section>
  )
}

export default Portfolio