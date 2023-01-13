import ProductList from "./ProductList";

import Image from "next/image";
import styles from "../styles/productCard.module.css";
import Link from "next/Link";
const ProductCard = ({ prd }) => {
  return (
    <div className={styles.productCardWrapper}>
      <Link href={`/product/${prd._id}`} passHref>
        <Image src={`${prd.img}`} width={500} height={500} />
      </Link>
      <h1 className={styles.productCardTitle}>{prd.title}</h1>
      <span className={styles.productCardPrice}>{`$${prd.price[0]}`}</span>
      <p className={styles.productCardDesc}>{prd.description}</p>
    </div>
  );
};
export default ProductCard;
