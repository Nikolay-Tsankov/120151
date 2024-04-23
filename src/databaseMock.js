let items = [
    {
        id: 0,
        image: 'https://cache1.24chasa.bg/Images/Cache/187/Image_17709187_40_0.jpg',
        name: 'Item 1',
        description: 'Description 1',
        descriptionLong: 'Description 1',
        price: 10,
        discountedPrice: 10,
        quantity: 5
    },
    {
        id: 1,
        image: 'https://cache1.24chasa.bg/Images/Cache/187/Image_17709187_40_0.jpg',
        name: 'Item 1',
        description: 'Description 1',
        descriptionLong: 'Description 1',
        price: 10,
        discountedPrice: 10,
        quantity: 5
    },
    {
        id: 2,
        image: 'https://cache1.24chasa.bg/Images/Cache/187/Image_17709187_40_0.jpg',
        name: 'Item 1',
        description: 'Description 1',
        descriptionLong: 'Description 1',
        price: 10,
        discountedPrice: 10,
        quantity: 5
    },
    {
        id: 3,
        image: 'https://cache1.24chasa.bg/Images/Cache/187/Image_17709187_40_0.jpg',
        name: 'Item 1',
        descriptionLong: 'Description 1',
        description: 'Description 1',
        price: 10,
        quantity: 5
    }
];
const users = [
    { id: 1, username: 'admin', password: 'password', admin: true },
    { id: 2, username: 'user', password: '123456', admin: false }
];
export const getItems = () => {
    return items;
}
export const changeOrAddItem = (id, newItem) => {
    const itemToUpdate = items.find(item => item.id === id);
    if (itemToUpdate) {
        Object.assign(itemToUpdate, newItem);
    } else {
        items.push(newItem);
    }
}
export const deleteItem = (id) => {
    items = items.filter(item => item.id !== id);
}

export const getUsers = () => {
    return users;
}