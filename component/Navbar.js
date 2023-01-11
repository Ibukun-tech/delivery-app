import Image from "next/image";
import styles from "../styles/Navbar.module.css";
const Navbar = ({ children }) => {
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
      <div className={styles.navBarItem}>
        <div className={styles.navBarCart}>
          <Image src="/img/cart.png" width={45} height={45} />
          <div className={styles.navBarCartCounter}>1</div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
