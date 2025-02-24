
import Footer from "../components/Footer"
import Form from "../components/Form"
import Portfolio from "../components/Portfolio"
import Aboutme from "../components/Aboutme"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Testimonials from "./Testimonials"


const Home = () => {
  return (
    <div>
        <Hero/>
        <Services/>
        <Aboutme/>
        <Portfolio/>
        <Testimonials/>
        <Form/>
        <Footer/>
  
    </div>
  )
}

export default Home