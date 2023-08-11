import { useEffect, useState } from "react";
import { request } from "../../utils/request";
import { Product } from "../../types/Product";
import ProductCard from "../ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  async function getProducts() {
    const response = await request.get("/Product");
    const firstThreeProducts = response.data.slice(-3);
    setProducts(firstThreeProducts);
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="home__products">
      <div className="home__products__title">
        <h1>محصولات</h1>
      </div>
      <div className="home__products__list">
        {products.map((product: Product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Products;
