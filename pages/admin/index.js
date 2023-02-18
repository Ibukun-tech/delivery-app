import styles from "../../styles/admin.module.css";
import axios from "axios";
import Image from "next/image";
// import { Head } from "next/document";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { off } from "../../redux/cartSlice";
import { useState } from "react";
const Admin = ({ product, order }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  // const { cash } = useSelector((state) => state.cart);
  const [products, setProducts] = useState(product);
  const [orders, setOrders] = useState(order);
  const status = ["preparing", "on the way ", "delivered"];
  const handleClick = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/product/${id}`);
      setProducts(products.filter((prd) => prd._id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  const handleStatus = async (id) => {
    const item = orders.filter((ord) => ord._id === id)[0];
    const currentStatus = item.status;
    try {
      const res = await axios.put(`http://localhost:3000/api/order/${id}`, {
        status: currentStatus + 1,
      });
      setOrders([res.data, ...orders.filter((ord) => ord._id !== id)]);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className={styles.adminContainer}>
        <div className={styles.adminItem}>
          <h1 className={styles.adminTitle}> Product</h1>
          <div className={styles.adminTable}>
            <div className={styles.adminRow}>
              <div>Products</div>
              <div>Name</div>
              <div>Id</div>
              <div>Price</div>
            </div>
            {products.map((prd, i) => (
              <div className={styles.adminProduct} key={i}>
                <div>
                  <div className={styles.cartImgContainer}>
                    <Image
                      src={prd.img}
                      alt=""
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className={styles.cartName}>
                  <span>{prd.title}</span>
                </div>
                <div className={styles.cartExtra}>
                  <span>{prd._id.slice(0, 5)}...</span>
                </div>
                <div className={styles.cartPrice}>
                  <span>{prd.price}</span>
                </div>
                <div className={styles.adminButtons}>
                  <button className={styles.adminButton}>edit</button>
                  <button
                    className={styles.adminButton}
                    onClick={() => {
                      handleClick(prd._id);
                    }}
                  >
                    delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.adminItem}>
          <h1 className={styles.adminTitle}>Orders</h1>
          <div className={styles.adminTable}>
            <div className={styles.adminRow}>
              <div>Id</div>
              <div>Customer</div>
              <div>Total</div>
              <div>Payment</div>
              <div>Status </div>
              <div>Action</div>
            </div>
            {orders.map((prd, i) => (
              <div className={styles.adminProduct} key={i}>
                <div className={styles.cartName}>
                  <span>{prd._id.slice(0, 5)}...</span>
                </div>
                <div className={styles.cartExtra}>
                  <span>{prd.customer}</span>
                </div>
                <div className={styles.cartPrice}>
                  <span>${prd.total}</span>
                </div>
                <div className={styles.cartQuantity}>
                  {prd.method === 0 ? <span>cash</span> : <span>paid</span>}
                </div>
                <div className={styles.total}>
                  <span>{status[prd.status]}</span>
                </div>
                <div className={styles.adminButtons}>
                  <button
                    className={styles.adminButton}
                    onClick={() => {
                      handleStatus(prd._id);
                    }}
                  >
                    Next stage
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export const getServerSideProps = async function (ctx) {
  const cookie = ctx.req?.cookies || "";
  // let admin=false
  if (cookie !== "@@@@@@@@@@@123456&&") {
    return { redirect: { destination: "/admin/login", permanent: false } };
  }
  const productRes = await axios.get("http://localhost:3000/api/product");
  const orderRes = await axios.get("http://localhost:3000/api/order");
  return {
    props: {
      order: orderRes.data.orders,
      product: productRes.data.products,
    },
  };
};
export default Admin;
