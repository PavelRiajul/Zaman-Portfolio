// import { FaArrowRight, FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
// import { Link } from "react-router"


// const Footer = () => {
//   return (
//     <section >
//         <div  className="container mx-auto max-w-screen-2xl   py-20 px-34">
//             {/* heading button */}
//             <div className="flex flex-col sm:flex-col md:flex-row justify-between items-center">
//             <h1 className="text-5xl footer-heading font-semibold">Let's <span className="text-[#F9AD1B]">Connect</span> there</h1>
//             {/* <div className="btn-footer-1 w-32 h-11 rounded-full bg-[#F9AD1B] flex items-center">
//             <div className="flex items-center gap-1  ">
//             <button type="submit" className="px-5 cursor-pointer ml-1 flex items-center text-white bg-emerald-950 rounded-full py-2">Submit</button>
//             <span className="bg-white rounded-full p-1"><FaArrowRight /></span>
//             </div>
//         </div> */}
//         </div>
//         <hr  className="text-gray-300 my-10" />
//         {/* ff */}
//     <div className="flex flex-col sm:flex-col md:flex-row justify-between items-center ">
//         <div>
//         <Link to={'/'} className="font-medium text-xl ">hi@itsparvej.com</Link>
//         <h1 className="text-[#F9AD1B] font-semibold text-2xl mb-2 mt-3">Contact</h1>
//         <div className="flex flex-col gap-2">
//             <h1 className="text-[#6d6c6c] text-xl">+284-955-939</h1>
//             <h1 className="text-[#6d6c6c] text-xl">www.example.com</h1>
//             <h1 className="text-[#6d6c6c] text-xl">example@gmail.com</h1>
//             <h1 className="text-[#6d6c6c] text-xl">2464 RoyalLn,Mesa, <br />New Jersey 45463</h1>
//         </div>
//         </div>
//          {/* navigation */}
//          <div>
//          <h1 className="text-[#F9AD1B] footer-nav font-semibold text-2xl">Navigation</h1>
//           <div className="flex footer-nav-item flex-col gap-1 text-[#6d6c6c]">
//             <Link to={'/'}>Home</Link>
//             <Link to={'/services'}>Services</Link>
//             <Link to={'/about'}>About Me</Link>
//             <Link to={'/project'}>Projects</Link>
//          </div>
//          </div>
//           {/* social link */}
//           <div className="flex social-icon items-center gap-3">
//              <span className="  p-3 rounded-full bg-[#F9AD1B] hover:bg-amber-500 transition-all  hover:scale-90 cursor-pointer "><FaFacebookSquare className="w-5 h-5" /></span>
//              <span className="  p-3 rounded-full bg-[#F9AD1B] hover:bg-amber-500 transition-all  hover:scale-90 cursor-pointer "><FaYoutube className="w-5 h-5"  /></span>
//              <span className="  p-3 rounded-full bg-[#F9AD1B] hover:bg-amber-500 transition-all  hover:scale-90 cursor-pointer "><FaTwitter className="w-5 h-5"  /></span>
//              <span className="  p-3 rounded-full bg-[#F9AD1B] hover:bg-amber-500 transition-all  hover:scale-90 cursor-pointer "><FaInstagram className="w-5 h-5"  /></span>
//             </div>
//     </div>
//         </div>
//         {/* copyright */}
//         <div className="bg-emerald-950 py-5 flex justify-around items-center">
//             <h1  className="text-gray-300 text-[16px]">Copyright©️ 2025 <span className="text-[#F9AD1B]">hi@itsparvej.com</span>. All Rights Reserved. </h1>
//             <h1 className="text-gray-300 text-[16px]">User Terms & Conditions | Privacy Policy</h1>
//         </div>
//     </section>
//   )
// }

// export default Footer








import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import { Link } from "react-router"

const Footer = () => {
  return (
    <section className="">
        <div className="container mx-auto max-w-screen-2xl py-20">
            {/* heading button */}
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl footer-heading font-semibold">Let's <span className="text-[#F9AD1B]">Connect</span> there</h1>
            </div>
            <hr className="text-gray-300 my-10" />
            {/* contact and navigation */}
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-10 md:gap-0">
                <div>
                    <Link to={'/'} className="font-medium text-lg sm:text-xl">hi@itsparvej.com</Link>
                    <h1 className="text-[#F9AD1B] font-semibold text-xl sm:text-2xl mb-2 mt-3">Contact</h1>
                    <div className="flex flex-col gap-2 text-[#6d6c6c] text-lg">
                        <h1>+284-955-939</h1>
                        <h1>www.example.com</h1>
                        <h1>example@gmail.com</h1>
                        <h1>2464 RoyalLn, Mesa, <br /> New Jersey 45463</h1>
                    </div>
                </div>
                {/* navigation */}
                <div>
                    <h1 className="text-[#F9AD1B] footer-nav font-semibold text-xl sm:text-2xl">Navigation</h1>
                    <div className="flex flex-col gap-1 text-[#6d6c6c] text-lg">
                        <Link to={'/'}>Home</Link>
                        <Link to={'/services'}>Services</Link>
                        <Link to={'/about'}>About Me</Link>
                        <Link to={'/project'}>Projects</Link>
                    </div>
                </div>
                {/* social links */}
                <div className="flex justify-center md:justify-start gap-3 flex-wrap">
                    {[FaFacebookSquare, FaYoutube, FaTwitter, FaInstagram].map((Icon, index) => (
                        <span key={index} className="p-3 rounded-full bg-[#F9AD1B] hover:bg-amber-500 transition-all hover:scale-90 cursor-pointer">
                            <Icon className="w-5 h-5" />
                        </span>
                    ))}
                </div>
            </div>
        </div>
        {/* copyright */}
        <div className="bg-emerald-950 py-5 flex copy  flex-col md:flex-row justify-around items-center text-center text-gray-300 text-sm sm:text-base">
            <h1>Copyright©️ 2025 <span className="text-[#F9AD1B]">hi@itsparvej.com</span>. All Rights Reserved.</h1>
            <h1>User Terms & Conditions | Privacy Policy</h1>
        </div>
        
    </section>
  )
}

export default Footer;
