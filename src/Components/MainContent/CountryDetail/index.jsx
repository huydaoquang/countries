import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { ThemeContext } from "../../ThemeContext/themeContext";
import CountryInfo from "./CountryInfo";
import { getCountryByName } from "../../Store/Actions/countriesActions";

const CountryDetail = (props) => {
  const themContext = useContext(ThemeContext);
  const slug = useParams();
  const navgate = useNavigate();
  const dispatch = useDispatch();
  console.log(slug.countryName);

  useEffect(() => {
    dispatch(getCountryByName(slug.countryName));
  }, [slug.countryName]);

  return (
    <Wrapper>
      <div
        onClick={() => navgate(-1)}
        className={`goBack-btn ${themContext.theme}`}
      >
        Go back
      </div>
      <CountryContainer>
        <div className="flagCountry">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAgVBMVEXaJR3//wDZEx7qlhTXAB7ZHR3ZGx3zxg7YCx7rmxT++wHqmBT99gT88Ab43Qr32Av21Az0yw3ywQ/iZRnwuBDurhLtqBLjcBjfUxr65wj76wfsoxPcPBzbLRz54QnpkBXnhRbmfxfleRfjbBjhXRreTRvzxA/wthHdRBvgWRrniRZlYMFKAAAEEElEQVR4nO3d63aiMBQFYBNPEG/Veqla71Zbp+//gIMiSCAIKF3Kyf7+dmYWnMmOMZyUWg0AAAAAAAAAAAAAAAAAAAAAAAAArpbPvoDXQw169iW8GrUQC/Xsi3gxsima8tkX8WJoJVYIj0YthRBLhCdK1r2a1BGeKHrzavKG8GjEybMv4qXI9bkma4TninrnmvQQnislfPjgCcnfS01+EZ4A9S816SM8ASkCGCcXchPWZIOi+Og9rMk7wuNzxZX77It5DXIbqckW4TmJRAfhuSARhZp4nJ1Wk53z7At6AdTQaoKt6lo8OgiPx5nEajJBeGgQq8kAAyUeHYSn5nwlavJle3jceHS88Ni+vqdWoiYty8PjDBMlEWJod3jckaEmI7vDQx1DTTpWh0ftDSURYm/z/r37Y6zJj83hMUbH7vCoqbEkQkwZhkfJXGicUpMx5fsHKlQ6NZnX81h3U2rSXef6+/NJhYoiTcuO8o0qtbijYXLNXrqvik3FUvX+uCI9Vb3HHlT/05K0KzZIfHRIm0If1zlUsiTel97EvmJZBlSp2VVDu+z7u8O2ooPEJ5er0isyW1ZvctUo+ii5JB9UoYVaCtqXuVRp7Sudm4Aj+9n3mlNfVndy1dG6pJKsWQwSn3v8LKEi3SOrvSZFj38rHDGYXHUUf1Ze1IRRbgKy9vZARd5qFV+UmClq3l2SObvcBGhq3pPO0pkyzE3AcRvZFUhouFwWJWa0ya5BzIbxIPHJxaxQRWYLlpOrTqU+wTAZs51cdTTMO9V2huxzE6C8M61FzbJudjUuWH3BucXZ5q7Jlven8JV2EOM2a45pJFti01lSE6fIZr4lxzTou0BNvu0YKEWiY0l4EgcxbrPimEbBB6ZWHNMwdJPfYkOnueEgxm0WHNMwdpPfYkGnecHo2BAe40EMfzyk/YD9MY2UbvLTNnTaBjb7TvOUbvIGOTUnZVuFe6d5ykGMS+MRbY0/ZX5Mwxida+ORXJo2sJmHxxSd6Da0cQO7yzo8hoMYrdg2tKkDm+MxjZCbGAV9J/74RjqJtqYx5/BQvIu4bopFoq2Jc3jUIXavKY1H7jFWuwPf8Ei9L3SQ+owv3tb0wff5KGldbbtbidA7sD/ZhkcdI7e5yuiG1juwj1zDI+fXm8xuPFIU/eNcw0PhIrXzL08Y6F+4wpsxDY9aBHf4nrPxyHHDJ4ZMXwgggxa/3/z/6WFbE9MXApA/aX4uiqxK3YX/WcXzhQDnX+vvfckt2HikyP8qzfKFALJ9urU7zr/Seae/zTE8p1/rf9/51/O5XJYvBPCi07y3YY+8McbwnUWy2Xrg/CsdWgw/eWT7oSNajuQ4oTx6SwxLAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMx/np0p7vEdSWwAAAAASUVORK5CYII="
            alt=""
          />
        </div>
        <CountryInfo />
      </CountryContainer>
    </Wrapper>
  );
};

export default CountryDetail;

const Wrapper = styled.div`
  padding-top: 20px;

  .goBack-btn {
    display: block;
    width: 80px;
    height: 28px;
    line-height: 28px;
    padding: 2px 4px;
    border-radius: 4px;
    text-align: center;
    font-weight: 500;
    filter: brightness(0.9);
    transition: all 0.2s linear;

    &:hover {
      filter: brightness(1);
      font-weight: bold;
      cursor: default;
      user-select: none;
    }
  }
`;

const CountryContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }

  .flagCountry {
    max-width: 400px;
    width: 100%;
    height: 100%;
    margin-bottom: 12px;
    box-shadow: var(--BoxShadow);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
