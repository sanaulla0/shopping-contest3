import React from 'react';
import './App.css';
import Mycart from './Components/Mycart';
import { Routes , Route } from 'react-router-dom';
import Home from './Components/Home';
import Store from './Store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={Store}>
    <div className="App">
        
         <nav className='navlink'>
            <header>
               <a href='/Shopping Cart' >Shopping Cart</a>
               <a href='/' className='nav1'>Home Page </a>
               <a href='/Mycart' >Cart  Page </a>
            </header>
         </nav>
           <Routes>
            <Route path='/' element={<Home/> } />
            <Route path='/Mycart' element={<Mycart/> } />
           </Routes>
       
       
    </div>
    </Provider>
  );
}

export default App;
