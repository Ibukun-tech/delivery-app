import styles from "./../styles/Add.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";
const Add = ({ setClose }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const submitHandler = async () => {
    try {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "uploads");

      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/ddwz41gdu",
        data
      );
      console.log(uploadRes);
      const { url } = uploadRes.data;
      const product = { title, price, description, img: url };
      await axios.post("http://localhost:3000/api/product", product);
      setClose(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
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
        <div className={styles.item}>
          <label className={styles.label}>Choose File</label>
          <input
            className={styles.input}
            type="file"
            onClick={(e) => {
              setFile(e.target.files[0]);
            }}
          />
        </div>

        <div className={styles.item}>
          <label className={styles.label}>Title</label>
          <input
            className={styles.input}
            type="text"
            onClick={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        <div className={styles.item}>
          <label className={styles.label}>Description</label>
          <textarea
            className={styles.input}
            type="text"
            onClick={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>

        <div className={styles.item}>
          <label className={styles.label}>Price</label>
          <input
            type="number"
            className={styles.input}
            onClick={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <button onClick={submitHandler}>Create Product</button>
      </div>
    </div>
  );
};
export default Add;
