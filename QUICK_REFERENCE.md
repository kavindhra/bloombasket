# Quick Reference Guide

## Starting the Application

### Terminal 1 - Backend
```bash
cd backend
npm install  # First time only
npm start
```

Expected output:
```
[dotenv] injecting env from .env
Server running on port 5000
MongoDB Connected
```

### Terminal 2 - Frontend
```bash
cd e-commerce
npm install  # First time only
npm run dev
```

Expected output:
```
➜  Local:   http://localhost:5173/
```

## Common Tasks

### Adding a New Product to Database

#### Method 1: Using Postman
1. Copy token from browser localStorage (after login)
2. POST to `http://localhost:5000/api/products`
3. Headers: `Authorization: Bearer <token>`
4. Body:
```json
{
  "name": "Product Name",
  "price": 999,
  "description": "Product description",
  "category": "Electronics",
  "stock": 10,
  "image": "https://via.placeholder.com/300"
}
```

#### Method 2: Using Frontend (after making user admin)
1. Modify user in MongoDB: set `isAdmin: true`
2. Create form in frontend to submit products
3. Use `productAPI.createProduct()` from api.js

### Making a User Admin

```bash
# Connect to MongoDB
mongo mongodb://localhost:27017/ecommerce

# Run these commands:
db.users.updateOne(
  { email: "user@example.com" },
  { $set: { isAdmin: true } }
)
```

### Resetting Database

```bash
# Connect to MongoDB
mongo mongodb://localhost:27017/ecommerce

# Drop all collections
db.users.deleteMany({})
db.products.deleteMany({})
db.orders.deleteMany({})
db.carts.deleteMany({})
```

### Checking Database Data

```bash
# Connect to MongoDB
mongo mongodb://localhost:27017/ecommerce

# View users
db.users.find().pretty()

# View products
db.products.find().pretty()

# View orders
db.orders.find().pretty()

# View specific user
db.users.findOne({ email: "test@example.com" })
```

## API Testing Commands

### Using cURL

#### Register User
```bash
curl -X POST http://localhost:5000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@test.com","password":"password123"}'
```

#### Login
```bash
curl -X POST http://localhost:5000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@test.com","password":"password123"}'
```

#### Get All Products
```bash
curl http://localhost:5000/api/products
```

#### Create Product (Admin)
```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN" \
  -d '{
    "name":"iPhone",
    "price":79999,
    "description":"Latest iPhone",
    "category":"Electronics",
    "stock":10,
    "image":"https://via.placeholder.com/300"
  }'
```

## Error Messages & Solutions

### "MongoDB connection failed"
- Check if MongoDB is running
- Verify MONGO_URI in .env
- For Atlas: whitelist your IP

### "Cannot POST /api/users/login"
- Check if backend is running
- Verify route is registered in server.js
- Check spelling of endpoint

### "Token not valid"
- Login again to get new token
- Clear localStorage: `localStorage.clear()`
- Check JWT_SECRET matches in backend

### "Product not found"
- Ensure product exists in database
- Use correct product ID (MongoDB ObjectId)
- Check database has products

### "Unauthorized"
- Login and get token
- Include `Authorization: Bearer <token>` header
- For admin routes: user must have `isAdmin: true`

## Environment Variables

### Backend .env (REQUIRED)
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_secret_key
```

### MongoDB Atlas Connection String Format
```
mongodb+srv://username:password@cluster.mongodb.net/ecommerce?retryWrites=true&w=majority
```

## Frontend Configuration

### API Endpoint in src/services/api.js
```javascript
const API_BASE_URL = 'http://localhost:5000/api';
```

For production, change to your deployed backend URL.

## Browser Console Tips

### Get Current User
```javascript
const user = JSON.parse(localStorage.getItem('token'));
console.log(user);
```

### Get Token
```javascript
const token = localStorage.getItem('token');
console.log(token);
```

### Clear All Data
```javascript
localStorage.clear();
sessionStorage.clear();
```

### Test API from Console
```javascript
const response = await fetch('http://localhost:5000/api/products');
const data = await response.json();
console.log(data);
```

## Debugging Tips

### Enable Debug Mode
Backend: Add `console.log()` statements
Frontend: Use `console.log()` in components

### Check Network Requests
1. Open DevTools (F12)
2. Go to Network tab
3. Perform action
4. Check request/response

### Check Database
```bash
# View server logs
node server.js

# Watch for changes with nodemon (install first)
npm install -g nodemon
nodemon server.js
```

### Frontend Errors
1. Check browser console (F12)
2. Check Network tab for API errors
3. Check React Dev Tools
4. Look for red error messages in terminal

## Performance Monitoring

### Backend Response Time
Add to routes:
```javascript
console.time('endpoint-name');
// ... code ...
console.timeEnd('endpoint-name');
```

### Database Query Time
Mongoose automatically logs slow queries in development

### Frontend Performance
Use React DevTools Profiler to identify slow components

## Security Checklist

- [ ] Change JWT_SECRET to something secure
- [ ] Don't commit .env file (use .gitignore)
- [ ] Use strong database passwords
- [ ] Enable HTTPS in production
- [ ] Validate all user inputs
- [ ] Use environment variables for secrets
- [ ] Enable CORS only for trusted domains
- [ ] Keep dependencies updated

## Deployment Checklist

- [ ] Update API_BASE_URL to production backend
- [ ] Ensure MongoDB Atlas is configured
- [ ] Set all environment variables on host
- [ ] Build frontend: `npm run build`
- [ ] Test all features in production
- [ ] Set up monitoring and logging
- [ ] Configure backups
- [ ] Set up SSL/TLS certificate

## Useful Links

- MongoDB Compass: https://www.mongodb.com/products/compass
- Postman: https://www.postman.com/
- React DevTools: Chrome/Firefox extension
- Heroku Dashboard: https://dashboard.heroku.com/
- Vercel Dashboard: https://vercel.com/dashboard

## Code Standards

### File Naming
- Components: PascalCase (ProductCard.jsx)
- Utils/Services: camelCase (api.js)
- Styles: Component.css

### Function Naming
- Handlers: handleActionName
- Fetchers: fetchData
- Setters: setData

### Variable Naming
- Boolean: isActive, hasError
- Arrays: items, products
- Objects: user, config

## Quick Fixes

### Clear npm cache
```bash
npm cache clean --force
```

### Reinstall dependencies
```bash
rm -rf node_modules package-lock.json
npm install
```

### Kill process on port 5000
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :5000
kill -9 <PID>
```

### Kill process on port 5173
```bash
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :5173
kill -9 <PID>
```

## MongoDB Useful Commands

```bash
# Start MongoDB
mongod

# Connect to database
mongo mongodb://localhost:27017/ecommerce

# Show databases
show dbs

# Use database
use ecommerce

# Show collections
show collections

# Count documents
db.users.countDocuments()

# Drop database
db.dropDatabase()

# Export data
mongoexport --db ecommerce --collection users --out users.json

# Import data
mongoimport --db ecommerce --collection users --file users.json
```

---

**Save this file for quick reference during development!**
