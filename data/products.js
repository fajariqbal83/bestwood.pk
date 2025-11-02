export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id == productId) {
      matchingProduct = product;
    }
  });
  return matchingProduct;
}


export const products = [
  {
  id: 'id1',
  image:'images/products/bed-1.jpg',
  name: 'Classic Wood Bed',
  rating: 4.5,
  price: 175000 ,
  off: 25,
  category: 'bed'
},  {
  id: 'id2',
  image:'images/products/bed-2.jpg',
  name: 'Stylish and comfortable Bed',
  rating: 4.0,
  price: 126000,
  off: 50,
  category: 'bed'
}, {
  id: 'id3',
  image:'images/products/bed-3.jpg',
  name: 'Modern Comfort Bed',
  rating: 5.0,
  price: 152000,
  off: 25,
  category: 'bed'
}, {
  id: 'id4',
  image:'images/products/bed-4.jpg',
  name: 'Luxury Comfort Bed',
  rating: 4.9,
  price: 110000,
  off: 45,
  category: 'bed'
},{
  id: 'id5',
  image:'images/products/sofa-1.jpg',
  name: 'Luxury Relaxing Beige Couch',
  rating: 4.0,
  price: 53000,
  off: 50,
  category: 'sofa'
},{
  id: 'id6',
  image:'images/products/sofa-2.jpg',
  name: 'Modern Stylish Yellow Sofa',
  rating: 4.7,
  price: 35000,
  off: 80,
  category: 'sofa'
},{
  id: 'id7',
  image:'images/products/sofa-3.jpg',
  name: 'Classic Cozy Brown Couch',
  rating: 4.9,
  price: 63000,
  off: 70,
  category: 'sofa'
},{
  id: 'id8',
  image:'images/products/sofa-4.jpg',
  name: ' Minimal Grey Sofa',
  rating: 4.5,
  price: 55000,
  off: 25,
  category: 'sofa'
},{
  id: 'id9',
  image:'images/products/hot-1.jpg',
  name: 'Elegant Wood wardrobe',
  rating: 4.9,
  price: 155000,
  off: 25,
  category: 'hot'
},{
  id: 'id10',
  image:'images/products/hot-2.jpg',
  name: 'Durable storage shelf',
  rating: 4.8,
  price: 20000,
  off: 50,
  category: 'hot'
},{
  id: 'id11',
  image:'images/products/hot-3.jpg',
  name: 'Classic wood table',
  rating: 5.0,
  price: 45000,
  off: 80,
  category: 'hot'
},{
  id: 'id12',
  image:'images/products/hot-4.jpg',
  name: ' Luxury touch sofa',
  rating: 4.9,
  price: 25000,
  off: 25,
  category: 'hot'
}
];