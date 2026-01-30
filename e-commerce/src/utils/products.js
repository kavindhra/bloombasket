export const PRODUCTS = [
  {
    name: 'Fresh Tomatoes',
    price: 45,
    description: 'Ripe, juicy tomatoes fresh from farm. Rich in vitamins and antioxidants.',
    category: 'Vegetables',
    section: 'Fresh Produce',
    stock: 100,
    image: 'https://tiimg.tistatic.com/fp/1/007/564/red-color-fresh-tomato-with-rich-in-vitamin-c-2-days-shelf-life-85-95-moisture-544.jpg',
    rating: 4.5,
    reviews: 156
  },
  {
    name: 'Potatoes',
    price: 35,
    description: 'High-quality potatoes, perfect for cooking. Rich source of carbohydrates.',
    category: 'Vegetables',
    section: 'Fresh Produce',
    stock: 150,
    image: 'https://m.media-amazon.com/images/I/51QxYlvGtbL._AC_UF894,1000_QL80_.jpg',
    rating: 4.7,
    reviews: 203
  },
  {
    name: 'Onions',
    price: 40,
    description: 'Fresh yellow onions with great flavor. Essential for daily cooking.',
    category: 'Vegetables',
    section: 'Fresh Produce',
    stock: 120,
    image: 'https://via.placeholder.com/300?text=Onions',
    rating: 4.6,
    reviews: 178
  },
  {
    name: 'Bell Peppers',
    price: 60,
    description: 'Colorful bell peppers - red, yellow, and green. Rich in vitamin C.',
    category: 'Vegetables',
    section: 'Fresh Produce',
    stock: 80,
    image: 'https://via.placeholder.com/300?text=Bell+Peppers',
    rating: 4.4,
    reviews: 142
  },
  {
    name: 'Carrots',
    price: 30,
    description: 'Sweet and crunchy carrots. Excellent source of beta-carotene.',
    category: 'Vegetables',
    section: 'Fresh Produce',
    stock: 110,
    image: 'https://via.placeholder.com/300?text=Carrots',
    rating: 4.8,
    reviews: 189
  },

  // Fruits
  {
    name: 'Fresh Bananas',
    price: 50,
    description: 'Golden yellow bananas. Rich in potassium and natural energy.',
    category: 'Fruits',
    section: 'Fresh Fruits',
    stock: 200,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY0P0cu_u94QjFc6jAIZEIILj2XZpUDMKO9g&s',
    rating: 4.9,
    reviews: 256
  },
  {
    name: 'Apples',
    price: 120,
    description: 'Crisp red apples. One apple a day keeps the doctor away!',
    category: 'Fruits',
    section: 'Fresh Fruits',
    stock: 90,
    image: 'https://via.placeholder.com/300?text=Apples',
    rating: 4.7,
    reviews: 198
  },
  {
    name: 'Oranges',
    price: 80,
    description: 'Juicy oranges packed with vitamin C. Perfect for fresh juice.',
    category: 'Fruits',
    section: 'Fresh Fruits',
    stock: 130,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGH2Tjd5cmMYrm2ercI0Kc34i-2EBp5ok7eA&s',
    rating: 4.6,
    reviews: 167
  },
  {
    name: 'Grapes',
    price: 150,
    description: 'Sweet purple grapes. Perfect for snacking and salads.',
    category: 'Fruits',
    section: 'Fresh Fruits',
    stock: 70,
    image: 'https://via.placeholder.com/300?text=Grapes',
    rating: 4.5,
    reviews: 134
  },
  {
    name: 'Watermelon',
    price: 200,
    description: 'Refreshing watermelon. Perfect for summer hydration.',
    category: 'Fruits',
    section: 'Fresh Fruits',
    stock: 50,
    image: 'https://via.placeholder.com/300?text=Watermelon',
    rating: 4.8,
    reviews: 145
  },

  // Dairy & Eggs
  {
    name: 'Fresh Milk',
    price: 55,
    description: '1L bottle of fresh dairy milk. Pure and nutritious.',
    category: 'Dairy',
    section: 'Dairy & Eggs',
    stock: 250,
    image: 'https://via.placeholder.com/300?text=Milk',
    rating: 4.7,
    reviews: 312
  },
  {
    name: 'Eggs (12 Pack)',
    price: 75,
    description: 'Farm fresh eggs. Good source of protein and nutrients.',
    category: 'Dairy',
    section: 'Dairy & Eggs',
    stock: 180,
    image: 'https://via.placeholder.com/300?text=Eggs',
    rating: 4.8,
    reviews: 267
  },
  {
    name: 'Yogurt',
    price: 40,
    description: 'Creamy plain yogurt. Great for health and digestion.',
    category: 'Dairy',
    section: 'Dairy & Eggs',
    stock: 160,
    image: 'https://via.placeholder.com/300?text=Yogurt',
    rating: 4.6,
    reviews: 189
  },
  {
    name: 'Cheese',
    price: 280,
    description: 'Delicious cheddar cheese. Perfect for snacks and cooking.',
    category: 'Dairy',
    section: 'Dairy & Eggs',
    stock: 85,
    image: 'https://via.placeholder.com/300?text=Cheese',
    rating: 4.5,
    reviews: 123
  },
  {
    name: 'Butter',
    price: 250,
    description: 'Pure dairy butter. Essential for baking and cooking.',
    category: 'Dairy',
    section: 'Dairy & Eggs',
    stock: 95,
    image: 'https://via.placeholder.com/300?text=Butter',
    rating: 4.7,
    reviews: 156
  },

  // Grains & Cereals
  {
    name: 'Rice (5kg)',
    price: 320,
    description: 'Premium basmati rice. Long grain, aromatic, and fluffy.',
    category: 'Grains',
    section: 'Grains & Cereals',
    stock: 200,
    image: 'https://via.placeholder.com/300?text=Rice',
    rating: 4.8,
    reviews: 287
  },
  {
    name: 'Wheat Flour (1kg)',
    price: 45,
    description: 'Pure wheat flour for making bread and rotis.',
    category: 'Grains',
    section: 'Grains & Cereals',
    stock: 220,
    image: 'https://via.placeholder.com/300?text=Flour',
    rating: 4.6,
    reviews: 198
  },
  {
    name: 'Oats (500g)',
    price: 180,
    description: 'Healthy oats for breakfast. High in fiber and nutrients.',
    category: 'Grains',
    section: 'Grains & Cereals',
    stock: 140,
    image: 'https://via.placeholder.com/300?text=Oats',
    rating: 4.7,
    reviews: 167
  },
  {
    name: 'Cornflakes',
    price: 120,
    description: 'Crispy cornflakes cereal. Perfect for breakfast.',
    category: 'Grains',
    section: 'Grains & Cereals',
    stock: 165,
    image: 'https://via.placeholder.com/300?text=Cornflakes',
    rating: 4.5,
    reviews: 134
  },
  {
    name: 'Bread (White)',
    price: 60,
    description: 'Soft white bread. Fresh and delicious.',
    category: 'Grains',
    section: 'Grains & Cereals',
    stock: 190,
    image: 'https://via.placeholder.com/300?text=Bread',
    rating: 4.6,
    reviews: 178
  },

  // Oils & Condiments
  {
    name: 'Cooking Oil (1L)',
    price: 210,
    description: 'Pure vegetable cooking oil. Light and healthy.',
    category: 'Oils',
    section: 'Oils & Condiments',
    stock: 250,
    image: 'https://via.placeholder.com/300?text=Oil',
    rating: 4.7,
    reviews: 234
  },
  {
    name: 'Salt (1kg)',
    price: 25,
    description: 'Iodized salt. Essential for cooking.',
    category: 'Condiments',
    section: 'Oils & Condiments',
    stock: 300,
    image: 'https://via.placeholder.com/300?text=Salt',
    rating: 4.8,
    reviews: 267
  },
  {
    name: 'Sugar (1kg)',
    price: 50,
    description: 'Refined sugar. Perfect sweetness for any recipe.',
    category: 'Condiments',
    section: 'Oils & Condiments',
    stock: 280,
    image: 'https://via.placeholder.com/300?text=Sugar',
    rating: 4.7,
    reviews: 201
  },
  {
    name: 'Chilli Powder',
    price: 120,
    description: 'Hot and spicy chilli powder. Add a kick to your dishes.',
    category: 'Spices',
    section: 'Oils & Condiments',
    stock: 150,
    image: 'https://via.placeholder.com/300?text=Chilli',
    rating: 4.6,
    reviews: 145
  },
  {
    name: 'Turmeric Powder',
    price: 150,
    description: 'Golden turmeric powder. Healthy and aromatic.',
    category: 'Spices',
    section: 'Oils & Condiments',
    stock: 130,
    image: 'https://via.placeholder.com/300?text=Turmeric',
    rating: 4.8,
    reviews: 178
  },

  // Snacks & Beverages
  {
    name: 'Tea Leaves (500g)',
    price: 280,
    description: 'Premium tea leaves. Aromatic and flavorful.',
    category: 'Beverages',
    section: 'Snacks & Beverages',
    stock: 170,
    image: 'https://via.placeholder.com/300?text=Tea',
    rating: 4.7,
    reviews: 198
  },
  {
    name: 'Coffee (250g)',
    price: 320,
    description: 'Rich coffee powder. Perfect morning brew.',
    category: 'Beverages',
    section: 'Snacks & Beverages',
    stock: 140,
    image: 'https://via.placeholder.com/300?text=Coffee',
    rating: 4.6,
    reviews: 167
  },
  {
    name: 'Peanuts (400g)',
    price: 180,
    description: 'Roasted peanuts. Healthy and crunchy snack.',
    category: 'Snacks',
    section: 'Snacks & Beverages',
    stock: 160,
    image: 'https://via.placeholder.com/300?text=Peanuts',
    rating: 4.5,
    reviews: 134
  },
  {
    name: 'Chocolate Biscuits',
    price: 80,
    description: 'Delicious chocolate biscuits. Perfect with tea.',
    category: 'Snacks',
    section: 'Snacks & Beverages',
    stock: 200,
    image: 'https://via.placeholder.com/300?text=Biscuits',
    rating: 4.6,
    reviews: 189
  },
  {
    name: 'Honey (500ml)',
    price: 350,
    description: 'Pure honey. Natural sweetener with health benefits.',
    category: 'Snacks',
    section: 'Snacks & Beverages',
    stock: 95,
    image: 'https://via.placeholder.com/300?text=Honey',
    rating: 4.8,
    reviews: 156
  },
  
];

// Utility functions remain unchanged
export const getProductById = (id) => {
  return PRODUCTS.find((product) => product.id === parseInt(id));
};

export const getProductsByCategory = (category) => {
  return PRODUCTS.filter((product) => product.category === category);
};

export const searchProducts = (query) => {
  const lowerQuery = query.toLowerCase();
  return PRODUCTS.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery)
  );
};