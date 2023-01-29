import styles from "./../styles/Add.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";
const Add = ({ setClose }) => {
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <span
        onClick={() => {
          setClose(false);
        }}
        className={styles.close}
      >
        X
      </span>
      <h1>Add a new Pizza</h1>
      <div className={styles.item}></div>
    </div>
  </div>;
};
export default Add;
