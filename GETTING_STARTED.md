# Getting Started Guide for New Developers

## Welcome to ShopHub E-Commerce! 👋

This guide will help you get up and running with the ShopHub application quickly and easily.

---

## 🎯 Your First 15 Minutes

### Step 1: Understand the Project (5 minutes)
Read the quick overview:
- **What is this?** A full-stack e-commerce application built with React and Node.js
- **What can it do?** Users can register, browse products, add to cart, and checkout
- **Tech Stack?** React, Node.js, Express, MongoDB, Tailwind CSS

### Step 2: Clone or Download the Project (2 minutes)
```bash
# If using Git
git clone https://github.com/yourusername/e-commerce.git
cd e-commerce

# Or just download the files
# Then navigate to the project folder
```

### Step 3: Install Node.js (3 minutes if needed)
- Download from https://nodejs.org/ (LTS version recommended)
- Verify installation: `node --version` and `npm --version`

### Step 4: Read This Guide (5 minutes)
You're already doing this! Keep reading...

---

## 🔧 Setup Process (30 minutes)

### 1. Backend Setup (15 minutes)

#### Install Backend Dependencies
```bash
cd backend
npm install
```

#### Create .env File
Create a file named `.env` in the `backend` folder:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_super_secret_key_change_this_in_production
```

#### Start MongoDB (Choose One)

**Option A: Local MongoDB**
```bash
# Download MongoDB Community Edition
# https://www.mongodb.com/try/download/community

# On Windows: MongoDB should start automatically
# On Mac: brew services start mongodb-community
# On Linux: sudo systemctl start mongod
```

**Option B: MongoDB Atlas (Cloud)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create cluster
4. Get connection string
5. Update MONGO_URI in .env

#### Start Backend Server
```bash
npm start
```

You should see:
```
Server running on port 5000
MongoDB Connected
```

✅ **Backend is ready!**

### 2. Frontend Setup (15 minutes)

#### Install Frontend Dependencies
```bash
# In a new terminal window
cd e-commerce
npm install
```

#### Start Frontend Development Server
```bash
npm run dev
```

You should see:
```
➜  Local:   http://localhost:5173/
```

✅ **Frontend is ready!**

---

## 🌐 Access the Application

Open your browser and go to:
```
http://localhost:5173
```

You should see the ShopHub homepage!

---

## 🧪 Test the Application

### 1. Create an Account
1. Click "Sign Up" button
2. Enter name, email, and password
3. Click "Sign Up"
4. You should be logged in automatically

### 2. Browse Products
1. Click "Products" in navigation
2. You should see products (or a message about no products)
3. Try the search function

### 3. Add Items to Cart
1. Click "Add to Cart" on any product
2. See the cart count increase in navbar
3. Click cart icon to view items

### 4. Checkout
1. In cart page, click "Proceed to Checkout"
2. You should see order confirmation
3. Order saved to database

✅ **Everything working!**

---

## 📁 Project Structure

### Backend Folder Structure
```
backend/
├── config/db.js              # Database setup
├── controllers/              # Business logic
├── models/                   # Database schemas
├── middleware/               # Authentication, etc
├── routes/                   # API endpoints
├── server.js                 # Main server file
├── package.json              # Dependencies
└── .env                      # Your configuration
```

### Frontend Folder Structure
```
e-commerce/
├── src/
│   ├── pages/               # Full pages (Home, Products, etc)
│   ├── components/          # Reusable components
│   ├── context/             # State management
│   ├── services/            # API calls
│   └── App.jsx              # Main app component
├── package.json             # Dependencies
└── vite.config.js           # Build configuration
```

---

## 🔑 Key Concepts

### Authentication
Users login with email/password → Server generates JWT token → Token stored in browser → Token sent with every request

### API Communication
Frontend makes HTTP requests to backend → Backend processes request → Backend returns data → Frontend updates UI

### Database
MongoDB stores all data (Users, Products, Orders) → Mongoose provides nice interface → All data persists

### State Management
React Context stores cart/user info → Components can access from anywhere → Updates trigger re-render

---

## 💡 Common Tasks

### How to Add a New Page

1. Create `NewPage.jsx` in `src/pages/`
2. Add route in `src/App.jsx`:
```javascript
<Route path="/newpage" element={<NewPage />} />
```
3. Add link in `src/components/Navbar.jsx`

### How to Add a Product to Database

Using Postman:
1. Get login token (from browser localStorage after login)
2. POST to `http://localhost:5000/api/products`
3. Include `Authorization: Bearer <token>` header
4. Body:
```json
{
  "name": "iPhone",
  "price": 79999,
  "description": "Latest iPhone",
  "category": "Electronics",
  "stock": 10,
  "image": "https://via.placeholder.com/300"
}
```

### How to Make Someone Admin

In MongoDB (after connecting):
```javascript
db.users.updateOne(
  { email: "user@example.com" },
  { $set: { isAdmin: true } }
)
```

### How to Debug an Issue

1. Check browser console (F12)
2. Check terminal for backend errors
3. Check Network tab for API errors
4. Read error message carefully
5. Google the error
6. Check QUICK_REFERENCE.md

---

## 📚 Important Files to Know

| File | Purpose |
|------|---------|
| `backend/server.js` | Starts the backend server |
| `backend/.env` | Backend configuration (secret!) |
| `e-commerce/src/App.jsx` | Defines all routes |
| `e-commerce/src/services/api.js` | Makes API calls |
| `e-commerce/src/context/CartContext.jsx` | Manages cart state |

---

## 🐛 Troubleshooting

### Problem: "npm: command not found"
**Solution:** Install Node.js from https://nodejs.org/

### Problem: "MongoDB connection failed"
**Solution:**
1. Check if MongoDB is running
2. Check MONGO_URI in .env
3. For local: Open Command Prompt and run: `mongod`
4. For Atlas: Copy correct connection string

### Problem: "Port 5000 is already in use"
**Solution:** Kill the process using that port (see QUICK_REFERENCE.md)

### Problem: "Cannot find module 'express'"
**Solution:** Run `npm install` in the backend folder

### Problem: "No products showing"
**Solution:** 
1. Add products to database
2. Or use static products that are already defined
3. Check Network tab to see API response

### Problem: "Login not working"
**Solution:**
1. Create new account first
2. Check browser console for errors
3. Check backend is running
4. Clear localStorage

---

## 📖 Reading List

Read these files in order:
1. **DOCUMENTATION_INDEX.md** - Overview of all docs
2. **README_COMPLETE.md** - Detailed project info
3. **QUICK_REFERENCE.md** - For everyday tasks
4. **SETUP_GUIDE.md** - When you need help

---

## 🎓 Learning Resources

### Backend Development
- Express.js Guide: https://expressjs.com/
- MongoDB Manual: https://docs.mongodb.com/
- JWT: https://jwt.io/

### Frontend Development
- React Docs: https://react.dev/
- React Router: https://reactrouter.com/
- Tailwind CSS: https://tailwindcss.com/

### Database
- MongoDB Tutorial: https://www.mongodb.com/docs/manual/
- Mongoose Guide: https://mongoosejs.com/

---

## 🚀 Next Steps

### Week 1: Get Familiar
- [ ] Run the application successfully
- [ ] Create test accounts
- [ ] Add test products
- [ ] Complete a checkout
- [ ] Read all documentation

### Week 2: Understand Code
- [ ] Read all backend files
- [ ] Read all frontend files
- [ ] Understand the database structure
- [ ] Trace a request from frontend to backend

### Week 3: Make Changes
- [ ] Add a new feature
- [ ] Fix a bug
- [ ] Improve styling
- [ ] Add a new page

### Week 4: Deploy
- [ ] Set up MongoDB Atlas
- [ ] Deploy backend to Heroku
- [ ] Deploy frontend to Vercel
- [ ] Test production version

---

## 📞 Need Help?

1. **Check the documentation** - Most answers are in QUICK_REFERENCE.md
2. **Google the error** - Exact error message usually leads to solutions
3. **Check console** - Browser console (F12) shows frontend errors
4. **Check logs** - Terminal shows backend errors
5. **Ask the team** - Don't hesitate to ask!

---

## ✅ Success Checklist

You've successfully set up if:
- [ ] Backend starts without errors
- [ ] Frontend starts without errors
- [ ] You can see the homepage
- [ ] You can create an account
- [ ] You can browse products
- [ ] You can add items to cart
- [ ] You can complete a checkout
- [ ] No errors in browser console
- [ ] No errors in terminal

---

## 🎉 Congratulations!

You're now ready to develop with ShopHub!

Remember:
- Keep the documentation files open while developing
- Use QUICK_REFERENCE.md for quick lookups
- Check error messages carefully
- Ask questions when stuck
- Have fun building! 🚀

---

## 📞 Quick Contact

For questions about:
- **Setup issues:** Check SETUP_GUIDE.md
- **API endpoints:** Check README_COMPLETE.md
- **Common tasks:** Check QUICK_REFERENCE.md
- **Deployment:** Check DEPLOYMENT_GUIDE.md
- **Project status:** Check PROJECT_SUMMARY.md

---

**Happy Coding! Welcome to the team! 🎊**

Last Updated: January 2026
