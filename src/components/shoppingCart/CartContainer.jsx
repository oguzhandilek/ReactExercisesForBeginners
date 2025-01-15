import { useLocation, useNavigate } from "react-router-dom";
import styles from "../../styles/shoppingCart/cartContainer.module.css";
import { useState, useEffect } from "react";

export default function CartContainer() {
  const location = useLocation();
  const [groupedItems, setGroupedItems] = useState([]);
  const { items } = location.state || {};
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate=useNavigate();
  const closeHandleClick=()=>{
    navigate("/shoppingCart")
  }
  useEffect(() => {
    // Aynı id'ye sahip ürünleri gruplayalım
    const grouped = items.reduce((acc, product) => {
      const existingProduct = acc.find((item) => item.id === product.id);
      if (existingProduct) {
        // Aynı id'ye sahip ürün varsa, sayıyı artır
        existingProduct.count += 1;
      } else {
        // Yeni ürünse, sayısı 1 olarak ekle
        acc.push({ ...product, count: 1 });
      }
      return acc;
    }, []);
    setGroupedItems(grouped);
  }, [items]);

  const incrementCount = (id) => {
    setGroupedItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decrementCount = (id) => {
    setGroupedItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setGroupedItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  console.log(groupedItems);
  useEffect(() => {
    const totalPrice = groupedItems.reduce(
      (acc, product) => acc + product.count * product.price,
      0
    );
    return setTotalPrice(totalPrice);
  }, [groupedItems]);

  return (
    <div>
      <div className={styles.container}>
        {groupedItems.map((p) => (
          <div key={p.id} className={styles.item}>
            <div className={styles.imageContainer}>
              <img src={p.image} alt={p.title} />
            </div>
            <div className={styles.productProperty}>
              <span className={styles.category}>Category: {p.category}</span>{" "}
              <br />
              <span className={styles.productName}>Product: {p.title}</span>
              <br />
              <span className={styles.price}>
                Price: ${Number(p.price) * Number(p.count)}
              </span>
            </div>
            <div className={styles.buttonContainer}>
              <button
                className={styles.decrement}
                onClick={() => decrementCount(p.id)}
              >
                -
              </button>
              <input
                className={styles.count}
                type="text"
                value={p.count}
                readOnly
              />
              <button
                className={styles.increment}
                onClick={() => incrementCount(p.id)}
              >
                +
              </button>
              <button
                className={styles.deleteToCart}
                onClick={() => removeItem(p.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.cartFooter}>
        <button className={styles.confirmCartButton}>Confirm Cart</button>
        <span className={styles.totalPrice}>Total Price: ${Number(totalPrice).toFixed(2)} </span>
        <button className={styles.closeCartButton}onClick={closeHandleClick}>Cart Close</button>
      </div>
    </div>
  );
}
