const products = [
  {
    id: 1,
    name: 'MacBook Pro',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
  },
  {
    id: 2,
    name: 'Dell XPS 13',
    price: 999,
    image: 'https://images.unsplash.com/photo-1601440029275-5cf7dc040d5f',
  },
  {
    id: 3,
    name: 'HP Spectre x360',
    price: 1149,
    image: 'https://images.unsplash.com/photo-1579722531241-f8fd74997d5d',
  },
  {
    id: 4,
    name: 'Lenovo ThinkPad X1 Carbon',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1609867901908-e80421964f67',
  },
  {
    id: 5,
    name: 'Asus ROG Zephyrus G14',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1594820387109-34a4ab89e4e4',
  },
];

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const productList = document.getElementById('product-list');

function renderProduct(product) {
  const productCard = document.createElement('div');
  productCard.classList.add
}
