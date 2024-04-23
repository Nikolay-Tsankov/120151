function ItemCard({item, addToCart, setPDPItem}) {
  return (
    <div className="col-3 mt-4 mb-4">
        <div className="card">
        <div className="row">
            <img src={item.image} className="card-img-top" alt={item.name} />
        </div>
        <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description}</p>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <span className={item.discountedPrice && "text-muted text-decoration-line-through me-2"}>${item.price}</span>
                    {item.discountedPrice && <span className="text-danger">${item.discountedPrice}</span>}
                </div>
                <button className="btn btn-primary" onClick={() => addToCart(item)}>Buy</button>
            </div>
        </div>
        <div className="card-footer d-flex justify-content-center">
            <button className="btn btn-info" onClick={() => {setPDPItem(item)}}>View</button>
        </div>
    </div>
  </div>
  );
}

export default ItemCard;
