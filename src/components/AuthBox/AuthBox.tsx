import Image from "next/image";
import styles from "@/styles/AuthBox.module.css";

const AuthBox = () => {
  return (
    <div className={styles["auth-box"]}>
      <div className={styles["auth-content"]}>
        <Image src="/warning.png" alt="Warning" width={24} height={24} />
        <span className={styles["auth-text"]}>برای بهره مندی از کلیه خدمات صرافی لازم است احراز هویت خود را تکمیل کنید!</span>
      </div>
      <button className={styles["auth-button"]}>احراز هویت</button>
    </div>
  );
};

export default AuthBox;
