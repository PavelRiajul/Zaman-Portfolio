
// import { Link, NavLink } from "react-router"


// const Navbar = () => {

//   return (
//     <header className=" fixed  top-0 left-0 right-0 z-10 dark:text-black transition duration-300 ease-in-out">
//         <nav className=" bg-[#f2f3f4]  rounded-[48px] mx-auto container max-w-screen-2xl flex justify-between items-center mt-5 px-8 py-5 ">
//           {/* logo */}
//           <Link to={'/'} className="font-medium text-xl">hi@itsparvej.com</Link>
//           {/* desktop menu items */}
//          <div className="flex gap-10 text-[#878787] font-semibold text-xl">
//             <NavLink   className={({ isActive }) =>isActive ? "text-[#F9AD1B]" : "text-black"} to={'/'}>Home</NavLink>
//             <NavLink className={({ isActive }) =>isActive ? "text-[#F9AD1B]" : "text-black"} to={'/services'}>Services</NavLink>
//             <NavLink className={({ isActive }) =>isActive ? "text-[#F9AD1B]" : "text-black"} to={'/about'}>About Me</NavLink>
//             <NavLink className={({ isActive }) =>isActive ? "text-[#F9AD1B]" : "text-black"} to={'/project'}>Projects</NavLink>
//          </div>
//          {/* button */}
//          <button className="text-white px-5 py-2 rounded-[28px] bg-black hover:bg-white hover:text-black transition-all cursor-pointer animate__animated animate__backInDown">Contact me</button>

//          {/* Mobile Nav */}

//         </nav>
//     </header>
//   )
// }
// export default Navbar






import { Link, NavLink } from "react-router";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-10 dark:text-black transition duration-300 ease-in-out">
      <nav className="bg-[#f2f3f4] rounded-[48px] mx-auto container max-w-screen-2xl flex justify-between items-center mt-5 px-8 py-5 relative">
        {/* Logo */}
        <Link to={'/'} className="font-medium text-xl">hi@itsparvej.com</Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-10 text-[#878787] font-semibold text-xl">
          <NavLink className={({ isActive }) => isActive ? "text-[#F9AD1B]" : "text-black"} to={'/'}>Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-[#F9AD1B]" : "text-black"} to={'/services'}>Services</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-[#F9AD1B]" : "text-black"} to={'/about'}>About Me</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-[#F9AD1B]" : "text-black"} to={'/project'}>Projects</NavLink>
        </div>
        
        {/* Contact Button */}
        <button className="hidden md:block text-white px-5 py-2 rounded-[28px] bg-black hover:bg-white hover:text-black transition-all cursor-pointer">Contact Me</button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#f2f3f4] rounded-lg p-5 absolute top-16 left-0 right-0 shadow-lg flex flex-col gap-5 text-center text-xl">
          <NavLink className={({ isActive }) => isActive ? "text-[#F9AD1B]" : "text-black"} to={'/'} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-[#F9AD1B]" : "text-black"} to={'/services'} onClick={() => setIsOpen(false)}>Services</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-[#F9AD1B]" : "text-black"} to={'/about'} onClick={() => setIsOpen(false)}>About Me</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-[#F9AD1B]" : "text-black"} to={'/project'} onClick={() => setIsOpen(false)}>Projects</NavLink>
          <button className="text-white px-5 py-2 rounded-[28px] bg-black hover:bg-white hover:text-black transition-all cursor-pointer" onClick={() => setIsOpen(false)}>Contact Me</button>
        </div>
      )}
    </header>
  );
};

export default Navbar;