import styles from "../styles/footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerItem}>
        <Image src="/img/bg.png" fill />
      </div>
      <div className={styles.footerItem}>
        <div className={styles.footerCard}>
          <h2 className={styles.footerMotto}>
            IbukunOluwa restaurant always the best bro
          </h2>
        </div>
        <div className={styles.footerCard}>
          <div className={styles.footerTitle}>Find our restaurant</div>
          <p className={styles.footerText}>
            1234 don road IbukunOluwa
            <br />
            Lagos, MaryLand
            <br />
            +2348084287263
          </p>
          <p className={styles.footerText}>
            1234 don road IbukunOluwa
            <br />
            Lagos, MaryLand
            <br />
            +2348084287263
          </p>
          <p className={styles.footerText}>
            1234 don road IbukunOluwa
            <br />
            Lagos, MaryLand
            <br />
            +2348084287263
          </p>
        </div>
        <div className={styles.footerCard}>
          <div className={styles.footerTitle}>Working hours</div>
          <p className={styles.footerText}>
            SUNDAY-MONDAY
            <br />
            5:00 - 6:00
          </p>
          <p className={styles.footerText}>
            SUNDAY-MONDAY
            <br />
            5:00 - 6:00
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
