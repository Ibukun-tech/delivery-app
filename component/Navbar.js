import Image from "next/image";
import Link from "next/Link";
import { useSelector } from "react-redux";
// import { quantity } from "../redux/cartSlice";
import styles from "../styles/Navbar.module.css";
// import { formToJSON } from "axios";
const Navbar = ({ children }) => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.navBarItem}>
        <div className={styles.navBarCallButton}>
          <Image src="/img/telephone.png" width={32} height={32} alt="" />
        </div>
        <div className={styles.navBarTexts}>
          <div className={styles.navBarText}>Order now!!!!</div>
          <div className={styles.navBarText}>08084287263</div>
        </div>
      </div>
      <div className={styles.navBarItem}>
        <ul className={styles.navBarList}>
          <li className={styles.navBarListItem}>Homepage</li>
          <li className={styles.navBarListItem}>menu</li>
          <li className={styles.navBarListItem}>Products</li>
          <li className={styles.navBarListItem}>Blog</li>
          <li className={styles.navBarListItem}>Contact</li>
        </ul>
      </div>
      <Link href="/cart" passhref>
        <div className={styles.navBarItem}>
          <div className={styles.navBarCart}>
            <Image
              src="/img/cart.png"
              width={45}
              style={{ display: "pointer" }}
              height={45}
            />
            <div className={styles.navBarCartCounter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Navbar;
