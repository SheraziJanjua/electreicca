import AddressModule from './Components/Address'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Herosection from './Components/Herosection'
import Login from './Components/Login'
import Quest from './Components/Quest'
import Testimonials from './Components/Testimonials'

function App() {
  return (
    <div className=''>
      <Header />
      <Herosection />
      <Testimonials />
      <Quest />
      <AddressModule />
      <Footer />
    </div>
  )
}

export default App