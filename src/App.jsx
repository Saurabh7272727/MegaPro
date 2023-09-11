import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import CartPage from './CartPage/CartPage';
import DetailsPage from './DetailsPage/DetailsPage';
import CateGoryPage from './CategoryPage/CateGoryPage';
import ProductsPage from './ProductsPage/ProductsPage';
import SearchPage from './SearchPage/SearchPage';
import NewProducts from './SecondApi/NewProducts';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/CartPage' element={<CartPage />} />
          <Route path='/detailsPage/:Page' element={<DetailsPage />} />
          <Route path='/category/:page' element={<CateGoryPage />} />
          <Route path='/productsPage' element={<ProductsPage />} />
          <Route path='/Search/:query' element={<SearchPage />} />
          <Route path='/NewProducts/details/:page' element={<NewProducts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
