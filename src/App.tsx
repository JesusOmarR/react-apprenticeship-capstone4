import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'

import ProductList from './pages/ProductList'
import NavBar from './UI/NavBar'
import Footer from './UI/Footer/Footer'
import ProductDetails from './pages/ProductDetails'
import SearchPage from './pages/SearchPage'
import CheckOut from './pages/Checkout/CheckOut'
import ShoppingCart from './pages/shoppingCart/ShoppingCart'

import CartProvider from './providers/Cart.Provider'

function App() {
  const { data, isLoading } = useFeaturedBanners()
  console.log(data, isLoading)

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/home">
            <HomePage />
          </Route>
          <Route exact path="/products">
            <ProductList />
          </Route>
          <Route exact path="/products/:productId">
            <ProductDetails />
          </Route>
          <Route exact path="/search">
            <SearchPage />
          </Route>
          <Route exact path="/cart">
            <ShoppingCart />
          </Route>
          <Route exact path="/checkout">
            <CheckOut />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
