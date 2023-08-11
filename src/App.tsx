import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Navigation from "./components/navigation";
import Footer from "./components/Footer";

function App() {
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
