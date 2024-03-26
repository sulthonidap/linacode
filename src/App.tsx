
import './App.css'
import Benefit from './components/Benefit'
import BottomCTA from './components/BottomCTA'
import CTA2nd from './components/CTA2nd'
import Category from './components/Category'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Materi from './components/Materi'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
    <main className="font-primary ">
    <Navbar />
    <Hero />
    <Contacts />
    <Category/>
    <Benefit />
    <Materi />
    <BottomCTA />
    <CTA2nd />
    <Footer />
    
    </main>
      
    </>
  )
}

export default App
