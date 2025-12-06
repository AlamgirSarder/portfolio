import About from "./components/about/About"
import Banner from "./components/banner/Banner"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Navbar from "./components/navbar/Navbar"
import Project from "./components/project/Project"
import Service from "./components/service/Service"

function App() {
 
  return (
   <>
      <Navbar/>
      <Banner/>
      <About/>
      <Service/>
      <Project/>
      <Blog/>
      <Contact/>
   </>
  )
}

export default App
