import { useState } from "react";
import styles from "../styles/orderdetail.module.css";
const OrderDetail = ({ total, createOrder }) => {
  const [surName, setSurName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const handleClick = () => {
    createOrder({ customer: surName, address, total, method: 0 });
  };
  return (
    <div className={styles.orderContainer}>
      <div className={styles.orderWrapper}>
        <h1 className={styles.orderTitle}>You will pay $12 after delivery</h1>
        <div className={styles.orderItems}>
          <label className={styles.orderLabel}>Your surname:</label>
          <input
            placeholder="Ibukunoluwa"
            type="text"
            className={styles.orderInput}
            onChange={(e) => {
              setSurName(e.target.value);
            }}
          />
        </div>
        <div className={styles.orderItems}>
          <label className={styles.orderLabel}>Phone No:</label>
          <input
            placeholder="+2348084287263"
            type="text"
            className={styles.orderInput}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
        </div>
        <div className={styles.orderItems}>
          <label className={styles.orderLabel}>Address:</label>
          <input
            placeholder="Lagos Nigeria "
            type="text"
            className={styles.orderInput}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <button className={styles.orderButton} onClick={handleClick}>
          Submit
        </button>
      </div>
    </div>
  );
};
export default OrderDetail;
