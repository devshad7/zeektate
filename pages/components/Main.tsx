import Experience from './Experience'
import Home from './Home'
import MobileNav from './MobileNav'
import Navbar from './Navbar'
import Services from './Services'

export default function Main() {
  return (
    <>
        <div>
            <Navbar />
            <MobileNav />
            <Home />
            <Services />
            <Experience />
        </div>
    </>
  )
}
