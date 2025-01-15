// React'ta bir butona sepet ikonu ekleyip, yanına üstlü ifade gibi duran bir sayı eklemek için aşağıdaki adımları takip edebilirsiniz. Bu örnekte, FontAwesome kütüphanesini kullanarak sepet ikonunu ekleyeceğiz ve sayıyı pozisyonlandırarak üstlü ifade gibi göstereceğiz.
// npm install --save @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/shoppingCart/cartButton.module.css";
import { useNavigate } from "react-router-dom";
export default function CartButton({ itemCount, items }) {
  const navigate = useNavigate();
  const handleClick = () => {
    <div>
   {    navigate("/shoppingCart/cartContainer", { state: { items } })}
    </div>
   

  };
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.cartButton} onClick={handleClick}>
        {" "}
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>{" "}
      </button>
      <span className={styles.badge}>{itemCount}</span>
    </div>
  );
}
