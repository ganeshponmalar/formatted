import './App.css'
import React from "react";
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import OrderForm from './components/Order';
import AddJson from './components/addingJson';
import SearchData from './components/SearcgQuery';
import Beautify from './components/BeautyJson';


function App() {


  return (

    <div className="App">
      
   <BrowserRouter>

   <Routes>
   
    <Route path='/add' element={<AddJson/>}/>
   
    <Route path='/' element={<OrderForm/>}/>

    <Route path='/search' element={<SearchData/>}/>

    <Route path='/json' element={<Beautify />}/>
    

    

    
   </Routes>
  
   </BrowserRouter>
     
                    

    </div>
  );
}

export default App;
