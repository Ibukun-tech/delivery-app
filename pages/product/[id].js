import styles from "../../styles/product.module.css";
import { addProduct } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
const Product = ({ product }) => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <div className={styles.productContainer}>
        <div className={styles.productLeft}>
          <div className={styles.productImgContainer}>
            <Image layout="fill" src={product.img} objectFit="contain" />
          </div>
        </div>
        <div className={styles.productRight}>
          <h1 className={styles.productTitle}>{product.title}</h1>
          <span className={styles.productPrice}>${product.price[price]}</span>
          <p className={styles.productDesc}>{product.description}</p>
          <h3 className={styles.productChoose}>
            Choose additional ingredients
          </h3>
          <div className={styles.productSizes}>
            <div
              className={styles.productSize}
              onClick={() => {
                setPrice(0);
              }}
            >
              <Image src="/img/size.png" alt="" layout="fill" />
              <span className={styles.productNumber}>small</span>
            </div>

            <div
              onClick={() => {
                setPrice(1);
              }}
              className={styles.productSize}
            >
              <Image src="/img/size.png" alt="" layout="fill" />
              <span className={styles.productNumber}>medium</span>
            </div>

            <div
              onClick={() => {
                setPrice(2);
              }}
              className={styles.productSize}
            >
              <Image src="/img/size.png" alt="" layout="fill" />
              <span className={styles.productNumber}>large</span>
            </div>
          </div>
          <div className={styles.productAdd}>
            <input
              type="number"
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
              className={styles.productQuantity}
              defaultValue={1}
              min={1}
            />
            <button
              className={styles.productOrder}
              onClick={() => {
                dispatch(
                  addProduct({
                    ...product,
                    quantity,
                    price: product.price[price],
                  })
                );
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const res = await axios.get(`http://localhost:3000/api/product/${params.id}`);
  console.log(res.data);
  return {
    props: {
      product: res.data.products,
    },
  };
}
export default Product;
