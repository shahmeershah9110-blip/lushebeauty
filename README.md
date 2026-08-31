# 🌟 LUXÉ BEAUTY - Premium Cosmetics E-Commerce Platform

A modern, full-stack e-commerce platform for premium cosmetics built with Next.js 14, TypeScript, MongoDB, and Tailwind CSS. Features a beautiful dark mode UI, comprehensive authentication, shopping cart, wishlist, and order management.

## 📋 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Modules & Components](#-modules--components)
- [Working Flow](#-working-flow)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [API Routes](#-api-routes)
- [Database Models](#-database-models)
- [Usage](#-usage)

## ✨ Features

### User Features
- 🔐 **Authentication System**: Register, Login, Logout, Password Reset
- 🛍️ **Product Browsing**: Filter by category, brand, price range
- 🔍 **Search Functionality**: Real-time product search
- 🛒 **Shopping Cart**: Add, remove, update quantities
- ❤️ **Wishlist**: Save favorite products
- 📦 **Order Management**: Place orders, view order history
- ⭐ **Product Reviews**: Rate and review products
- 🎨 **Dark Mode**: Toggle between light and dark themes
- 📱 **Responsive Design**: Mobile-first responsive UI

### Admin Features
- 📊 **Product Management**: CRUD operations for products
- 📈 **Order Tracking**: Monitor all orders
- 👥 **User Management**: View user data

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **State Management**: Zustand

### Backend
- **Runtime**: Node.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **Email Service**: Nodemailer

### Development Tools
- **Linting**: ESLint
- **Package Manager**: npm

## 📁 Project Structure

```
LUX-BEAUTY-Premium-Cosmetics/
│
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── api/                      # API Routes
│   │   │   ├── auth/                 # Authentication APIs
│   │   │   │   ├── forgot-password/  # Password recovery
│   │   │   │   ├── login/           # User login
│   │   │   │   ├── logout/          # User logout
│   │   │   │   ├── me/              # Get current user
│   │   │   │   ├── register/        # User registration
│   │   │   │   └── reset-password/  # Reset password
│   │   │   ├── orders/              # Order management
│   │   │   │   ├── route.ts         # Create/List orders
│   │   │   │   └── [id]/            # Get specific order
│   │   │   ├── products/            # Product APIs
│   │   │   │   ├── route.ts         # List/Create products
│   │   │   │   └── [id]/            # Product CRUD by ID
│   │   │   ├── reviews/             # Product reviews
│   │   │   ├── seed/                # Database seeding
│   │   │   └── wishlist/            # Wishlist management
│   │   │
│   │   ├── brands/                  # Brands page
│   │   ├── checkout/                # Checkout page
│   │   ├── login/                   # Login page
│   │   ├── product/                 # Product detail pages
│   │   │   └── [id]/                # Dynamic product page
│   │   ├── products/                # Products listing
│   │   ├── wishlist/                # Wishlist page
│   │   ├── globals.css              # Global styles
│   │   ├── layout.tsx               # Root layout
│   │   └── page.tsx                 # Home page
│   │
│   ├── components/                   # Reusable React Components
│   │   ├── BeforeAfterSlider.tsx    # Image comparison slider
│   │   ├── CartDrawer.tsx           # Shopping cart sidebar
│   │   ├── DarkModeProvider.tsx     # Dark mode context
│   │   ├── Footer.tsx               # Footer component
│   │   ├── Navbar.tsx               # Navigation bar
│   │   └── ProductCard.tsx          # Product display card
│   │
│   ├── data/                         # Static data
│   │   └── products.ts              # Sample products data
│   │
│   ├── lib/                          # Utility libraries
│   │   ├── auth.ts                  # Authentication helpers
│   │   ├── jwt.ts                   # JWT token management
│   │   ├── mongodb.ts               # MongoDB connection
│   │   ├── store.ts                 # Zustand state store
│   │   └── useAuth.tsx              # Authentication hook
│   │
│   └── models/                       # MongoDB Models
│       ├── Order.ts                 # Order schema
│       ├── Product.ts               # Product schema
│       ├── Review.ts                # Review schema
│       └── User.ts                  # User schema
│
├── .env.local                        # Environment variables
├── next.config.js                    # Next.js configuration
├── package.json                      # Dependencies
├── postcss.config.js                 # PostCSS configuration
├── tailwind.config.ts                # Tailwind CSS config
└── tsconfig.json                     # TypeScript config
```

## 🧩 Modules & Components

### 1. Authentication Module (`src/app/api/auth/`)
Handles all user authentication and authorization operations.

#### Components:
- **Register** (`register/route.ts`): Creates new user accounts
- **Login** (`login/route.ts`): Authenticates users and generates JWT
- **Logout** (`logout/route.ts`): Invalidates user sessions
- **Me** (`me/route.ts`): Retrieves current user information
- **Forgot Password** (`forgot-password/route.ts`): Initiates password reset
- **Reset Password** (`reset-password/route.ts`): Completes password reset

**Key Features:**
- JWT token-based authentication
- Password hashing with bcryptjs
- Email verification for password reset
- Secure cookie management

---

### 2. Product Module (`src/app/api/products/`)
Manages product catalog and product operations.

#### API Endpoints:
- `GET /api/products`: Fetch all products with filters
- `POST /api/products`: Create new product (Admin)
- `GET /api/products/[id]`: Get single product details
- `PUT /api/products/[id]`: Update product (Admin)
- `DELETE /api/products/[id]`: Delete product (Admin)

**Features:**
- Dynamic filtering (category, brand, price range)
- Search functionality
- Pagination support
- Image handling

---

### 3. Order Module (`src/app/api/orders/`)
Handles order creation and order history management.

#### API Endpoints:
- `POST /api/orders`: Create new order
- `GET /api/orders`: Get user's order history
- `GET /api/orders/[id]`: Get specific order details

**Order Flow:**
1. User adds items to cart
2. Proceeds to checkout
3. Fills shipping information
4. Places order
5. Order is created in database
6. Cart is cleared

---

### 4. Wishlist Module (`src/app/api/wishlist/`)
Manages user's favorite products.

#### API Endpoints:
- `GET /api/wishlist`: Get user's wishlist
- `POST /api/wishlist`: Add product to wishlist
- `DELETE /api/wishlist`: Remove from wishlist

---

### 5. Review Module (`src/app/api/reviews/`)
Handles product reviews and ratings.

#### API Endpoints:
- `POST /api/reviews`: Submit product review
- `GET /api/reviews`: Get reviews for a product

**Features:**
- Star rating system (1-5)
- Text reviews
- User attribution

---

### 6. UI Components (`src/components/`)

#### Navbar (`Navbar.tsx`)
**Features:**
- Responsive navigation menu
- Search bar with real-time search
- Cart badge with item count
- Wishlist badge
- User menu dropdown
- Dark mode toggle
- Mobile hamburger menu

#### CartDrawer (`CartDrawer.tsx`)
**Features:**
- Slide-out cart sidebar
- Display cart items
- Quantity adjustment
- Remove items
- Real-time total calculation
- Checkout button

#### ProductCard (`ProductCard.tsx`)
**Features:**
- Product image display
- Price and discount information
- Quick add to cart
- Add to wishlist
- Brand and rating display
- Hover animations

#### Footer (`Footer.tsx`)
**Features:**
- Company information
- Quick links
- Social media links
- Newsletter subscription
- Contact information

#### BeforeAfterSlider (`BeforeAfterSlider.tsx`)
**Features:**
- Interactive image comparison
- Drag to reveal effect
- Product result showcase

#### DarkModeProvider (`DarkModeProvider.tsx`)
**Features:**
- Theme context management
- Persistent dark mode preference
- Smooth theme transitions

---

### 7. State Management (`src/lib/store.ts`)
Zustand store managing global application state.

**State Managed:**
- Shopping cart items
- Wishlist items
- Cart drawer open/close state
- Dark mode preference
- Search query

**Key Functions:**
- `addToCart()`: Add product to cart
- `removeFromCart()`: Remove product from cart
- `updateQuantity()`: Update item quantity
- `addToWishlist()`: Add to wishlist
- `removeFromWishlist()`: Remove from wishlist
- `toggleDarkMode()`: Switch themes
- `setSearchQuery()`: Update search

---

### 8. Database Models (`src/models/`)

#### User Model (`User.ts`)
```typescript
{
  name: string
  email: string (unique)
  password: string (hashed)
  phone?: string
  address?: {
    street, city, pinCode, state
  }
  wishlist: string[]
  resetPasswordToken?: string
  resetPasswordExpires?: Date
  timestamps
}
```

#### Product Model (`Product.ts`)
```typescript
{
  name: string
  brand: string
  category: string
  price: number
  originalPrice: number
  discount: number
  description: string
  features: string[]
  image: string
  images: string[]
  inStock: boolean
  rating: number
  reviews: number
  tags: string[]
  shade?: string
  size?: string
  isFeatured: boolean
  isBestseller: boolean
  timestamps
}
```

#### Order Model (`Order.ts`)
```typescript
{
  userId: ObjectId (ref: User)
  items: [{
    productId, name, brand, price,
    quantity, image, shade
  }]
  totalAmount: number
  shippingAddress: {
    name, email, phone,
    street, city, pinCode, state
  }
  status: string (enum)
  paymentMethod: string
  paymentStatus: string
  timestamps
}
```

#### Review Model (`Review.ts`)
```typescript
{
  productId: ObjectId (ref: Product)
  userId: ObjectId (ref: User)
  rating: number (1-5)
  comment: string
  userName: string
  timestamps
}
```

---

### 9. Utilities & Helpers (`src/lib/`)

#### Authentication (`auth.ts`)
- User session verification
- Route protection middleware
- Permission checks

#### JWT Management (`jwt.ts`)
- Token generation
- Token verification
- Token decoding

#### MongoDB Connection (`mongodb.ts`)
- Database connection management
- Connection pooling
- Error handling

#### Auth Hook (`useAuth.tsx`)
- React hook for authentication
- User state management
- Login/Logout handlers

---

## 🔄 Working Flow

### 1. Application Initialization Flow
```
App Start
    ↓
Load Environment Variables
    ↓
Connect to MongoDB
    ↓
Initialize Zustand Store
    ↓
Check User Authentication (JWT)
    ↓
Render App Layout
    ↓
Load Home Page / Requested Route
```

### 2. User Registration Flow
```
User → Registration Form
    ↓
Input: name, email, password, phone
    ↓
Validate Input (Client-side)
    ↓
POST /api/auth/register
    ↓
Validate Input (Server-side)
    ↓
Check if Email Exists
    ↓
Hash Password (bcryptjs)
    ↓
Create User in MongoDB
    ↓
Generate JWT Token
    ↓
Set HTTP-only Cookie
    ↓
Return User Data
    ↓
Redirect to Home Page
```

### 3. User Login Flow
```
User → Login Form
    ↓
Input: email, password
    ↓
POST /api/auth/login
    ↓
Find User by Email
    ↓
Compare Password (bcryptjs)
    ↓
Generate JWT Token
    ↓
Set HTTP-only Cookie
    ↓
Return User Data
    ↓
Update Client State (Zustand)
    ↓
Redirect to Previous Page/Home
```

### 4. Product Browsing Flow
```
User → Products Page
    ↓
GET /api/products?filters
    ↓
Query MongoDB with Filters
    ↓
Return Products Array
    ↓
Render ProductCard Components
    ↓
User Can:
  ├─ Filter by Category
  ├─ Filter by Brand
  ├─ Filter by Price Range
  ├─ Search Products
  └─ Sort Results
```

### 5. Add to Cart Flow
```
User → Click "Add to Cart"
    ↓
Get Product Data
    ↓
Call store.addToCart()
    ↓
Update Zustand State
    ↓
Check if Item Exists
  ├─ Yes → Increment Quantity
  └─ No → Add New Item
    ↓
Update Cart Badge Count
    ↓
Show Success Animation
    ↓
(Optional) Open Cart Drawer
```

### 6. Wishlist Flow
```
User → Click Heart Icon
    ↓
Check Authentication
  ├─ Not Logged In → Redirect to Login
  └─ Logged In → Continue
    ↓
POST /api/wishlist
    ↓
Update User.wishlist in MongoDB
    ↓
Update Local State (Zustand)
    ↓
Toggle Heart Icon (filled/outline)
    ↓
Show Toast Notification
```

### 7. Checkout & Order Flow
```
User → View Cart
    ↓
Click "Proceed to Checkout"
    ↓
Navigate to /checkout
    ↓
Check Authentication
  ├─ Not Logged In → Redirect to Login
  └─ Logged In → Show Checkout Form
    ↓
Fill Shipping Details
  ├─ Name
  ├─ Email
  ├─ Phone
  └─ Address (street, city, pinCode, state)
    ↓
Review Order Summary
    ↓
Click "Place Order"
    ↓
Validate Form Data
    ↓
POST /api/orders
    ↓
Create Order in MongoDB
  ├─ Save order items
  ├─ Calculate total
  ├─ Set order status: "pending"
  └─ Link to user
    ↓
Clear Cart (Zustand)
    ↓
Show Success Message
    ↓
Redirect to Order Confirmation
```

### 8. Product Search Flow
```
User → Type in Search Bar
    ↓
Update searchQuery (Zustand)
    ↓
Debounce Input (300ms)
    ↓
Filter Products Client-side
  ├─ Match: name
  ├─ Match: brand
  ├─ Match: category
  └─ Match: tags
    ↓
Re-render Filtered Products
    ↓
Show "No Results" if empty
```

### 9. Dark Mode Toggle Flow
```
User → Click Dark Mode Icon
    ↓
Call toggleDarkMode() (Zustand)
    ↓
Update isDarkMode State
    ↓
Apply/Remove 'dark' class to HTML
    ↓
Tailwind Applies Dark Styles
    ↓
Save Preference to localStorage
    ↓
Animate Theme Transition
```

### 10. Product Review Flow
```
User → View Product Page
    ↓
Scroll to Reviews Section
    ↓
Check if User Purchased Product
  ├─ Yes → Show Review Form
  └─ No → Show "Purchase to Review"
    ↓
Fill Review Form
  ├─ Select Rating (1-5 stars)
  └─ Write Comment
    ↓
POST /api/reviews
    ↓
Validate Input
    ↓
Save Review to MongoDB
    ↓
Update Product Rating
    ↓
Recalculate Average Rating
    ↓
Display New Review
    ↓
Show Success Message
```

### 11. Password Reset Flow
```
User → Forgot Password Link
    ↓
Enter Email Address
    ↓
POST /api/auth/forgot-password
    ↓
Find User by Email
    ↓
Generate Reset Token (crypto)
    ↓
Save Token & Expiry in DB
    ↓
Send Email with Reset Link
    ↓
User Clicks Email Link
    ↓
Navigate to Reset Page with Token
    ↓
Enter New Password
    ↓
POST /api/auth/reset-password
    ↓
Verify Token & Expiry
    ↓
Hash New Password
    ↓
Update User.password
    ↓
Clear Reset Token
    ↓
Redirect to Login
```

### 12. Data Flow Architecture
```
User Interaction
    ↓
React Component
    ↓
Event Handler
    ↓
    ├──→ Zustand Store (Client State)
    │       ↓
    │   Update UI Immediately
    │
    └──→ API Route (Server)
            ↓
        Validate Request
            ↓
        Authenticate User (JWT)
            ↓
        MongoDB Operation
            ↓
        Business Logic
            ↓
        Return Response
            ↓
        Update Client State
            ↓
        Re-render Component
```

---

## 🚀 Installation

### Prerequisites
- Node.js 18+ and npm
- MongoDB database (local or Atlas)
- Git

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/lux-beauty.git
cd lux-beauty
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory:

```env
# MongoDB
MONGODB_URI=mongodb://localhost:27017/luxbeauty
# or use MongoDB Atlas
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/luxbeauty

# JWT Secret
JWT_SECRET=your_super_secret_jwt_key_here

# Email Configuration (for password reset)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3001
```

4. **Seed the database (optional)**
```bash
# Visit http://localhost:3001/api/seed after starting the server
```

5. **Run the development server**
```bash
npm run dev
```

6. **Open the application**
Navigate to [http://localhost:3001](http://localhost:3001)

---

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGODB_URI` | MongoDB connection string | Yes |
| `JWT_SECRET` | Secret key for JWT tokens | Yes |
| `EMAIL_HOST` | SMTP server host | No* |
| `EMAIL_PORT` | SMTP server port | No* |
| `EMAIL_USER` | Email account username | No* |
| `EMAIL_PASSWORD` | Email account password | No* |
| `NEXT_PUBLIC_APP_URL` | Application URL | Yes |

*Required for password reset functionality

---

## 🔌 API Routes

### Authentication
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | Login user | No |
| POST | `/api/auth/logout` | Logout user | Yes |
| GET | `/api/auth/me` | Get current user | Yes |
| POST | `/api/auth/forgot-password` | Request password reset | No |
| POST | `/api/auth/reset-password` | Reset password with token | No |

### Products
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/products` | Get all products | No |
| GET | `/api/products/[id]` | Get single product | No |
| POST | `/api/products` | Create product | Yes (Admin) |
| PUT | `/api/products/[id]` | Update product | Yes (Admin) |
| DELETE | `/api/products/[id]` | Delete product | Yes (Admin) |

### Orders
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/orders` | Get user orders | Yes |
| POST | `/api/orders` | Create new order | Yes |
| GET | `/api/orders/[id]` | Get order details | Yes |

### Wishlist
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/wishlist` | Get user wishlist | Yes |
| POST | `/api/wishlist` | Add to wishlist | Yes |
| DELETE | `/api/wishlist` | Remove from wishlist | Yes |

### Reviews
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/reviews` | Get product reviews | No |
| POST | `/api/reviews` | Create review | Yes |

---

## 📊 Database Models

### Collections
- **users**: User accounts and profiles
- **products**: Product catalog
- **orders**: Customer orders
- **reviews**: Product reviews

See [Database Models](#8-database-models-srcmodels) section for detailed schemas.

---

## 💻 Usage

### For Customers

1. **Browse Products**: Visit the home page or products page
2. **Search**: Use the search bar to find specific items
3. **Filter**: Apply category, brand, or price filters
4. **Add to Cart**: Click the cart icon on product cards
5. **Wishlist**: Click the heart icon to save favorites
6. **Checkout**: Review cart and place order
7. **Track Orders**: View order history in your profile

### For Developers

#### Adding New Products
```typescript
// POST /api/products
{
  "name": "Product Name",
  "brand": "Brand Name",
  "category": "lipstick",
  "price": 2499,
  "originalPrice": 3499,
  "discount": 28,
  "description": "Product description",
  "features": ["Feature 1", "Feature 2"],
  "image": "image-url",
  "inStock": true
}
```

#### Creating Custom Components
```typescript
// src/components/MyComponent.tsx
"use client";
import { useStore } from "@/lib/store";

export default function MyComponent() {
  const { cart } = useStore();
  return <div>{/* Your component */}</div>;
}
```

#### Adding New API Routes
```typescript
// src/app/api/my-route/route.ts
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";

export async function GET(req: NextRequest) {
  await dbConnect();
  // Your logic here
  return NextResponse.json({ success: true });
}
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**NITISH**

---

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting solutions
- MongoDB for the database
- Tailwind CSS for styling utilities
- Framer Motion for animations
- React Icons for icon library

---

## 📧 Support

For support, email support@luxbeauty.com or open an issue on GitHub.

---

## 🗺️ Roadmap

### Upcoming Features
- [ ] Payment gateway integration (Stripe/Razorpay)
- [ ] Advanced admin dashboard
- [ ] Product comparison feature
- [ ] Live chat support
- [ ] Email notifications for orders
- [ ] Social media authentication
- [ ] Product recommendations (AI-powered)
- [ ] Multi-language support
- [ ] Mobile app (React Native)
- [ ] Gift cards and coupons

---

## 📸 Screenshots

### Home Page
Beautiful hero section with featured products and bestsellers

### Products Page
Advanced filtering and search capabilities

### Product Detail
Comprehensive product information with reviews

### Shopping Cart
Easy-to-use cart with quantity management

### Checkout
Streamlined checkout process

### Dark Mode
Elegant dark theme throughout the application

---

**Built with ❤️ using Next.js and TypeScript**
