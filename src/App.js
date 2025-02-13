
import './App.scss';
import { Routes , Route } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home/index.js'
import About from './components/About/index.js';
import Contact from'./components/Contact/index.js';


function App() {
  return (
   <>
   <Routes>
    <Route  path ="/" element={<Layout/>} >
      <Route index element={<Home/>} />
       <Route  path ="/about" element={<About/>} />
       <Route  path ="/contact-me" element={<Contact/>} />
       
      
       </Route>
  
    


   </Routes>
   
   
   
   </>
  );
}

export default App;
