import { useContext, useReducer } from "react";
import styles from "../../styles/shoppingCart/productItem.module.css";
import { ProductsContext } from "./ProductList";
import CartButton from "./CartButton";

export default function ProductItem({
  category,
  itemCount,
  setItemCount,
  setItems,
  items,
}) {
  const { products, loading } = useContext(ProductsContext);
  const [state, dispatch] = useReducer(reducer, 0);
  function reducer(state, action) {
    if (action.type === "increment") {
      setItems([...items, action.item]);
      setItemCount( state + action.payload);
      return state + action.payload;
    }
  }
  if (loading) {
    return (
      <h1 className={styles.loading}>
        Products List Loading... {console.log("Products List Loading...")}
      </h1>
    );
  }

  const filteredProducts =
    category !== "All"
      ? products.filter((product) => product.category === category)
      : products;

  return (
    <div>
      <div className={styles.itemContainer}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={styles.item}>
            <div className={styles.imageContainer}>
              <img
                className={styles.image}
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className={styles.titleContainer}></div>
            <h1>{product.title}</h1>
            <div className={styles.categoryContainer}>
              <h3>Category is: {product.category}</h3>
            </div>
            <div className={styles.descriptionContainer}>
              <p>{product.description}</p>
            </div>
            <div className={styles.ratingContainer}>
              <span className={styles.count}>
                👪 Rated by: {product.rating.count}
              </span>
              <span className={styles.rate}>💗Rate: {product.rating.rate}</span>
            </div>
            <div className={styles.priceContainer}>
              <h3>Price: {product.price} $</h3>
            </div>
            <div className={styles.buttonCantainer}>
              <button
                onClick={() =>
                  dispatch({ type: "increment", payload: 1, item: product })
                }
                className={styles.addToCartButton}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
