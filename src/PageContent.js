import ItemCard from './itemCard';

function PageContent({ isaAdmin, addToCart, setPDPItem, items, setIsAdding, setIsEditing, setIsCheckout }) {
  return (
    <div className="container">
      <div className="row">
        {items.map(item => {
          return (<ItemCard key={item.id} item={item} addToCart={addToCart} setPDPItem={setPDPItem} ></ItemCard>)
        })}
      </div>
      <div className="d-flex justify-content-center">
        {isaAdmin && <button className="btn btn-secondary me-2" onClick={() => { setIsEditing(true); setIsAdding(true) }}>Add item</button>}
        <button className="btn btn-primary" onClick={() => { setIsCheckout(true) }}>Checkout</button>
      </div>
    </div>
  );
}

export default PageContent;
