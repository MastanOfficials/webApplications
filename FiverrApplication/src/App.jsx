import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home'
import Footer from './components/Footer'
import MyGigs from './components/pages/MyGigs'
import Gig from './components/pages/Gig'
import Orders from './components/pages/Orders'
import Add from './components/pages/Add'
import Messages from './components/pages/Messages'
import Message from './components/pages/Message'
function App() {

  return (
    <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
      

  <Route path='/' element={<Home/>}></Route>
  <Route path='/mygigs' element={<MyGigs/>}></Route>
  <Route path='/gig/:id' element={<Gig/>}></Route>
  <Route path='/orders' element={<Orders/>}></Route>
  {/* <Route path='/mygigs' element={<MyGigs/>}></Route> */}
  <Route path='/add' element={<Add/>}></Route>
  <Route path='/messages' element={<Messages/>}></Route>
  <Route path='/Messages/:id' element={<Message/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
  </>
  )
}

export default App
