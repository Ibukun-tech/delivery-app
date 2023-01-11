import Image from "next/image";
import styles from "../styles/cart.module.css";
const Cart = () => {
  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartLeft}>
        <div className={styles.cartTable}>
          <div className={styles.cartRow}>
            <div>Products</div>
            <div>Name</div>
            <div>Extras</div>
            <div>Price</div>
            <div>Quantity </div>
            <div>Total</div>
          </div>
          <div className={styles.cartProduct}>
            <div>
              <div className={styles.cartImgContainer}>
                <Image src="/img/pizza.png" alt="" fill object-fit="cover" />
              </div>
            </div>
            <div className={styles.cartName}>
              <span>PIZZA</span>
            </div>
            <div className={styles.cartExtra}>
              <span>Tasty Ingridient sauce</span>
            </div>
            <div className={styles.cartPrice}>
              <span>$39.00</span>
            </div>
            <div className={styles.cartQuantity}>
              <span>5</span>
            </div>
            <div className={styles.total}>
              <span>$145.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cartRight}>
        <div className={styles.cartRightWrapper}>
          <h2 className={styles.cartRightTitle}>CART TOTAL</h2>

          <div className={styles.cartTotalText}>
            <b className={styles.cartTotalTextTitle}>SubTotal:</b>$89.00
          </div>

          <div className={styles.cartTotalText}>
            <b className={styles.cartTotalTextTitle}>Discount:</b>$0.00
          </div>

          <div className={styles.cartTotalText}>
            <b className={styles.cartTotalTextTitle}>Total:</b>$89.00
          </div>
          <button className={styles.cartButton}>CHECK OUT NOW</button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
