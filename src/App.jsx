import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'


function App() {


  return (
    <>
    
    <BrowserRouter>
     <Header />
     
     



     <Routes>
<Route path='/' element=''></Route>

     </Routes>
 
     </BrowserRouter>
    </>
  )
}

export default App
