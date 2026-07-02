import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Services from '../../components/Services/Services'
import Gallery from '../../components/Gallery/Gallery'
import PaymentMethods from '../../components/PaymentMethods/PaymentMethods'
import Contact from '../../components/Contact/Contact'

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Allow DOM to paint before scrolling
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <PaymentMethods />
      <Gallery />
      <Contact />
    </>
  )
}
