import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Details from '../components/Details';
import Products from '../components/Producs';
import Footer from '../components/Footer';

function HomePage() {

  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* hero section */}
      <Hero />

      {/* web Details*/}
      <Details />

      {/* demo products */}
      <Products />

      {/* footer */}
      <Footer />
    </>
  );
}
export default HomePage
