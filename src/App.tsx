import "./App.css";
import CreateOrder from "./components/CreateOrder";
import NavBar from "./components/NavBar";
import OrdersList from "./components/OrdersList";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <CreateOrder/>
      <OrdersList/>
    </div>
  );
}

export default App;
