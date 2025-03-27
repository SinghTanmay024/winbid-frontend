import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import HowItWorks from "./components/HowItWorks";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import PaymentPage from "./components/PaymentPage";
import Contact from "./components/Contact";
import ApiTest from "./components/ApiTest";
import AddProductForm from "./components/AddProductForm";
import Profile from "./components/Profile";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <>
      <Router> 
        <div className="app-container">
          <Header />
          <main className="main-content">
            <Routes style={{minhight:"100px"}}>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/ApiTest" element={<ApiTest />} />
              <Route path="/products" element={<Products />} />
              <Route path="/addProduct" element={<AddProductForm />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/products/:id" element={<ProductDetails />} />
            </Routes>
          </main>
          <div style={{ position: "relative", bottom: 0, width: "100%" }}>
            <Footer />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
