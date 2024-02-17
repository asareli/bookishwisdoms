import React from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/ContextCart';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';


const App = () => {
  return (
      <>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={ <ItemListContainer/> }></Route>
            <Route path='/category/:idCategory' element={ <ItemListContainer/> }></Route>
            <Route path='/item/:idItem' element={ <ItemDetailContainer/> }></Route>
            <Route path='/cart' element = {<Cart/>} />
            <Products/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
      </>
  )
}

export default App