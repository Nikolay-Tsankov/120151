let items = [
    {
        id: 0,
        image: 'https://via.placeholder.com/150',
        // image: 'https://stenso.net/8606-product_page_default/teesta-royal-blue-t-shirt.jpg',
        name: 'Blue T-shirt',
        description: 'A comfortable blue t-shirt',
        descriptionLong: 'This is a comfortable blue t-shirt made from high-quality cotton. It is suitable for everyday wear and can be paired with jeans or shorts for a casual look.',
        price: 20,
        discountedPrice: 15,
        quantity: 10
    },
    {
        id: 1,
        image: 'https://via.placeholder.com/150',
        // image: 'https://tommy-europe.scene7.com/is/image/TommyEurope/MW0MW15595_1B8_alternate4?$b2c_updp_m_mainImage_1920$',
        name: 'Black Jeans',
        description: 'Stylish black jeans',
        descriptionLong: 'These black jeans are a versatile addition to your wardrobe. Made from durable denim, they feature a slim fit and classic five-pocket styling. Pair them with a t-shirt for a casual look or dress them up with a button-down shirt.',
        price: 30,
        discountedPrice: 25,
        quantity: 8
    },
    {
        id: 2,
        image: 'https://via.placeholder.com/150',
        // image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ca929f7e-f433-46b7-8d83-1a6171c172ce/revolution-7-easyon-road-running-shoes-tpC6Wv.png',
        name: 'Running Shoes',
        description: 'Lightweight running shoes',
        descriptionLong: 'These lightweight running shoes are designed for speed and performance. They feature a breathable mesh upper, cushioned midsole, and durable rubber outsole. Whether you\'re hitting the track or the treadmill, these shoes will keep you comfortable mile after mile.',
        price: 50,
        discountedPrice: 45,
        quantity: 15
    },
    {
        id: 3,
        image: 'https://via.placeholder.com/150',
        // image: 'https://cdn.thewirecutter.com/wp-content/media/2022/11/wirelessearbuds-2048px-8831.jpg',
        name: 'Wireless Earbuds',
        description: 'Wireless earbuds with charging case',
        descriptionLong: 'These wireless earbuds offer crisp, clear sound and a comfortable fit. They come with a compact charging case that provides up to 20 hours of playback time. With Bluetooth connectivity, you can easily pair them with your smartphone or tablet for music, podcasts, and calls on the go.',
        price: 40,
        quantity: 12
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