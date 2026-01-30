# Deployment Checklist & Production Guide

## Pre-Deployment Checklist

### Code Quality
- [ ] All console.log statements for debugging removed
- [ ] No hardcoded secrets or API keys in code
- [ ] Error handling implemented throughout
- [ ] Input validation on all endpoints
- [ ] No exposed sensitive information in error messages

### Testing
- [ ] User registration works
- [ ] User login works
- [ ] Product listing displays correctly
- [ ] Adding items to cart works
- [ ] Checkout process completes
- [ ] Orders are saved to database
- [ ] Admin operations work (create/update/delete products)
- [ ] Responsive design verified on mobile
- [ ] All links work correctly
- [ ] No broken images or missing assets

### Database
- [ ] MongoDB is configured and running
- [ ] All collections are properly indexed
- [ ] Database backups are set up
- [ ] Connection string is secure
- [ ] Test data is populated in database

### Security
- [ ] JWT_SECRET is strong and secure
- [ ] CORS is properly configured
- [ ] No SQL injection vulnerabilities
- [ ] XSS protection implemented
- [ ] HTTPS will be enabled in production
- [ ] Passwords are properly hashed
- [ ] Environment variables are not committed

### Performance
- [ ] Assets are minified and optimized
- [ ] Images are compressed
- [ ] Database queries are optimized
- [ ] No memory leaks in code
- [ ] Load times are acceptable

## Deployment Steps

### Step 1: Prepare Backend for Production

#### Update Backend .env
```
NODE_ENV=production
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce?retryWrites=true&w=majority
JWT_SECRET=generate_a_long_random_string_here_at_least_32_characters
```

#### Update package.json if needed
```json
{
  "engines": {
    "node": "18.0.0",
    "npm": "9.0.0"
  }
}
```

#### Create Procfile for Heroku
```
web: node server.js
```

### Step 2: Deploy Backend to Heroku

1. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   ```

2. **Login to Heroku**
   ```bash
   heroku login
   ```

3. **Create Heroku App**
   ```bash
   cd backend
   heroku create your-app-name
   ```

4. **Set Environment Variables**
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set MONGO_URI="your_mongodb_atlas_uri"
   heroku config:set JWT_SECRET="your_strong_secret_key"
   ```

5. **Deploy**
   ```bash
   git add .
   git commit -m "Deploy to production"
   git push heroku main
   ```

6. **Verify Deployment**
   ```bash
   heroku logs --tail
   heroku open
   ```

### Step 3: Update Frontend Configuration

Edit `src/services/api.js`:
```javascript
const API_BASE_URL = 'https://your-heroku-app.herokuapp.com/api';
```

### Step 4: Build Frontend

```bash
cd e-commerce
npm run build
```

Expected output:
```
✓ 1234 modules transformed
dist/index.html                   0.50 kB
dist/assets/index-xxxxx.js    234.67 kB
```

### Step 5: Deploy Frontend to Vercel

#### Option A: Command Line
```bash
npm install -g vercel
vercel
```

#### Option B: GitHub Integration
1. Push code to GitHub
2. Go to https://vercel.com/new
3. Import your GitHub repository
4. Vercel will auto-deploy on push

### Step 6: Configure Production Domain

1. **If using custom domain:**
   - Go to your domain registrar
   - Add CNAME record pointing to Vercel
   - Update API endpoint if domain changed

2. **Enable HTTPS:**
   - Vercel/Heroku automatically provides HTTPS
   - Redirect HTTP to HTTPS in production

### Step 7: Verify Production Deployment

1. **Test Frontend**
   - Visit your deployed URL
   - Test user registration
   - Test login
   - Test product browsing
   - Test cart and checkout

2. **Test Backend**
   - Check API endpoints
   - Verify database connection
   - Check logs for errors
   - Monitor performance

3. **Test Full Flow**
   - Create account
   - Browse products
   - Add to cart
   - Checkout
   - Verify order in database

## Post-Deployment

### Monitoring

#### Set up Error Tracking
```bash
# Add to backend
npm install sentry
```

#### Monitor Performance
- Use Heroku dashboard
- Use Vercel analytics
- Monitor API response times
- Check database query times

### Logging

#### Backend Logs
```bash
# View Heroku logs
heroku logs --tail --app your-app-name
```

#### Database Logs
- MongoDB Atlas provides query logs
- Monitor slow queries
- Set up alerts for errors

### Maintenance

#### Regular Tasks
- [ ] Check and update dependencies monthly
- [ ] Review security advisories
- [ ] Backup database weekly
- [ ] Monitor error rates
- [ ] Check performance metrics
- [ ] Update content/products

#### Monthly Checklist
- [ ] Review user feedback
- [ ] Check server status
- [ ] Verify all features work
- [ ] Update documentation
- [ ] Review analytics

## Scaling Considerations

### When Traffic Increases

1. **Database**
   - Upgrade MongoDB Atlas tier
   - Add indexes to slow queries
   - Implement caching

2. **Backend**
   - Use Node clustering
   - Add more dynos on Heroku
   - Implement rate limiting
   - Use CDN for static assets

3. **Frontend**
   - Use image CDN
   - Implement lazy loading
   - Code splitting optimization
   - Browser caching

### Optimization Strategies

1. **Image Optimization**
   - Use WebP format
   - Compress images
   - Use CDN (Cloudinary, Imgix)

2. **Code Optimization**
   - Tree shaking
   - Minification
   - Code splitting
   - Service workers

3. **Database Optimization**
   - Add indexes
   - Query optimization
   - Connection pooling
   - Caching strategies

## Security in Production

### Additional Security Measures

1. **Enable HTTPS**
   - All traffic should be encrypted
   - Enforce SSL/TLS
   - Use secure cookies

2. **API Security**
   - Implement rate limiting
   - Add request validation
   - Use API keys if needed
   - Monitor suspicious activity

3. **Database Security**
   - Use strong passwords
   - Enable encryption at rest
   - Regular backups
   - Access controls

4. **Code Security**
   - Regular security updates
   - Dependency scanning
   - Code reviews
   - Penetration testing

### Environment Variables

NEVER commit these:
```
.env
.env.local
.env.*.local
.env.production
```

Use platform-specific environment variable management:
- **Heroku:** heroku config:set
- **Vercel:** Project settings → Environment Variables
- **GitHub Secrets:** For CI/CD

## Disaster Recovery

### Backup Strategy

1. **Database Backups**
   ```bash
   # MongoDB Atlas automatic backups (included in paid plans)
   # For self-hosted: Enable oplog backups
   ```

2. **Application Backups**
   ```bash
   # Code: Push to GitHub
   # Assets: Use CDN with backup
   ```

3. **Recovery Testing**
   - Test backup restoration
   - Document recovery procedures
   - Keep recovery time objectives (RTO)

### Rollback Procedures

```bash
# Rollback Heroku deployment
heroku rollback v2

# Rollback Vercel deployment
# Use Vercel dashboard → Deployments → Rollback

# Manual rollback
# Push previous stable commit
git revert <commit-hash>
git push
```

## Performance Monitoring

### Key Metrics to Track

1. **Frontend**
   - Page load time
   - Time to interactive
   - Largest contentful paint
   - Cumulative layout shift

2. **Backend**
   - API response time
   - Server uptime
   - Error rate
   - Database query time

3. **Database**
   - Query performance
   - Connection count
   - Storage usage
   - Replication lag

### Tools for Monitoring

- **Heroku:** Built-in dashboard
- **Vercel:** Analytics dashboard
- **MongoDB Atlas:** Built-in monitoring
- **Third-party:** New Relic, DataDog, Sentry

## Troubleshooting Production Issues

### Issue: Database Connection Failed
```
Solution:
1. Check MongoDB Atlas whitelist
2. Verify MONGO_URI in environment variables
3. Check network connectivity
4. Review database logs
```

### Issue: Slow API Responses
```
Solution:
1. Check database query performance
2. Add indexes to frequently queried fields
3. Implement caching
4. Scale database tier if needed
```

### Issue: Memory Leak
```
Solution:
1. Review Node.js memory usage
2. Check for circular references
3. Profile application with debugging tools
4. Restart application container
```

### Issue: High Error Rate
```
Solution:
1. Check error logs
2. Review recent code changes
3. Check external service status
4. Rollback if necessary
```

## Contact & Support

For production issues:
- Check logs first
- Review recent deployments
- Test locally to reproduce
- Contact hosting provider if infrastructure issue
- Contact team for code issues

## Production Deployment URLs

Update these after deployment:

**Backend API:**
```
Production: https://your-heroku-app.herokuapp.com
Fallback: http://localhost:5000 (for development)
```

**Frontend:**
```
Production: https://your-vercel-app.vercel.app
Fallback: http://localhost:5173 (for development)
```

**Database:**
```
MongoDB Atlas: https://cloud.mongodb.com/v2/
Environment: your_mongodb_atlas_connection_string
```

---

**Last Reviewed:** January 2026
**Status:** Ready for Production Deployment
**Next Review:** After first month in production
