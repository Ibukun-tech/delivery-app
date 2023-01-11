import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Feature.module.css";

const Feature = () => {
  let [slide, setSlider] = useState(0);
  const img = ["/img/feature1.png", "", ""];
  const increaseSlider = () => {
    slide++;
    if (slide === img.length) {
      slide = 0;
    }
    setSlider(slide);
  };
  const decreaseSlider = () => {
    setSlider(slide !== 0 ? slide-- : 2);
  };
  console.log(slide);
  return (
    <div className={styles.featureContainer}>
      <div className={styles.featureArrowContainer}>
        <Image
          object-fit="contain"
          src="/img/arrowl.png"
          onClick={decreaseSlider}
          style={{ left: 0 }}
          fill
          alt=""
        />
      </div>
      <div className={styles.featureImage}>
        {img.forEach((img, i) => {
          <div
            className={styles.featureImgContainer}
            style={{ transform: `translateX(${-100 * slide}vw)` }}
            key={i}
          >
            <Image src={img} fill object-fit="contain" alt="" />;
          </div>;
        })}
      </div>
      <div
        className={styles.featureArrowContainer}
        object-fit="contain"
        style={{ right: 0 }}
      >
        <Image src="/img/arrowr.png" onClick={increaseSlider} fill alt="" />
      </div>
    </div>
  );
};
export default Feature;
