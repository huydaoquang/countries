import { useContext } from "react";
import clsx from "clsx";

import styles from "./CountryInfo.module.scss";
import { ThemeContext } from "../../ThemeContext/themeContext";

const CountryInfo = (props) => {
  const themContext = useContext(ThemeContext);

  return (
    <div className={styles.countryInfo}>
      <h3 className={styles.countryName}>Bhutan</h3>
      <table>
        <tbody>
          <tr>
            <td className={styles.countryInfo__title}>Native Name</td>
            <td>:</td>
            <td className={styles.countryInfo__value}>brug-yul</td>
          </tr>
          <tr>
            <td className={styles.countryInfo__title}>Official</td>
            <td>:</td>
            <td className={styles.countryInfo__value}>brug-yul</td>
          </tr>
          <tr>
            <td className={styles.countryInfo__title}>Population</td>
            <td>:</td>
            <td className={styles.countryInfo__value}>brug-yul</td>
          </tr>
          <tr>
            <td className={styles.countryInfo__title}>Region</td>
            <td>:</td>
            <td className={styles.countryInfo__value}>brug-yul</td>
          </tr>
          <tr>
            <td className={styles.countryInfo__title}>Sub Region</td>
            <td>:</td>
            <td className={styles.countryInfo__value}>brug-yul</td>
          </tr>
          <tr>
            <td className={styles.countryInfo__title}>Capital</td>
            <td>:</td>
            <td className={styles.countryInfo__value}>brug-yul</td>
          </tr>
          <tr>
            <td className={styles.countryInfo__title}>Currencies</td>
            <td>:</td>
            <td className={styles.countryInfo__value}>brug-yul</td>
          </tr>
          <tr>
            <td className={styles.countryInfo__title}>Languages</td>
            <td>:</td>
            <td className={styles.countryInfo__value}>brug-yul</td>
          </tr>
          <tr>
            <td className={styles.countryInfo__title}>Border Countries</td>
            <td>:</td>
            <td className={styles.borderList}>
              <span className={clsx(styles.borderItem, themContext.theme)}>
                China
              </span>
              <span className={clsx(styles.borderItem, themContext.theme)}>
                India
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryInfo;
