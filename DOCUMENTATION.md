# ShopHub E-Commerce Application - Complete Documentation

## Project Overview

ShopHub is a full-stack e-commerce web application built with:
- **Frontend:** React 19, React Router, Tailwind CSS, Axios
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **Database:** MongoDB

## Current Implementation Status

### Backend Features Completed ✅
- [x] Express.js server setup
- [x] MongoDB connection configuration
- [x] User model with authentication
- [x] Product model and CRUD operations
- [x] Order model for transaction tracking
- [x] Cart model for shopping cart management
- [x] User controller (registration & login)
- [x] Product controller (get, create, update, delete)
- [x] Order controller (create, retrieve orders)
- [x] Cart controller (add, view, remove items)
- [x] Authentication middleware with JWT
- [x] Admin access control
- [x] CORS enabled for frontend communication
- [x] Error handling in controllers

### Frontend Features Completed ✅
- [x] React Router setup with all pages
- [x] Axios API client with interceptors
- [x] User registration page with backend integration
- [x] User login page with token storage
- [x] Product listing with dynamic loading
- [x] Product card component with flexible ID handling
- [x] Shopping cart context with state management
- [x] Cart page with checkout functionality
- [x] Order submission to backend
- [x] Navbar with login/logout functionality
- [x] Responsive design with Tailwind CSS
- [x] Search and filter functionality
- [x] Wishlist feature
- [x] About and Contact pages
- [x] Error handling and loading states

## File Structure

### Backend (/backend)
```
backend/
├── config/
│   └── db.js                 # MongoDB connection
├── controllers/
│   ├── userController.js     # User auth logic
│   ├── productController.js  # Product CRUD
│   ├── orderController.js    # Order management
│   └── cartController.js     # Cart management
├── middleware/
│   └── authMiddleware.js     # JWT authentication
├── models/
│   ├── User.js              # User schema
│   ├── Product.js           # Product schema
│   ├── Order.js             # Order schema
│   └── Cart.js              # Cart schema
├── routes/
│   ├── userRoutes.js        # User endpoints
│   ├── productRoutes.js     # Product endpoints
│   ├── orderRoutes.js       # Order endpoints
│   └── cartRoutes.js        # Cart endpoints
├── server.js                # Express server
├── package.json             # Dependencies
└── .env                     # Configuration
```

### Frontend (/e-commerce)
```
e-commerce/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── ProductCard.jsx  # Product display
│   │   ├── CartItem.jsx     # Cart item component
│   │   ├── Hero.jsx         # Hero section
│   │   └── Chatbot.jsx      # Chat support
│   ├── pages/
│   │   ├── Home.jsx         # Home page
│   │   ├── Products.jsx     # Products listing
│   │   ├── ProductDetails.jsx
│   │   ├── Cart.jsx         # Shopping cart
│   │   ├── Login.jsx        # User login
│   │   ├── Signup.jsx       # User registration
│   │   ├── Wishlist.jsx     # Favorites
│   │   ├── About.jsx        # About us
│   │   └── Contact.jsx      # Contact form
│   ├── services/
│   │   └── api.js           # API client
│   ├── context/
│   │   └── CartContext.jsx  # State management
│   ├── App.jsx              # Main app
│   ├── main.jsx             # Entry point
│   └── index.css            # Styles
├── package.json             # Dependencies
├── vite.config.js           # Vite config
└── eslint.config.js         # Linting rules
```

## API Endpoints

### Authentication
- `POST /api/users/register` - Register new user
  - Body: `{ name, email, password }`
  - Response: `{ message, user }`

- `POST /api/users/login` - Login user
  - Body: `{ email, password }`
  - Response: `{ token, user }`

### Products
- `GET /api/products` - Get all products
  - Response: `[{ _id, name, price, description, category, stock, image }]`

- `GET /api/products/:id` - Get single product
  - Response: `{ _id, name, price, description, category, stock, image }`

- `POST /api/products` - Create product (Admin)
  - Header: `Authorization: Bearer <token>`
  - Body: `{ name, price, description, category, stock, image }`

- `PUT /api/products/:id` - Update product (Admin)
  - Header: `Authorization: Bearer <token>`
  - Body: `{ name, price, description, category, stock, image }`

- `DELETE /api/products/:id` - Delete product (Admin)
  - Header: `Authorization: Bearer <token>`

### Cart
- `GET /api/cart` - Get user cart (Protected)
  - Header: `Authorization: Bearer <token>`
  - Response: `{ userId, items: [{ productId, quantity }] }`

- `POST /api/cart` - Add to cart (Protected)
  - Header: `Authorization: Bearer <token>`
  - Body: `{ productId, quantity }`

- `DELETE /api/cart/:productId` - Remove from cart (Protected)
  - Header: `Authorization: Bearer <token>`

### Orders
- `POST /api/orders` - Create order (Protected)
  - Header: `Authorization: Bearer <token>`
  - Body: `{ orderItems: [{ productId, quantity }], totalPrice }`

- `GET /api/orders/:userId` - Get user orders (Protected)
  - Header: `Authorization: Bearer <token>`

- `GET /api/orders` - Get all orders (Admin)
  - Header: `Authorization: Bearer <token>`

## Database Models

### User
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  isAdmin: Boolean (default: false),
  createdAt: Date
}
```

### Product
```javascript
{
  _id: ObjectId,
  name: String (required),
  price: Number (required),
  description: String,
  category: String,
  stock: Number,
  image: String,
  createdAt: Date
}
```

### Order
```javascript
{
  _id: ObjectId,
  user: ObjectId (ref: User),
  orderItems: [{
    name: String,
    qty: Number,
    price: Number,
    product: ObjectId (ref: Product)
  }],
  totalPrice: Number (required),
  createdAt: Date,
  updatedAt: Date
}
```

### Cart
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  items: [{
    productId: ObjectId (ref: Product),
    quantity: Number (default: 1)
  }],
  createdAt: Date
}
```

## Installation & Running

### Prerequisites
- Node.js v14+ installed
- MongoDB (local or Atlas)
- npm/yarn package manager

### Backend Setup

```bash
# 1. Navigate to backend directory
cd backend

# 2. Install dependencies
npm install

# 3. Create .env file
# For local MongoDB:
# PORT=5000
# MONGO_URI=mongodb://localhost:27017/ecommerce
# JWT_SECRET=your_secret_key

# For MongoDB Atlas:
# PORT=5000
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce
# JWT_SECRET=your_secret_key

# 4. Start backend server
npm start
# Server runs on http://localhost:5000
```

### Frontend Setup

```bash
# 1. Navigate to frontend directory
cd e-commerce

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
# Frontend runs on http://localhost:5173
```

## Workflow

### User Registration Flow
1. User clicks "Sign Up"
2. Enters name, email, password
3. Frontend sends `POST /api/users/register`
4. Backend creates user with hashed password
5. Automatic login with JWT token
6. Redirected to home page

### Product Browsing Flow
1. Home/Products page fetches `GET /api/products`
2. Products displayed in grid layout
3. User can search/filter products
4. Click product to view details
5. "Add to Cart" saves to local state

### Checkout Flow
1. User clicks cart icon
2. Reviews items in shopping cart
3. Clicks "Proceed to Checkout"
4. Frontend sends `POST /api/orders`
5. Order saved to MongoDB
6. Success notification displayed

## Authentication Flow

```
Login/Register Request
         ↓
Backend validates credentials
         ↓
JWT token generated (expires at configured time)
         ↓
Token sent to frontend
         ↓
Frontend stores token in localStorage
         ↓
Axios interceptor adds token to all requests
         ↓
Protected routes check token validity
```

## Error Handling

### Frontend Error Handling
- API errors displayed to user
- Network errors caught and logged
- Form validation before submission
- Fallback to static products if API fails

### Backend Error Handling
- Try-catch blocks in all controllers
- Validation on user input
- Proper HTTP status codes
- Detailed error messages

## Security Features

✅ Password hashing with bcryptjs (10 salt rounds)
✅ JWT authentication tokens
✅ CORS enabled for frontend communication
✅ Protected routes require authentication
✅ Admin routes require admin flag
✅ Token stored securely in localStorage
✅ Token validation on protected endpoints

## Testing the Application

### Manual Testing Steps

1. **Test User Registration**
   - Go to http://localhost:5173/signup
   - Enter name, email, password
   - Click Sign Up
   - Check database for new user

2. **Test Product Loading**
   - Go to Products page
   - Verify products load from API
   - Test search functionality

3. **Test Shopping Cart**
   - Add products to cart
   - Update quantities
   - Remove items
   - Verify totals

4. **Test Checkout**
   - Click Proceed to Checkout
   - Order should be saved to database
   - Check MongoDB for order record

### API Testing with Postman

```bash
# 1. Register User
POST http://localhost:5000/api/users/register
Content-Type: application/json

{
  "name": "Test User",
  "email": "test@example.com",
  "password": "password123"
}

# 2. Login (get token)
POST http://localhost:5000/api/users/login
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "password123"
}

# Copy token from response

# 3. Get Products
GET http://localhost:5000/api/products

# 4. Create Product (as admin)
POST http://localhost:5000/api/products
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Test Product",
  "price": 999,
  "description": "Test",
  "category": "Electronics",
  "stock": 10,
  "image": "https://via.placeholder.com/300"
}

# 5. Create Order
POST http://localhost:5000/api/orders
Authorization: Bearer <token>
Content-Type: application/json

{
  "orderItems": [
    {
      "productId": "65d1234567890abcdef12345",
      "quantity": 2
    }
  ],
  "totalPrice": 1998
}
```

## Deployment Ready

The application is production-ready with:
- ✅ Proper error handling
- ✅ Environment variable configuration
- ✅ Database abstraction
- ✅ API service layer
- ✅ State management
- ✅ Responsive design
- ✅ Security best practices
- ✅ Code organization

### Deployment Steps (Heroku + Vercel)

**Backend:**
1. Create Heroku account
2. Set environment variables
3. Deploy with `git push heroku main`

**Frontend:**
1. Create Vercel account
2. Update API endpoint to Heroku URL
3. Deploy with `vercel`

## Project Completion Checklist

- [x] Backend API fully functional
- [x] Frontend fully integrated
- [x] User authentication working
- [x] Product management complete
- [x] Shopping cart functional
- [x] Checkout process implemented
- [x] Order management in place
- [x] Error handling implemented
- [x] Responsive design applied
- [x] Code quality maintained
- [x] Documentation complete
- [x] Ready for deployment

---

**Last Updated:** January 29, 2026
**Status:** Production Ready ✅
