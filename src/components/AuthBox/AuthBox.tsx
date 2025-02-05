import Image from "next/image";
import "./AuthBox.css"; 

const AuthBox = () => {
  return (
    <div className="auth-box">
      <div className="auth-content">
        <Image src="/warning.png" alt="Warning" width={24} height={24} />
        <span className="auth-text">برای بهره مندی از کلیه خدمات صرافی لازم است احراز هویت خود را تکمیل کنید!</span>
      </div>
      <button className="auth-button">احراز هویت</button>
    </div>
  );
};

export default AuthBox;
