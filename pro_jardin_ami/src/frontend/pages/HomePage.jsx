import Header from "../components/Header"
import ContenInfo from "../components/ContenInfo"
import Degress from "../components/Degress"
import Banner from "../components/Banner"
import Info from "../components/Info"
import Footer from "../components/Footer"
import "../../assets/css/estilos.css"


export default function HomePage() {
  return (
    <div>
      <Header/>  
      <ContenInfo/>
      <Degress/>
      <Banner/>
      <Info/> 
      <Footer/>     
    </div>
  )
}
