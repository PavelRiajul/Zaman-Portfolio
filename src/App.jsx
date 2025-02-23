
import Navbar from "./components/Navbar"
import { ThemeProvider } from "./context/ThemeContext"
import Routing from "./utils/routing"


const App = () => {
  return (
    <ThemeProvider>
<div>
      <Navbar/>
      <Routing/>
      <main>
      </main>
    </div>
    </ThemeProvider>
    
  )
}

export default App