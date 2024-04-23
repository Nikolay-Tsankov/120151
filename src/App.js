import {useState} from 'react';
import PageContent from './PageContent';
import LoginForm from './LoginForm';
import PDP from './PDP';
import Checkout from './Checkout';
import {getItems} from './databaseMock'

function App() {
  let [loggedIn, setLoggedIn] = useState(false);
  let [isaAdmin, setIsaAdmin] = useState(false);
  let [pdpItem, setPDPItem] = useState(false);
  let [isEditing, setIsEditing] = useState(false);
  let [cart, setCart] = useState([{}]);
  let [items, updateItems] = useState(getItems);
  let [isCheckout, setIsCheckout] = useState(false);
  let [isAdding, setIsAdding] = useState(false);

  const addToCart = (item) => {
    setCart([ ...cart, item]);
  }

  if(!loggedIn){
    return <LoginForm setLoggedIn={setLoggedIn} setIsaAdmin={setIsaAdmin} addToCart={addToCart} />
  }

  if(pdpItem){
    return <PDP item={pdpItem} isaAdmin={isaAdmin} addToCart={addToCart} setPDPItem={setPDPItem} isEditing={isEditing} setIsEditing={setIsEditing} updateItems={updateItems} setIsAdding={setIsAdding}/>
  }
  if(isAdding){
    return <PDP item={{}} isaAdmin={isaAdmin} addToCart={addToCart} setPDPItem={setPDPItem} isEditing={isEditing} setIsEditing={setIsEditing} updateItems={updateItems} setIsAdding={setIsAdding}/>
  }

  if(isCheckout){
    return <Checkout cart={cart} setCart={setCart} setIsCheckout={setIsCheckout} />
  }

  return (
    <div>
      {loggedIn && <PageContent isaAdmin={isaAdmin} addToCart={addToCart} setPDPItem={setPDPItem} items={items} setIsAdding={setIsAdding} setIsEditing={setIsEditing} setIsCheckout={setIsCheckout} />}
    </div>
  );
}

export default App;
