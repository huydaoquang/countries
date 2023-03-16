import { useContext } from "react";
import clsx from "clsx";

import styles from "./CountryInfo.module.scss";
import { ThemeContext } from "../../ThemeContext/themeContext";
import { useSelector } from "react-redux";

const getLanguages = (country) => {
  let result = "";
  country.languages.forEach((language) => {
    if (result !== "") result = result + "-" + language.name;
    else result += language.name;
  });
  return result;
};

const CountryInfo = (props) => {
  const themContext = useContext(ThemeContext);
  const country = useSelector((state) => state.Countries.country);

  return (
    <div className={styles.countryInfo}>
      {country && (
        <>
          <h3 className={styles.countryName}>{country.name}</h3>
          <table>
            <tbody>
              <tr>
                <td className={styles.countryInfo__title}>Native Name</td>
                <td>:</td>
                <td className={styles.countryInfo__value}>
                  {country.nativeName}
                </td>
              </tr>
              <tr>
                <td className={styles.countryInfo__title}>Official</td>
                <td>:</td>
                <td className={styles.countryInfo__value}>
                  {country.altSpellings}
                </td>
              </tr>
              <tr>
                <td className={styles.countryInfo__title}>Population</td>
                <td>:</td>
                <td className={styles.countryInfo__value}>
                  {new Intl.NumberFormat().format(country.population)}
                </td>
              </tr>
              <tr>
                <td className={styles.countryInfo__title}>Region</td>
                <td>:</td>
                <td className={styles.countryInfo__value}>{country.region}</td>
              </tr>
              <tr>
                <td className={styles.countryInfo__title}>Sub Region</td>
                <td>:</td>
                <td className={styles.countryInfo__value}>
                  {country.subregion}
                </td>
              </tr>
              <tr>
                <td className={styles.countryInfo__title}>Capital</td>
                <td>:</td>
                <td className={styles.countryInfo__value}>{country.capital}</td>
              </tr>
              <tr>
                <td className={styles.countryInfo__title}>Top Level Domain</td>
                <td>:</td>
                <td className={styles.countryInfo__value}>
                  {country.topLevelDomain}
                </td>
              </tr>
              <tr>
                <td className={styles.countryInfo__title}>Currencies</td>
                <td>:</td>
                <td className={styles.countryInfo__value}>
                  {`${country.currencies[0].code} - ${country.currencies[0].name}`}
                </td>
              </tr>
              <tr>
                <td className={styles.countryInfo__title}>Languages</td>
                <td>:</td>
                <td className={styles.countryInfo__value}>
                  {getLanguages(country)}
                </td>
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
        </>
      )}
    </div>
  );
};

export default CountryInfo;
