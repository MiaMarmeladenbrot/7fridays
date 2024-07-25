import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import HeaderNav from "./components/HeaderNav";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { CartProvider } from "./contexts/CartContext";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <CartProvider>
          <BrowserRouter>
            <HeaderNav />
            <Routes>
              <Route path="/" element={<ProductsPage />} />
              <Route path="/products/:id" element={<ProductDetailsPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
