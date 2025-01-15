import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Nav from "./components/Nav";
import TodoApp from "./pages/TodoApp";
import "./App.css";
import ShoppingCart from "./pages/ShoppinCart";
import CartContainer from "./components/shoppingCart/CartContainer";
import WeatherApp from "./pages/WeatherApp";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todoApp" element={<TodoApp />} />
        <Route path="/shoppingCart" element={<ShoppingCart />}>
          <Route path="cartContainer" element={<CartContainer/>}/>
        </Route>
        <Route path="/weatherApp" element={<WeatherApp/>}/>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
