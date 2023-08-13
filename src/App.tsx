import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Navigation from "./components/navigation";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, []);

  return (
    <main>
      <div className="nav__wrapper">
        <Navigation />
      </div>
      <Router>
        <AppRoutes />
      </Router>
      <Footer />
    </main>
  );
}

export default App;
