import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import HeaderNav from './components/HeaderNav';
import CartWidget from './components/CartWidget';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
})

function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <HeaderNav/>
        <Routes>
          <Route path="/" element={<ProductsPage/>}/>
          <Route path="/products/:id" element={<ProductDetailsPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
        </Routes>
        <CartWidget/>
      </BrowserRouter>
    </ApolloProvider>
    </>
  )
}

export default App
 