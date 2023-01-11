import styles from "../../styles/order.module.css";
import Image from "next/image";

const Order = () => {
  const status = 0;
  const statusHandler = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.unDone;
  };
  return (
    <div className={styles.orderContainer}>
      <div className={styles.left}>
        <div className={styles.orderTable}>
          <div className={styles.cartRow}>
            <div>Order Id</div>
            <div>Customer</div>
            <div>Address</div>
            <div>Total</div>
          </div>
          <div className={styles.cartProduct}>
            <div className={styles.orderId}>
              <span>12345678</span>
            </div>
            <div className={styles.orderName}>
              <span>Don David</span>
            </div>
            <div className={styles.orderAddress}>
              <span>Sagamu Ogun state</span>
            </div>
            <div className={styles.total}>
              <span>$145.00</span>
            </div>
          </div>
          <div className={styles.cartRow}>
            <div className={statusHandler(0)}>
              <Image src="/img/paid.png" height={30} width={30} alt="" />
              <span>Payment</span>
              <div>
                <Image src="/img/checked.png" width={30} height={30} alt="" />
              </div>
            </div>
            <div className={statusHandler(1)}>
              <Image src="/img/bake.png" height={30} width={30} alt="" />
              <span>Preparing</span>
              <div className={styles.checkedIcon}>
                <Image src="/img/checked.png" width={30} height={30} alt="" />
              </div>
            </div>
            <div className={statusHandler(2)}>
              <Image src="/img/bike.png" height={30} width={30} alt="" />
              <span>On the way</span>
              <div className={styles.checkedIcon}>
                <Image src="/img/checked.png" width={30} height={30} alt="" />
              </div>
            </div>
            <div className={statusHandler(3)}>
              <Image src="/img/delivered.png" height={30} width={30} alt="" />
              <span>Delivered</span>
              <div className={styles.checkedIcon}>
                <Image src="/img/checked.png" width={30} height={30} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
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
export default Order;
