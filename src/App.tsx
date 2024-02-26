import "./App.css";
import CreateOrder from "./components/CreateOrder";
import NavBar from "./components/NavBar";
import OrdersList from "./components/OrdersList";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/create-order" element={<CreateOrder />} />
          <Route path="/order-list" element={<OrdersList />} />
          <Route path="/" element={<Navigate to="/order-list" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
