import CheckoutRow from './CheckoutRow';

function Checkout({cart, setCart, setIsCheckout}) {
  let price = 0;
  cart.forEach(item => {
    if(item.id){
      price += parseInt(item.price);
    }
  });
  return (
    <div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary" onClick={() => {setCart([{}]);alert("Thank you for your purchase!");setIsCheckout(false); }}>Make Purchase</button>
      </div>
      <div className="d-flex justify-content-center">
        Total price: {price} $
      </div>
      {cart.map(item => {
          return (item.id && <CheckoutRow key={item.id} item={item} ></CheckoutRow>)        
      })}
    </div>
  );
}

export default Checkout;
