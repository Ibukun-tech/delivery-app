import Head from "next/head";
import axios from "axios";
import Image from "next/image";
import Add from "../component/Add";
import AddButton from "../component/AddButton";
import ProductList from "./../component/ProductList";
import styles from "../styles/Home.module.css";
import Feature from "./../component/Feature";
import { useState } from "react";
export default function Home({ product, admin }) {
  const [close, setClose] = useState(false);
  return (
    <>
      <Feature />
      {admin && <AddButton setClose={setClose} />}
      <ProductList product={product} />
      {close && <Add setClose={setClose} />}
    </>
  );
}

export async function getServerSideProps(context) {
  const ctx = context.req?.cookies || "";
  let admin = false;
  const res = await axios.get("http://localhost:3000/api/product");

  if (ctx.token === "@@@@@@@@@@@123456&&") admin = true;
  return {
    props: {
      product: res.data,
      admin,
    },
  };
}
