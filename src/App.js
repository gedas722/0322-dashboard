import "./App.css";
import { Route, Routes } from "react-router-dom";

// Pages
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Oders";
import Customers from "./pages/Customers";
import Reports from "./pages/Reports";
import Integrations from "./pages/Integrations";

//Components
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Header from "./components/Header";

// App
function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Main />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/Integrations" element={<Integrations />} />
      </Routes>
    </>
  );
}

export default App;
