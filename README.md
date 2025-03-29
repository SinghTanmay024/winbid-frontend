# WinBid - Online Bidding Platform

WinBid is a modern web application where users can participate in product auctions by placing small bids. Admins can manage products, and winners are automatically selected when bidding completes.

## Features

### 🛠️ Core Functionality
- **User Authentication & Authorization**
  - Secure JWT-based login/logout
  - Role-based access control (Admin vs Regular User)
  - Protected routes for authenticated users

### 👨‍💻 Admin Features
- **Product Management**
  - Add new products with details (name, description, images, etc.)
  - Edit existing product information
  - Delete products
  - Set total required bids for each product
- **Dashboard** with bidding analytics

### 👤 User Features
- **Product Bidding**
  - Browse available products
  - Place bids on products
  - View bidding history
- **Winner Announcement**
  - Automatic winner selection when bid threshold is reached
  - Notification system for winners
  - Winner history log

### 🎨 UI/UX
- Responsive design with Material-UI and Tailwind CSS
- Smooth animations with Framer Motion
- Intuitive navigation with React Router

## Technologies Used

### Frontend
- React 19 (with Vite)
- Material-UI (MUI) v6 + Emotion
- Tailwind CSS
- React Router v7
- Axios for API calls
- Framer Motion for animations
- Lucide React + React Icons

### Build Tools
- Vite
- ESLint
- PostCSS + Autoprefixer

## Project Structure

