import OrderDetail from "../component/OrderDetail";
import Image from "next/image";
import Head from "next/head";
import { reset, on } from "../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/cart.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
const Cart = () => {
  const [open, setOpen] = useState(false);

  // const [cash, setCash] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const createOrder = async (data) => {
    const res = await axios.post("http://localhost/3000/api/order", data);
    console.log(res);
    res.status === 201 && router.push(`/orders/${res.data._id}`);
    dispatch(reset());
  };
  const { products, total, cash } = useSelector((state) => state.cart);
  console.log(cash);
  const amount = total;
  const currency = "USD";
  const style = { layout: "vertical" };

  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner, dispatch, options]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              const shippingDetails = details.purchase_units[0].shipping;
              // Your code here after capture the order
              createOrder({
                customer: shippingDetails.name.full_name,
                address: shippingDetails.address.address_line_1,
                Total: total,
                method: 1,
              });
            });
          }}
        />
      </>
    );
  };
  return (
    <>
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
            {products.map((prd, i) => (
              <div className={styles.cartProduct} key={i}>
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
                  <span>{prd.description}</span>
                </div>
                <div className={styles.cartPrice}>
                  <span>{prd.price}</span>
                </div>
                <div className={styles.cartQuantity}>
                  <span>{prd.quantity}</span>
                </div>
                <div className={styles.total}>
                  <span>${prd.price * prd.quantity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.cartRight}>
          <div className={styles.cartRightWrapper}>
            <h2 className={styles.cartRightTitle}>CART TOTAL</h2>

            <div className={styles.cartTotalText}>
              <b className={styles.cartTotalTextTitle}>SubTotal:</b>${total}
            </div>

            <div className={styles.cartTotalText}>
              <b className={styles.cartTotalTextTitle}>Discount:</b>$0.00
            </div>

            <div className={styles.cartTotalText}>
              <b className={styles.cartTotalTextTitle}>Total:</b>${total}
            </div>
            {open ? (
              <div className={styles.cartPaypal}>
                <button
                  className={styles.cartPaybutton}
                  onClick={() => {
                    dispatch(on());
                  }}
                >
                  CASH ON DELIVERY
                </button>
                <PayPalScriptProvider
                  options={{
                    "client-id":
                      "ASb_smLyb4RFm2X8wsIzoaG_LOP4M_dRYfReo_EdwVjj0cUEUNZ2HyhUJgRVCAi2EQ2iOcWyNKi3149j",
                    components: "buttons",
                    currency: "USD",
                    "disable-funding": "credit,card,p24",
                  }}
                >
                  <ButtonWrapper currency={currency} showSpinner={false} />
                </PayPalScriptProvider>
              </div>
            ) : (
              <button
                onClick={() => {
                  setOpen(true);
                }}
                className={styles.cartButton}
              >
                CHECK OUT NOW
              </button>
            )}
          </div>
        </div>
        {cash && <OrderDetail total={total} createOrder={createOrder} />}
      </div>
    </>
  );
};
export default Cart;
