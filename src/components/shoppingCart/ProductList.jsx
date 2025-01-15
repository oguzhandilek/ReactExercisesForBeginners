import { createContext, Suspense, useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import styles from "../../styles/shoppingCart/productList.module.css";
import FilterNav from "./FilterNav";
import Container from "./Container";
import InnerContainer from "./InnerContainer";

export const ProductsContext = createContext();
export default function ProductList({ category, setCategory }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemCount, setItemCount] = useState(0);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const productList = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    };
    productList();
  }, [category]);
  return (
    <div className={styles.productListContainer}>
      <Container>
        <InnerContainer>
          <ProductsContext.Provider value={{ products, loading, setLoading }}>
            <FilterNav
              category={category}
              setCategory={setCategory}
              itemCount={itemCount}
              items={items}
            />
            <ProductItem
              category={category}
              itemCount={itemCount}
              setItemCount={setItemCount}
              items={items}
              setItems={setItems}
            />
          </ProductsContext.Provider>
        </InnerContainer>
      </Container>
    </div>
  );
}
