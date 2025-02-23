import { FaArrowRight } from 'react-icons/fa'
import round  from '../assets/zama-round.png'

const Aboutme = () => {
  return (
    <section className="bg-gray-100">
        <div className='container mx-auto max-w-screen-2xl py-20 px-4'>
            <div className='flex justify-between items-center'>
                 {/* left image */}
            <div className=' '>
                <img src={round} alt=""  className='w-[511px] bg-white rounded-full'/>
            </div>
            {/* right content */}
            <div className='w-[60%]'>
            <h1 className="text-black text-2xl font-semibold mb-10"><span className="text-[#1464ff] text-3xl">-</span>About Me</h1>
            <h1 className='text-5xl font-semibold mb-4  '>Who is Parvej Jaman?</h1>
            <p className='text-xl'>Parvej Jaman – Embedded Engineer, IoT Expert, Brand <br /> Specialist, Entrepreneur & Investor—driving innovation, <br /> smart solutions, and scalable businesses for future <br /> growth.</p>
            <div className='flex items-center gap-10 mt-10'>
                <div className="project">
                    <h1 className='font-bold text-3xl'>650+</h1>
                    <p>Project Completed</p>
                </div>
                <div className="project">
                    <h1 className='font-bold text-3xl'>50+</h1>
                    <p>Industry Covered</p>
                </div>
                <div className="project">
                    <h1 className='font-bold text-3xl'>25+</h1>
                    <p>Years of Experience</p>
                </div>
            </div>
            <div className="btn mt-8">
                <button className='border-2 hover:bg-[#F9AD1B] hover:text-white transition-all flex items-center gap-2 px-2 py-2 rounded-full'>Download CV <FaArrowRight className='rounded '  />
                </button>
            </div>
            </div>
            </div> 
        </div>
    </section>
  )
}

export default Aboutme