import Nav from '@/components/Nav'
import './page.css'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Footer from '@/components/Footer'
const Home = () => {
  return (
    <div>
      <Nav/>
    <Hero/>
    <Services />
    <Footer/>
    </div>
  )
}

export default Home