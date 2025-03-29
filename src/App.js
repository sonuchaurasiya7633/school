import {
  BrowserRouter,
   Routes,
    Route
  } from 'react-router-dom'
import Home from './Components/Home'
import Teachers from './Components/Teachers'
import Holidays from './Components/holidays'
import ContactUs from './Components/ContactUs'
import NotFound from './Components/NotFound'
import TalkToUs from './Components/TalkToUs'
const App = ()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/teachers" element={<Teachers/>}/>
        <Route path="/Holidays" element={<Holidays/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="/TalkToUs" element={<TalkToUs/>}/>
         <Route path="*" element={<NotFound/>}/>
        
      </Routes>
    </BrowserRouter>

  )
}
export default App
