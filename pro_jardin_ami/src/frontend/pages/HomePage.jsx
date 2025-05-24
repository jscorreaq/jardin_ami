import Header from "../components/Header"
import ContenInfo from "../components/ContenInfo"
import Degress from "../components/Degress"
import Info from "../components/Info"
import Footer from "../components/Footer"
import "../../assets/css/estilos.css"
import Hero from "../components/Hero"
import Contac from "../components/Contac"


export default function HomePage() {
  return (
    <div>
      <Header/>  
      <Hero/>
      <ContenInfo/>
      <Degress/>
      {/* <Info/> */}
      <Contac/> 
      <Footer/>     
    </div>
  )
}
