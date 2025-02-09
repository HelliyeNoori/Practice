import Image from 'next/image';
import styles from '../styles/Sidebox.module.css';

const Sidebox = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles["sideimagetop"]}>
        <Image src="/_Nav item base.png" alt="Nav Item Base" width={48} height={46} />
      </div>
      

      <div className={styles["sideimageup"]}>
        <Image src="/FrameSidebar.png" alt="Frame 1261154222" width={40}   height={500}  />
      </div>
    </div>
  );
}

export default Sidebox;


