import './App.css'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './Home'
import About from './About'
import Product from './Product'
import Contact from './Contact'
import Service from './Service'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="products" element={<Product />}/>
        <Route path="services" element={<Service />}/>
        <Route path="contacts" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
