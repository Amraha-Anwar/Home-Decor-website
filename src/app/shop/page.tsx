import Navbar from "../../../components/Navbar"
import Hero from "../../../components/Hero"
import Items from "../../../components/Items"
import Footer from "../../../components/Footer"

function  Shop(){
    return (
      <>

      {/* Navbar */}
            <Navbar/>


      {/* hero section */}
            <Hero/>


      {/* selling products with details */}
            <Items/>


      {/* footer */}
            <Footer/>

      </>
    )
}
export default Shop