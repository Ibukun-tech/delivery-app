import { The_Girl_Next_Door } from "@next/font/google";
import styles from "../../styles/product.module.css";
import Image from "next/image";
import { useState } from "react";
const Product = () => {
  const [price, setPrice] = useState(0);
  return (
    <div className={styles.productContainer}>
      <div className={styles.productLeft}>
        <div className={styles.productImgContainer}>
          <Image fill src="/img/pizza.png" object-fit="contain" />
        </div>
      </div>
      <div className={styles.productRight}>
        <h1 className={styles.productTitle}>PIZZATITLE</h1>
        <span className={styles.productPrice}>price</span>
        <p className={styles.productDesc}>Loukuqwd wd sqiwdqwdgugduwgdg v</p>
        <h3 className={styles.productChoose}>Choose </h3>
        <div className={styles.productSizes}>
          <div className={styles.productSize}>
            <Image src="/img/size.png" alt="" fill />
            <span className={styles.productNumber}>small</span>
          </div>

          <div className={styles.productSize}>
            <Image src="/img/size.png" alt="" fill />
            <span className={styles.productNumber}>medium</span>
          </div>

          <div className={styles.productSize}>
            <Image src="/img/size.png" alt="" fill />
            <span className={styles.productNumber}>large</span>
          </div>
        </div>
        <div className={styles.productAdd}>
          <input
            type="number"
            defaultValue={1}
            className={styles.productQuantity}
          />
          <button className={styles.productOrder}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
export default Product;
