import {useState} from 'react';
import PageContent from './PageContent';
import LoginForm from './LoginForm';
import PDP from './PDP';

function App() {
  let [loggedIn, setLoggedIn] = useState(false);
  let [isaAdmin, setIsaAdmin] = useState(false);
  let [pdpItem, setPDPItem] = useState(false);
  let [cart, setCart] = useState([{}]);
  
  const addToCart = (item) => {
    setCart([ ...cart, item]);
  }

  if(!loggedIn){
    return <LoginForm setLoggedIn={setLoggedIn} setIsaAdmin={setIsaAdmin} addToCart={addToCart} />
  }
  if(pdpItem){
    return <PDP item={pdpItem} isaAdmin={isaAdmin} addToCart={addToCart} setPDPItem={setPDPItem} />
  }
  return (
    <div>
      {loggedIn && <PageContent isaAdmin={isaAdmin} addToCart={addToCart} setPDPItem={setPDPItem} />}
    </div>
  );
}

export default App;
