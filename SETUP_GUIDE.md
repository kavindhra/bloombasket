# BloomBasket E-Commerce - Complete Setup Guide

## Quick Start Guide

### Step 1: Install Node.js
Download and install Node.js from https://nodejs.org/ (v14 or higher)

### Step 2: Set Up MongoDB

#### Option A: Local MongoDB
1. Download and install MongoDB from https://www.mongodb.com/try/download/community
2. Start MongoDB service:
   - **Windows:** MongoDB should start automatically
   - **Mac:** `brew services start mongodb-community`
   - **Linux:** `sudo systemctl start mongod`

#### Option B: MongoDB Atlas (Recommended for Production)
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Add IP whitelist (include your IP and 0.0.0.0/0 for development)
4. Create database user with username and password
5. Get connection string in the format: `mongodb+srv://username:password@cluster.mongodb.net/ecommerce`

### Step 3: Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file with the following content:
```

**For Local MongoDB (.env):**
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_super_secret_key_12345
```

**For MongoDB Atlas (.env):**
```
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_key_12345
```

```bash
# Start the backend server
npm start
```

Expected output:
```
[dotenv] injecting env from .env
Server running on port 5000
MongoDB Connected
```

### Step 4: Frontend Setup

```bash
# Navigate to frontend directory (in a new terminal)
cd e-commerce

# Install dependencies
npm install

# Start the development server
npm run dev
```

Expected output:
```
VITE v7.2.4  ready in 100 ms

➜  Local:   http://localhost:5173/
➜  press h to show help
```

### Step 5: Test the Application

1. **Open browser and go to:** http://localhost:5173/
2. **Create an account:**
   - Click "Sign Up"
   - Enter name, email, and password
   - Click "Sign Up"
3. **Add products (optional):**
   - Use Postman to POST to `/api/products` (requires authentication)
   - Or use static products from the database
4. **Test shopping:**
   - Browse products on the Products page
   - Add items to cart
   - Go to Cart page
   - Click "Proceed to Checkout" to place an order

## File Modifications Made

### Backend Files Updated/Created
- ✅ `config/db.js` - MongoDB connection configuration
- ✅ `models/User.js` - User schema with authentication
- ✅ `models/Product.js` - Product schema
- ✅ `models/Order.js` - Order schema for storing purchases
- ✅ `models/Cart.js` - Cart schema for shopping cart management
- ✅ `controllers/userController.js` - User registration and login
- ✅ `controllers/productController.js` - Product CRUD operations
- ✅ `controllers/orderController.js` - Order creation and retrieval
- ✅ `controllers/cartController.js` - Cart management
- ✅ `middleware/authMiddleware.js` - JWT authentication middleware
- ✅ `routes/userRoutes.js` - User endpoints
- ✅ `routes/productRoutes.js` - Product endpoints
- ✅ `routes/orderRoutes.js` - Order endpoints
- ✅ `routes/cartRoutes.js` - Cart endpoints
- ✅ `server.js` - Express server with all routes integrated
- ✅ `.env` - Environment variables (requires configuration)

### Frontend Files Updated/Created
- ✅ `src/services/api.js` - Axios API client with all endpoints
- ✅ `src/pages/Home.jsx` - Dynamic product loading
- ✅ `src/pages/Products.jsx` - Product listing with search
- ✅ `src/pages/Login.jsx` - Backend API integration
- ✅ `src/pages/Signup.jsx` - Backend API integration
- ✅ `src/pages/Cart.jsx` - Checkout functionality
- ✅ `src/components/ProductCard.jsx` - Flexible product display
- ✅ `src/components/Navbar.jsx` - Logout functionality
- ✅ `src/context/CartContext.jsx` - State management
- ✅ `package.json` - Added axios dependency

## API Testing with Postman

### 1. Register User
```
POST http://localhost:5000/api/users/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### 2. Login User
```
POST http://localhost:5000/api/users/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

Response will include:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### 3. Create Product (Admin Only)
```
POST http://localhost:5000/api/products
Content-Type: application/json
Authorization: Bearer <token>

{
  "name": "iPhone 15",
  "price": 79999,
  "description": "Latest iPhone with advanced features",
  "category": "Electronics",
  "stock": 50,
  "image": "https://via.placeholder.com/300"
}
```

### 4. Get All Products
```
GET http://localhost:5000/api/products
```

### 5. Create Order
```
POST http://localhost:5000/api/orders
Content-Type: application/json
Authorization: Bearer <token>

{
  "orderItems": [
    {
      "productId": "65d1234567890abcdef12345",
      "quantity": 2
    }
  ],
  "totalPrice": 159998
}
```

## Production Deployment

### Deploy Backend to Heroku

1. **Install Heroku CLI:**
   ```bash
   npm install -g heroku
   ```

2. **Login to Heroku:**
   ```bash
   heroku login
   ```

3. **Create Heroku app:**
   ```bash
   cd backend
   heroku create your-app-name
   ```

4. **Set environment variables:**
   ```bash
   heroku config:set MONGO_URI="your_mongodb_atlas_uri"
   heroku config:set JWT_SECRET="your_secret_key"
   ```

5. **Deploy:**
   ```bash
   git push heroku main
   ```

6. **View logs:**
   ```bash
   heroku logs --tail
   ```

### Deploy Frontend to Vercel

1. **Build frontend:**
   ```bash
   cd e-commerce
   npm run build
   ```

2. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Update API endpoint** in `src/services/api.js`:
   ```javascript
   const API_BASE_URL = 'https://your-heroku-app.herokuapp.com/api';
   ```

5. **Redeploy frontend:**
   ```bash
   vercel
   ```

## Troubleshooting

### Issue: "MongoDB connection failed"
**Solution:**
- Ensure MongoDB is running locally OR MongoDB Atlas is accessible
- Check MONGO_URI in .env is correct
- If using MongoDB Atlas, whitelist your IP in Atlas dashboard

### Issue: "Cannot find module 'express'"
**Solution:**
```bash
cd backend
npm install
```

### Issue: "Port 5000 already in use"
**Solution:**
```bash
# Kill process on port 5000
# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -i :5000
kill -9 <PID>
```

### Issue: "CORS error in frontend"
**Solution:**
- Ensure backend is running on port 5000
- Check API_BASE_URL in `src/services/api.js` is correct
- Backend server.js has `cors()` enabled

### Issue: "Login/Signup not working"
**Solution:**
- Check browser console for errors
- Verify backend is running
- Check network tab to see API responses
- Clear localStorage and try again

## Project Checklist

- ✅ Backend API fully functional
- ✅ MongoDB integration complete
- ✅ User authentication with JWT
- ✅ Product CRUD operations
- ✅ Shopping cart functionality
- ✅ Order management
- ✅ Frontend fully integrated with backend
- ✅ Responsive design implemented
- ✅ Error handling in place
- ✅ Ready for deployment

## Next Steps

1. **Test all features thoroughly**
2. **Add more products to database**
3. **Set up payment gateway (Stripe/Razorpay)**
4. **Implement email notifications**
5. **Add admin dashboard**
6. **Deploy to production**

## Additional Resources

- Node.js Documentation: https://nodejs.org/docs/
- Express.js Guide: https://expressjs.com/
- MongoDB Manual: https://docs.mongodb.com/manual/
- React Documentation: https://react.dev/
- Mongoose Documentation: https://mongoosejs.com/

---

**For questions or issues, please refer to the main README.md file or create an issue in the repository.**
