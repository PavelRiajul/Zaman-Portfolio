// import { FaArrowRight } from 'react-icons/fa'
// import round  from '../assets/zama-round.png'

// const Aboutme = () => {
//   return (
//     <section className="about-section ">
//         <div className='container mx-auto max-w-screen-2xl  py-20  px-4'>
//             <div className='flex flex-col sm:flex-col md:flex-row justify-between items-center '>
//                  {/* left image */}
//             <div className=' '>
//                 <img src={round} alt=""  className='w-[511px] about-img bg-white rounded-full'/>
//             </div>
//             {/* right content */}
//             <div className='w-[60%] '>
//             <h1 className="text-black text-2xl font-semibold mb-10"><span className="text-[#1464ff] text-3xl">-</span>About Me</h1>
//             <h1 className='text-5xl font-semibold mb-4 about-heading-1  '>Who is Parvej Jaman?</h1>
//             <p className='text-xl about-text'>Parvej Jaman – Embedded Engineer, IoT Expert, Brand <br /> Specialist, Entrepreneur & Investor—driving innovation, <br /> smart solutions, and scalable businesses for future <br /> growth.</p>
//             <div className='flex counter items-center gap-10 mt-10'>
//                 <div className="project">
//                     <h1 className='font-bold text-3xl'>650+</h1>
//                     <p>Project Completed</p>
//                 </div>
//                 <div className="project">
//                     <h1 className='font-bold text-3xl'>50+</h1>
//                     <p>Industry Covered</p>
//                 </div>
//                 <div className="project">
//                     <h1 className='font-bold text-3xl'>25+</h1>
//                     <p>Years of Experience</p>
//                 </div>
//             </div>
//             <div className="btn-about mt-8">
//                 <button className='border-2 hover:bg-[#F9AD1B] hover:text-white transition-all flex items-center gap-2 px-2 py-2 rounded-full'>Download CV <FaArrowRight className='rounded '  />
//                 </button>
//             </div>
//             </div>
//             </div> 
//         </div>
//     </section>
//   )
// }
// export default Aboutme




import { FaArrowRight } from 'react-icons/fa';
import round from '../assets/zama-round.png';

const Aboutme = () => {
  return (
    <section className="about-section py-20 px-4">
      <div className='container mx-auto max-w-screen-2xl'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
          {/* Left image */}
          <div className='flex justify-center md:justify-start w-full md:w-1/2'>
            <img src={round} alt="" className='w-[80%] max-w-[400px] md:max-w-[500px] bg-white rounded-full' />
          </div>
          {/* Right content */}
          <div className='w-full md:w-1/2 text-center md:text-left'>
            <h1 className="text-black text-2xl font-semibold mb-6">
              <span className="text-[#1464ff] text-3xl">-</span> About Me
            </h1>
            <h1 className='text-4xl md:text-5xl font-semibold mb-4'>Who is Parvej Jaman?</h1>
            <p className='text-lg md:text-xl leading-relaxed'>
              Parvej Jaman – Embedded Engineer, IoT Expert, Brand <br className='hidden md:block' />
              Specialist, Entrepreneur & Investor—driving innovation, <br className='hidden md:block' />
              smart solutions, and scalable businesses for future <br className='hidden md:block' />
              growth.
            </p>
            <div className='flex flex-wrap justify-center md:justify-start gap-6 mt-8'>
              <div className="text-center">
                <h1 className='font-bold text-3xl'>650+</h1>
                <p>Project Completed</p>
              </div>
              <div className="text-center">
                <h1 className='font-bold text-3xl'>50+</h1>
                <p>Industry Covered</p>
              </div>
              <div className="text-center">
                <h1 className='font-bold text-3xl'>25+</h1>
                <p>Years of Experience</p>
              </div>
            </div>
            <div className="mt-8 flex justify-center md:justify-start">
              <button className='border-2 hover:bg-[#F9AD1B] hover:text-white transition-all flex items-center gap-2 px-4 py-2 rounded-full'>
                Download CV <FaArrowRight className='rounded' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;