function PDP({item, isaAdmin, addToCart, setPDPItem}) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card mt-4">
            <div className="row">
              <div className="col-md-6">
                <img src={item.image} className="card-img-top" alt={item.name} />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.descriptionLong}</p>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <span className={item.discountedPrice && "text-muted text-decoration-line-through me-2"}>${item.price}</span>
                      {item.discountedPrice && <span className="text-danger">${item.discountedPrice}</span>}
                    </div>
                    <button className="btn btn-primary" onClick={() => addToCart(item)}>Buy</button>
                  </div>
                  <div className="mb-3">
                    <button className="btn btn-info me-3" onClick={()=>{setPDPItem(false)}}>Go back</button>
                  </div>
                  {isaAdmin && 
                    <div className="mb-3">
                      <button className="btn btn-secondary me-2">Edit</button>
                      <button className="btn btn-danger">Delete</button>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

);
}

export default PDP;
