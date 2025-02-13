import { useState } from "react";
import styles from "@/styles/TradeBox.module.css";
import axios from "axios";

export default function TradeBox() {
  const [giveAmount, setGiveAmount] = useState(""); // مقدار پرداخت (تومان)

// khoroojie API moshkel dare
  const handleTrade = async () => {
    try {
      const response = await axios.get(
        `https://test.tetherland.app/api/v5/user/converter/submit?give=IRT&give_amount=${giveAmount}`
      );

      if (response.data) {
        alert(response.data.message || "معامله با موفقیت انجام شد!");
      } else {
        alert("اطلاعاتی از سرور دریافت نشد.");
      }
    } catch (error) {
      console.error("Trade Error:", error);
      alert("خطا در انجام معامله، لطفاً مجدداً تلاش کنید.");
    }
  };

  return (
    <div className={styles.tradeBox}>
      <div className={styles.tabContainer}>
      <div> تعیین قیمت </div>
        <div className={`${styles.tab} ${styles.active}`}>
          معامله سریع
        </div>
      </div>

      <div>
        
        <div className={styles.tradeInfoRow}>
          <label>پرداخت میکنم:</label>
          <div className={styles.balanceContainer}>
            <p>موجودی: IRT ۲/۵۰۰/۰۰۰</p>
            <img src="/empty-wallet.png" alt="empty-wallet" className={styles.IconTrade} />
          </div>
        </div>

        
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            value={giveAmount}
            onChange={(e) => setGiveAmount(e.target.value)} // مقدار پرداختی را مدیریت می‌کند
            type="text"
            placeholder="تومان"
          />

        <img src="/arrow-swap.png" alt="arrow-swap" className={styles.IconTradeInput} />
        </div>

        <div className={styles.inputMiddleIcon}>
          <label>: دریافت میکنم </label>
          </div>

        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            value=" USDT "
            disabled
            placeholder=" USDT "
          />
        </div>

        <button className={styles.button} onClick={handleTrade}>
          معامله
        </button>
      </div>
      <div className={styles.footertradebox}>
        <h3>معاملاتباز </h3>
        <img src="/more.png" alt="more" className={styles.Iconfootertradebox} />

      </div>
    </div>
  );
}







