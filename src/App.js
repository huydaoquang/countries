import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import "./App.css";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import CountryDetail from "./Components/MainContent/CountryDetail";
import { ThemeContext } from "./Components/ThemeContext/themeContext";

function App() {
  const themeContext = useContext(ThemeContext);

  return (
    <AppContainer className={themeContext.theme}>
      <Router>
        <Header />
        <ContentContainer>
          <Routes>
            <Route exact path="/" element={<MainContent />} />
            <Route path="/region/:regionName" element={<MainContent />} />
            <Route path="/country/:countryName" element={<CountryDetail />} />
            <Route path="/search/:name" element={<MainContent />} />
          </Routes>
        </ContentContainer>
      </Router>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  max-width: 1280px;
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 0 12px;
`;
