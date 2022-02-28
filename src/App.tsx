import "./App.css";
// import { Button } from "react-bootstrap";

import { useTranslation } from "react-i18next";
import { Navbar } from "./layout/header/navbar";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <Navbar></Navbar>
      <p>{t("app_title")}</p>
    </>
  );
}

export default App;
