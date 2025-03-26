// Mock product data
const products = [
  {
    id: 1,
    name: "Smartphone",
    price: 699.99,
    description: "Latest model smartphone with advanced features",
    image: "https://via.placeholder.com/200",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Laptop",
    price: 999.99,
    description: "High-performance laptop for work and gaming",
    image: "https://via.placeholder.com/200",
    category: "Electronics"
  },
  {
    id: 3,
    name: "Headphones",
    price: 199.99,
    description: "Wireless noise-canceling headphones",
    image: "https://via.placeholder.com/200",
    category: "Electronics"
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 299.99,
    description: "Fitness tracking smartwatch",
    image: "https://via.placeholder.com/200",
    category: "Electronics"
  },
  {
    id: 5,
    name: "Camera",
    price: 799.99,
    description: "Professional DSLR camera",
    image: "https://via.placeholder.com/200",
    category: "Electronics"
  }
];

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchProducts = async () => {
  await delay(500); // Simulate network delay
  return products;
};

export const searchProducts = async (query) => {
  await delay(300);
  return products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase())
  );
};

export const getProductById = async (id) => {
  await delay(200);
  return products.find(product => product.id === id);
}; 