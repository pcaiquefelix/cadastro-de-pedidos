import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Orders from "./components/pages/Orders";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Container from "./components/layout/Container";
import NewOrder from "./components/pages/NewOrder";
import EditOrder from "./components/pages/EditOrder";

function App() {
  return (
    <Router>
      <Header />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/neworder" element={<NewOrder />} />
          <Route path="/editorder/:id" element={<EditOrder />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
