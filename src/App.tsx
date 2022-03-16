import "./App.css";
// import { Button } from "react-bootstrap";

import { useTranslation } from "react-i18next";
import { Navbar } from "./layout/header/navbar";
import { Dashboard } from "./layout/dashboard/dashboard";

function App() {
  const { t } = useTranslation();
  return (
    <>
      {/* <Navbar></Navbar> */}
      {/* <p>{t("app_title")}</p> */}
      <Dashboard></Dashboard>
    </>
  );
}

export default App;
