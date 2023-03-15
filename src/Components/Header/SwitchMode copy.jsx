import { RiMoonFill } from "react-icons/ri";

import styles from "./SwitchStyles.module.scss";

const SwitchMode = () => {
  return (
    <div className={styles.toggleButton}>
      <input type="checkbox" className={styles.Input} />
      <div className={styles.Icon}>
        <RiMoonFill />
      </div>
      <div className={styles.Circle}></div>
    </div>
  );
};

export default SwitchMode;
