
import Footer from "../components/Footer"
import Form from "../components/Form"
import Aboutme from "./Aboutme"
import Hero from "./Hero"
import Services from "./Services"
import Testimonials from "./Testimonials"


const Home = () => {
  return (
    <div>
        <Hero/>
        <Services/>
        <Aboutme/>
        <Testimonials/>
        <Form/>
        <Footer/>
  
    </div>
  )
}

export default Home