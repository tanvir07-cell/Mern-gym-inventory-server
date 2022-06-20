import logo from "./logo.svg";
import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Inventory from "./Pages/Home/Inventory/Inventory";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import ManageItems from "./Pages/ManageItems/ManageItems";
import AddItem from "./Pages/AddItem/AddItem";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    const loader = document.getElementById("spinner");

    // using arrow function to the loader:
    window.addEventListener("load", () => {
      loader.style.display = "none";
    });
  }, []);
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>

        <Route
          path="inventory/:id"
          element={
            <RequireAuth>
              <ProductDetail></ProductDetail>
            </RequireAuth>
          }
        ></Route>
        <Route path="/manageItem" element={<ManageItems></ManageItems>}></Route>
        <Route path="/addItem" element={<AddItem></AddItem>}></Route>
      </Routes>
    </div>
  );
}

export default App;
