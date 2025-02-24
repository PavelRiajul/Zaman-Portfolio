import { Link, NavLink } from "react-router"


const Navbar = () => {
  return (
    <header className=" fixed  top-0 left-0 right-0 z-10 dark:text-black transition duration-300 ease-in-out">
        <nav className=" bg-[#f2f3f4]  rounded-[48px] mx-auto container max-w-screen-2xl flex justify-between items-center mt-5 px-8 py-5 ">
          {/* logo */}
          <Link to={'/'} className="font-medium text-xl">hi@itsparvej.com</Link>
          {/* desktop menu items */}
         <div className="flex gap-10 text-[#878787] font-semibold text-xl">
            <NavLink  className={({ isActive }) =>isActive ? "text-[#F9AD1B]" : "text-black"} to={'/'}>Home</NavLink>
            <NavLink className={({ isActive }) =>isActive ? "text-[#F9AD1B]" : "text-black"} to={'/services'}>Services</NavLink>
            <NavLink className={({ isActive }) =>isActive ? "text-[#F9AD1B]" : "text-black"} to={'/about'}>About Me</NavLink>
            <NavLink className={({ isActive }) =>isActive ? "text-[#F9AD1B]" : "text-black"} to={'/project'}>Projects</NavLink>
         </div>
         {/* button */}
         <button className="text-white px-5 py-2 rounded-[28px] bg-black hover:bg-white hover:text-black transition-all cursor-pointer">Contact me</button>
        </nav>
    </header>
  )
}

export default Navbar

