# BloomBasket - Quick Start & Testing Guide

## ✅ Application is Running!

### Access the Application
- **Frontend:** http://localhost:5174/
- **Backend API:** http://localhost:5000/api
- **Database:** MongoDB (Local or Atlas)

---

## 🚀 Quick Start (5 Minutes)

### 1. Register a New User
```
1. Go to http://localhost:5174
2. Click "Sign Up" button
3. Fill in:
   - Name: Your Name
   - Email: your.email@example.com
   - Password: any password (min 6 chars)
4. Click "Sign Up"
5. You'll be automatically logged in!
```

### 2. Add Sample Products (Using Postman or cURL)

**First, get your auth token:**

Open Postman and make a Login request:
```
POST http://localhost:5000/api/users/login
Content-Type: application/json

{
  "email": "your.email@example.com",
  "password": "your password"
}
```

Copy the `token` from the response.

**Then add a product (requires token):**
```
POST http://localhost:5000/api/products
Authorization: Bearer <paste_your_token_here>
Content-Type: application/json

{
  "name": "iPhone 15 Pro",
  "price": 79999,
  "description": "Latest Apple smartphone with advanced features",
  "category": "Electronics",
  "stock": 50,
  "image": "https://via.placeholder.com/400x300?text=iPhone+15"
}
```

**Add more products:**
```
{
  "name": "Samsung Galaxy S24",
  "price": 69999,
  "description": "High-end Android smartphone",
  "category": "Electronics",
  "stock": 30,
  "image": "https://via.placeholder.com/400x300?text=Galaxy+S24"
}

{
  "name": "Sony WH-1000XM5 Headphones",
  "price": 29999,
  "description": "Premium wireless noise-cancelling headphones",
  "category": "Audio",
  "stock": 20,
  "image": "https://via.placeholder.com/400x300?text=Sony+Headphones"
}

{
  "name": "iPad Pro 12.9",
  "price": 89999,
  "description": "Powerful tablet for productivity",
  "category": "Tablets",
  "stock": 15,
  "image": "https://via.placeholder.com/400x300?text=iPad+Pro"
}

{
  "name": "MacBook Air M3",
  "price": 119999,
  "description": "Lightweight laptop with powerful performance",
  "category": "Laptops",
  "stock": 10,
  "image": "https://via.placeholder.com/400x300?text=MacBook+Air"
}
```

### 3. Test Product Browsing
```
1. Go to http://localhost:5174/products
2. See all products load from API
3. Use search box to filter products
4. Click on a product to view details
5. Click "Add to Cart" button
```

### 4. Test Shopping Cart
```
1. Add multiple products to cart
2. Click cart icon in navbar
3. See all items with prices
4. Click + or - to change quantities
5. See total update automatically
6. Click "Remove" to delete items
7. Verify cart count in navbar updates
```

### 5. Test Checkout
```
1. With items in cart, click "Proceed to Checkout"
2. See success message
3. Order is saved to MongoDB
4. Cart should be cleared (optional feature)
```

### 6. Test User Features
```
1. Click your name in navbar to see profile
2. Click "Logout" to logout
3. Click "Login" and login again with same email
4. Should work perfectly!
```

---

## 🧪 Complete Testing Checklist

### Authentication
- [ ] User can register with valid email
- [ ] User receives appropriate error for duplicate email
- [ ] User can login after registration
- [ ] Login fails with wrong password
- [ ] Token is stored in localStorage after login
- [ ] User name shows in navbar after login
- [ ] Logout clears token and user session

### Products
- [ ] Products load on home page
- [ ] Products load on products page
- [ ] Search filters products correctly
- [ ] Product details page works
- [ ] Product image displays
- [ ] Price is shown correctly

### Shopping Cart
- [ ] Add to cart increases cart count
- [ ] Same product increments quantity instead of adding duplicate
- [ ] Remove from cart decreases count
- [ ] Cart items persist in localStorage
- [ ] Total price calculates correctly
- [ ] Tax calculates as 10% of subtotal
- [ ] Quantities can be updated

### Checkout
- [ ] Login required for checkout (redirects if not logged in)
- [ ] Checkout sends order to server
- [ ] Order is saved to MongoDB
- [ ] Success message appears
- [ ] Cart can be used multiple times

### Admin Features (Optional - requires setting isAdmin: true in DB)
- [ ] Admin can create products
- [ ] Admin can edit products
- [ ] Admin can delete products
- [ ] Admin can view all orders

---

## 🔍 Verification Steps

### Check Backend is Running
Open your browser and visit:
```
http://localhost:5000/api/products
```
Should return a JSON array of products (or empty array if no products added).

### Check Frontend is Running
```
http://localhost:5174/
```
Should display the home page with navigation.

### Check MongoDB Connection
Check the terminal where you started the backend. Should show:
```
MongoDB Connected
```

---

## 🛠️ API Testing Examples

### Using cURL (Command Line)

**Get all products:**
```bash
curl http://localhost:5000/api/products
```

**Register user:**
```bash
curl -X POST http://localhost:5000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","password":"password123"}'
```

**Login:**
```bash
curl -X POST http://localhost:5000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"password123"}'
```

---

## 🐛 Troubleshooting

### Frontend won't load
```
1. Check backend is running on port 5000
2. Check frontend is running (you should see message in terminal)
3. Clear browser cache (Ctrl+Shift+Delete)
4. Try Incognito window
```

### Products not loading
```
1. Check MongoDB is running
2. Check API endpoint in src/services/api.js is correct
3. Add sample products using the API
4. Check browser console for errors (F12)
```

### Login not working
```
1. Clear localStorage (browser tools)
2. Check email/password are correct
3. Make sure user was registered first
4. Check backend console for errors
```

### Cart not working
```
1. Make sure you're logged in
2. Clear localStorage and try again
3. Check browser console (F12) for JavaScript errors
4. Refresh the page
```

### Orders not saving
```
1. Make sure you're logged in
2. Add products to cart first
3. Verify token is in localStorage
4. Check MongoDB is running
5. Check backend console for errors
```

---

## 📊 Sample Data Structure

### User Document
```javascript
{
  "_id": ObjectId,
  "name": "John Doe",
  "email": "john@example.com",
  "password": "hashed_password",
  "isAdmin": false
}
```

### Product Document
```javascript
{
  "_id": ObjectId,
  "name": "iPhone 15 Pro",
  "price": 79999,
  "description": "Latest Apple smartphone",
  "category": "Electronics",
  "stock": 50,
  "image": "https://example.com/image.jpg"
}
```

### Order Document
```javascript
{
  "_id": ObjectId,
  "user": ObjectId (User._id),
  "orderItems": [
    {
      "name": "iPhone 15 Pro",
      "qty": 1,
      "price": 79999,
      "product": ObjectId
    }
  ],
  "totalPrice": 87989.9,
  "createdAt": Date
}
```

---

## 🎯 Performance Tips

1. **Clear Browser Cache** - If something looks wrong
2. **Close Unused Tabs** - For faster development
3. **Use Incognito Mode** - To test fresh session
4. **Check Network Tab** - See API requests in browser dev tools
5. **Check Console** - For JavaScript errors
6. **Restart Backend** - If database seems unresponsive

---

## 📱 Mobile Testing

### Test on Mobile
```
1. Get your computer's local IP: ipconfig getifaddr en0
2. On mobile, visit: http://<your-ip>:5174
3. Test all functionality on mobile
4. Design is responsive - should work great!
```

---

## 🔗 Useful Links

**Browser Developer Tools:**
- Open with F12 or Right-click → Inspect
- Console tab for errors
- Network tab to see API calls
- Storage tab to see localStorage

**MongoDB:**
- View collections at MongoDB Atlas dashboard
- Use MongoDB Compass for local database

**Postman:**
- Free tool for API testing
- Download from https://www.postman.com

---

## ⚡ Performance Optimization

The application includes:
- ✅ Lazy loading for pages
- ✅ Optimized images with fallback
- ✅ Minified CSS and JavaScript
- ✅ Fast API responses
- ✅ Efficient state management
- ✅ Vite dev server with HMR

---

## 🎓 Learning Resources

**React Documentation:**
- https://react.dev

**Express.js Guide:**
- https://expressjs.com

**MongoDB Manual:**
- https://docs.mongodb.com/manual

**Tailwind CSS:**
- https://tailwindcss.com/docs

---

## ✨ Next Steps

1. **Test everything** - Follow the checklist above
2. **Add more products** - Use the API
3. **Customize styling** - Modify CSS files
4. **Add features** - Extend the application
5. **Deploy** - Use SETUP_GUIDE.md for deployment

---

## 🎉 You're All Set!

Your e-commerce application is ready to use. Start testing and exploring all the features!

**Happy Coding! 🚀**

---

**Need Help?**
- Check DOCUMENTATION.md for technical details
- Check SETUP_GUIDE.md for deployment
- Check browser console (F12) for errors
- Check backend console for API errors
