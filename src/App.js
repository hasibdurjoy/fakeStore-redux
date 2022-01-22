import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Shared/Header/Header';
import Products from './Components/Home/Products/Products';
import ProductDetails from './Components/Home/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          {/* <Route path='/' element={<Products />} /> */}
          <Route path='/products' element={<Products />} />
          <Route path='/products/:productId' element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
