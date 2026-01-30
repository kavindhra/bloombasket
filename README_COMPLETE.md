# BloomBasket - E-Commerce Web Application

A full-stack e-commerce web application built with React (frontend) and Node.js/Express (backend), featuring product management, user authentication, shopping cart, and order management.

## Features

✔ **Product Management**
- Dynamic product loading from MongoDB
- Admin can add, update, and delete products
- Product details page with comprehensive information

✔ **User Authentication**
- User registration and login with JWT authentication
- Password hashing with bcryptjs
- Secure token storage in localStorage

✔ **Shopping Cart**
- Add/remove items from cart
- Update product quantities
- Real-time cart total calculation

✔ **Orders & Checkout**
- Complete order checkout process
- Order storage in MongoDB
- Admin can view and manage all orders

✔ **Additional Features**
- Responsive design with Tailwind CSS
- Product search and filtering
- Wishlist functionality
- Chatbot support
- User-friendly interface

## Tech Stack

### Frontend
- **React 19** - UI library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing

## Project Structure

```
e-commerce/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── orderController.js
│   │   ├── productController.js
│   │   ├── userController.js
│   │   └── cartController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── Order.js
│   │   ├── Product.js
│   │   ├── User.js
│   │   └── Cart.js
│   ├── routes/
│   │   ├── orderRoutes.js
│   │   ├── productRoutes.js
│   │   ├── userRoutes.js
│   │   └── cartRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── e-commerce/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── context/
    │   ├── services/
    │   └── utils/
    ├── package.json
    ├── vite.config.js
    └── eslint.config.js
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or MongoDB Atlas cloud)

### Backend Setup

1. **Navigate to the backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the backend directory:
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/ecommerce
   JWT_SECRET=your_jwt_secret_key_here
   ```

   **For MongoDB Atlas (Cloud):**
   ```
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce?retryWrites=true&w=majority
   ```

4. **Start MongoDB**
   - **Local MongoDB:**
     ```bash
     mongod
     ```
   - **MongoDB Atlas:** Skip this step as it's cloud-hosted

5. **Run the backend server**
   ```bash
   npm start
   ```
   
   The server should run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to the frontend directory**
   ```bash
   cd e-commerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   
   The frontend should be available at `http://localhost:5173`

## API Endpoints

### Users
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login user

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product (admin only)
- `PUT /api/products/:id` - Update product (admin only)
- `DELETE /api/products/:id` - Delete product (admin only)

### Cart
- `GET /api/cart` - Get user's cart (protected)
- `POST /api/cart` - Add item to cart (protected)
- `DELETE /api/cart/:productId` - Remove item from cart (protected)

### Orders
- `POST /api/orders` - Create order (protected)
- `GET /api/orders/:userId` - Get user's orders (protected)
- `GET /api/orders` - Get all orders (admin only)

## Database Models

### User
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  isAdmin: Boolean
}
```

### Product
```javascript
{
  name: String,
  price: Number,
  description: String,
  category: String,
  stock: Number,
  image: String
}
```

### Order
```javascript
{
  user: ObjectId,
  orderItems: [{
    name: String,
    qty: Number,
    price: Number,
    product: ObjectId
  }],
  totalPrice: Number,
  createdAt: Date
}
```

### Cart
```javascript
{
  userId: ObjectId,
  items: [{
    productId: ObjectId,
    quantity: Number
  }]
}
```

## Usage

### User Registration
1. Click "Sign Up" in the navbar
2. Enter name, email, and password
3. Click "Sign Up" to create account
4. User is automatically logged in

### Product Browsing
1. Visit the Products page
2. Use search to filter products
3. Click on a product to view details
4. Click "Add to Cart" to add item

### Shopping & Checkout
1. Click cart icon to view shopping cart
2. Update quantities or remove items
3. Click "Proceed to Checkout"
4. Order is saved to database

### Admin Functions
(Require `isAdmin: true` in user model)
- Create products: `POST /api/products`
- Update products: `PUT /api/products/:id`
- Delete products: `DELETE /api/products/:id`
- View all orders: `GET /api/orders`

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_secret_key
```

### Frontend (src/services/api.js)
Update `API_BASE_URL` if backend runs on a different port/host:
```javascript
const API_BASE_URL = 'http://localhost:5000/api';
```

## Deployment

### Backend Deployment (Heroku)

1. **Create Heroku account** and install Heroku CLI

2. **Prepare for deployment**
   ```bash
   cd backend
   heroku create your-app-name
   ```

3. **Set environment variables**
   ```bash
   heroku config:set MONGO_URI=your_mongodb_uri
   heroku config:set JWT_SECRET=your_secret_key
   ```

4. **Deploy**
   ```bash
   git push heroku main
   ```

### Frontend Deployment (Vercel)

1. **Build the frontend**
   ```bash
   cd e-commerce
   npm run build
   ```

2. **Deploy with Vercel**
   ```bash
   npm i -g vercel
   vercel
   ```

3. **Update API endpoint** in `src/services/api.js` to point to your deployed backend

## Testing the Application

### Create Test Product
Use a tool like Postman to test the API:

```
POST http://localhost:5000/api/products
Headers: Authorization: Bearer <token>
Body:
{
  "name": "Test Product",
  "price": 999,
  "description": "Test description",
  "category": "Electronics",
  "stock": 10,
  "image": "https://via.placeholder.com/300"
}
```

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check `MONGO_URI` in `.env` is correct
- For MongoDB Atlas, whitelist your IP

### JWT Token Errors
- Clear localStorage and login again
- Check `JWT_SECRET` is consistent

### CORS Errors
- Backend should have `cors()` enabled
- Check API endpoint URL in frontend

### Products Not Loading
- Ensure database has products
- Check Network tab for API errors
- Verify token is valid for protected routes

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Support

For issues and questions, please open an issue on GitHub or contact the development team.

---

**Note:** This application is ready for demonstration and can be easily deployed to production with proper configuration of MongoDB and environment variables.
