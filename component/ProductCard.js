import ProductList from "./ProductList";

import Image from "next/image";
import styles from "../styles/productCard.module.css";
const ProductCard = () => {
  return (
    <div className={styles.productCardWrapper}>
      <Image src="/img/pizza.png" alt="" width={200} height={200} />
      <h1 className={styles.productCardTitle}>FRIE DI PIZZA</h1>
      <span className={styles.productCardPrice}>$30.50</span>
      <p className={styles.productCardDesc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      </p>
    </div>
  );
};
export default ProductCard;
