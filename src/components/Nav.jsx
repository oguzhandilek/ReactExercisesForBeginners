import { Link } from "react-router-dom";
import styles from "../styles/nav.module.css";
export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <Link to="/">🏠</Link>
        </li>
        <li>
          <Link to="/todoApp">📝</Link>
        </li>
        <li>
            <Link to="/shoppingCart">🛒</Link>
        </li>
        <li>
          <Link to="/weatherApp">🌡</Link>
        </li>
      </ul>
    </nav>
  );
}
