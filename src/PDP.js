import { useState } from 'react';
import { changeOrAddItem, getItems, deleteItem } from './databaseMock';
function PDP({ item, isaAdmin, addToCart, setPDPItem, isEditing, setIsEditing, updateItems, setIsAdding }) {
    const [currentItem, setCurrentItem] = useState(item);
    //Item is empty - we are creating a new item and we need to set the ID. Otherwise the "save" button will keep adding
    if(!currentItem.id){
        setCurrentItem({...currentItem, id:parseInt(getItems().length)+1})
    }
    const saveItemToDB = () => {
        if (isEditing) {
            changeOrAddItem(currentItem.id, currentItem);
            updateItems(getItems());
            console.log(getItems());
        }
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="card mt-4">
                        <div className="row">
                            <div className="col-md-6">
                                {!isEditing && <img src={currentItem.image} className="card-img-top" alt={currentItem.name} />}
                                {isEditing && <input type="text" value={currentItem.image} onChange={(e) => setCurrentItem({ ...currentItem, image: e.target.value })} placeholder="Item image src" />}
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    {!isEditing && <><h5 className="card-title">{currentItem.name}</h5><p className="card-text">{currentItem.description}</p></>}
                                    {isEditing && <><input type="text" value={currentItem.name} onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })} placeholder="Item name" /><br /><input type="text" value={currentItem.description} onChange={(e) => setCurrentItem({ ...currentItem, description: e.target.value })} placeholder="Item description" /></>}
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        {!isEditing &&
                                            <div>
                                                <span className={currentItem.discountedPrice && "text-muted text-decoration-line-through me-2"}>${currentItem.price}</span>
                                                {currentItem.discountedPrice && <span className="text-danger">${currentItem.discountedPrice}</span>}
                                            </div>
                                        }
                                        {isEditing && <div>
                                            <input type="text" value={currentItem.price} onChange={(e) => setCurrentItem({ ...currentItem, price: e.target.value })} placeholder="Item price" /><br />
                                            {currentItem.discountedPrice && <input type="text" value={currentItem.discountedPrice} onChange={(e) => setCurrentItem({ ...currentItem, discountedPrice: e.target.value })} placeholder="Item discount price" />}
                                        </div>
                                        }
                                        {!isEditing && <button className="btn btn-primary" onClick={() => addToCart(currentItem)}>Buy</button>}
                                    </div>
                                    <div className="mb-3">
                                        <button className="btn btn-info me-3" onClick={() => { setIsAdding(false);setPDPItem(false) }}>Go back</button>
                                    </div>
                                    {isaAdmin &&
                                        <div className="mb-3">
                                            <button className="btn btn-secondary me-2" onClick={() => { setIsEditing(!isEditing); saveItemToDB() }}>{isEditing && "Save"}{!isEditing && "Edit"}</button>
                                            <button className="btn btn-danger" disabled={isEditing} onClick={()=>{deleteItem(item.id);updateItems(getItems());setPDPItem(false);}}>Delete</button>
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
