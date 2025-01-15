import { useContext } from "react";
import { ProductsContext } from "./ProductList";
import CartButton from "./CartButton";
import { Outlet } from "react-router-dom";
import styles from "../../styles/shoppingCart/filternav.module.css"
import Container from "./Container";
export default function FilterNav({ category, setCategory, itemCount, items }) {
  const { products, loading } = useContext(ProductsContext);

  // Ürün kategorilerini al ve tekrarlananları kaldır
  const categories = products ? products.map((p) => p.category) : [];
  const uniqueCategories = Array.from(new Set(categories));
  function handleOnSubmit(e) {
    e.preventDefault();
  }
  function handleChangeCategory(e) {
    setCategory(e);
  }
  return loading ? (
    <div>Products List Loading...</div>
  ) : (
    <div>
    <form className={styles.form} onSubmit={(e) => handleOnSubmit(e)}>
      <div className={styles.container}>
        <select className={styles.category} onChange={(e) => handleChangeCategory(e.target.value)}>
          <option value="All">Category All</option>
          {uniqueCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    
   <div className={styles.buttonContainer}>
        <CartButton itemCount={itemCount} items={items} />
      </div>
    </form>     <Outlet />
    
      </div>
  );
}
