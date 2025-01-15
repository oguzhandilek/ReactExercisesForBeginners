import styles from "../../styles/shoppingCart/container.module.css";
export default function Container({ children }) {
  return(
  <div className={styles.parent}>{children}</div>);
}
