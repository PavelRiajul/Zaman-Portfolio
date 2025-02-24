import { useState } from "react"
import { FaArrowRight, FaSkype } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { IoCallSharp } from "react-icons/io5"
import { MdEmail } from "react-icons/md"


const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        country: "",
        message: "",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
      };
  return (
    <section className="container mx-auto max-w-screen-2xl py-20 px-4">
        <div className="flex flex-col sm:flex-col md:flex-row justify-center items-center ml-20">
            {/* left heading contact */}
            <div className="">
            <h1 className="text-black text-2xl font-semibold"><span className="text-[#F9AD1B] text-3xl">-</span>Contact Us</h1>
            <h1 className="text-5xl font-normal mb-1">Let's Talk for <span className="text-[#F9AD1B]">Your</span></h1>
            <h1 className="text-5xl text-[#F9AD1B] font-normal mb-4">Next Projects</h1>
            <p className="text-[#b3b3b3] text-xl mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Fugit eligendi adipisci nemo iste odit?</p>
            {/* contact */}
            <div className="flex flex-col gap-3">
                <div className="one flex items-center gap-1">
                <span className=" rounded-full p-3 bg-[#F9AD1B]"><IoCallSharp  className="w-5 h-5"/> </span> 
                <span className="text-[#6d6c6c] text-xl">+1(406)555-0120</span>
                </div>

                <div className="one flex items-center gap-1">
                <span className=" rounded-full p-3 bg-[#F9AD1B]"><MdEmail  className="w-5 h-5"/> </span> 
                <span className="text-[#6d6c6c] text-xl">example@gmail.com</span>
                </div>

                <div className="one flex items-center gap-1">
                <span className=" rounded-full p-3 bg-[#F9AD1B]"><FaSkype  className="w-5 h-5"/> </span> 
                <span className="text-[#6d6c6c] text-xl">example</span>
                </div>

                <div className="one flex items-center gap-1">
                <span className=" rounded-full p-3 bg-[#F9AD1B]"><FaLocationDot  className="w-5 h-5"/> </span> 
                <span className="text-[#6d6c6c] text-xl">2464 RoyalLn, Mesa, New <br />Jersy 45463</span>
                </div>
            </div>
            </div>
            {/* right form */}
            <div className="w-[60%] ">
              <div>
                {/*  */}
        <div className="mt-5">
      <form onSubmit={handleSubmit} className="space-y-4 ">
        <div className="flex flex-col sm:flex-col md:flex-row justify-center items-center ml-15 gap-10">
        <label className="font-semibold" htmlFor="">
           Your Name* <br />
            <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className=" px-3 py-3 pr-20 mt-2 rounded bg-[#efefef] shadow"
          required
        />
        </label>
        <label className="font-semibold" htmlFor="">
            Email* <br />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className=" px-3 py-3 pr-20 mt-2 rounded bg-[#efefef] shadow"
          required
        />
        </label>  
        </div>
        <div className="flex flex-col sm:flex-col md:flex-row justify-center items-center ml-15 gap-10">
            <label className="font-semibold" htmlFor="">
                Phone* <br />
                <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleChange}
          className=" px-3 py-3 pr-20 mt-2 rounded bg-[#efefef] shadow"
          required
        />
       </label>
       <label className="font-semibold" htmlFor="">
        Country* <br />
        <input
          type="text"
          name="country"
          placeholder="Your Country"
          value={formData.country}
          onChange={handleChange}
          className="px-3 py-3 pr-20 mt-2 rounded bg-[#efefef] shadow"
          required
        />
       </label>
        </div>
        <label  className="font-semibold ml-42  " htmlFor="">
            Your Message* <br />
            <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className=" text-area bg-[#efefef] w-150 ml-40 h-50 mt-2 placeholder:p-2 rounded-md"
          required
        ></textarea>
        </label>
        <div className="btn-form w-32 h-11 rounded-full bg-[#F9AD1B] flex items-center ml-40 mt-4">
            <div className="flex items-center gap-1  ">
            <button type="submit" className="px-5 ml-1 cursor-pointer flex items-center text-white bg-emerald-950 rounded-full py-2">Submit</button>
            <span className="bg-white rounded-full p-1"><FaArrowRight /></span>
            </div>
        </div>
      </form>
    </div>
                {/*  */}
              </div>
            </div>
        </div>
    </section>
  )
}

export default Form