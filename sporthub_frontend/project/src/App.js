import './App.css';
import HomePage from './component/HomePage';
import HeaderPage from './component/HeaderPage';
import FooterPage from './component/FooterPage';
import ProductPage from './component/ProductPage';
import { Routes , Route } from 'react-router-dom';
import Feedback from './component/Feedback';
import Profile from './component/Profile';
import Orders from './component/Orders';
import Cart from './component/Cart';
import Wishlist from './component/Wishlist';
import AboutUs from './component/AboutUs';
import ContactUs from './component/ContactUs';
import App1 from "./componentsjsvdchvsduh/App1"

function App() {
  return (
    <div>
      <HeaderPage/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/product" element={<ProductPage/>}/>
          <Route path="/feedback" element={<Feedback/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
        </Routes>
      <FooterPage/>
       
    </div>
  );
}

export default App;
