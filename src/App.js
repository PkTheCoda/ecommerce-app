import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';
import { useState, useEffect } from 'react';

function App() {

  let [cartItems, setCartItems] = useState([])  
  let [numOfItems, setNumOfItems] = useState(0)
  let [cartID, setCartID] = useState(0)
  let [total, setTotal] = useState(0)
  
  useEffect(() => {
    console.log(`Total: ${total}`);
  }, [total]);

  function handleCart(itemName, itemPrice) {
      console.log(`Item Name:${itemName} Item Price: ${itemPrice}`)
      setCartItems(prevArray => [...prevArray, {name: itemName, price: itemPrice, itemID: cartID}])
      setTotal(prev => prev + Number(itemPrice))
      setNumOfItems(prevValue => prevValue + 1)
      setCartID(prevValue => prevValue + 1)
  }

  function handleDelete(id) {
    setCartItems(prevItems => {
      const updatedItems = prevItems.filter(item => item.itemID !== id);
      return updatedItems;
    });
  
    setTotal(prevTotal => prevTotal - cartItems.find(item => item.itemID === id).price);
  
    setNumOfItems(prevNum => prevNum - 1);
  }

  return (
    <>
      <BrowserRouter>
        <Header cartItems={numOfItems}/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/store" element={<Body handleCart={handleCart}/>} />
          <Route path="/cart" element={<Cart cartItems={cartItems} cartTotal={total} cancel={handleDelete}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
