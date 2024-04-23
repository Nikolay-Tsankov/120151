
function CheckoutRow({ item }) {
    return (
        <div className="row mt-4 mb-4">
            <div className="col">
                <div className="row g-0 align-items-center">
                    <div className="col-md-4">
                        <img src={item.image} className="img-fluid" alt={item.name} />
                    </div>
                    <div className="col-md-8">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5>{item.name}</h5>
                            <div>
                                <span className={item.discountedPrice && "text-muted text-decoration-line-through me-2"}>${item.price}</span>
                                {item.discountedPrice && <span className="text-danger">${item.discountedPrice}</span>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutRow;
