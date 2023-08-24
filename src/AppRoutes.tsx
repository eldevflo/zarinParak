import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Articles from "./pages/Articles";
import ContactUs from "./pages/ContactUs";
import Article from "./pages/Article";

function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
