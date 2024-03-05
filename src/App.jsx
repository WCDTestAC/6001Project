import "./App.css";
import LoginSignup from "./Components/LoginSignup/LoginSignup.jsx";
import { ProductList } from "./productList.jsx";
import SignIn from "./Components/LoginSignup/SignIn.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.js";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Rout path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );

  //orgin part
  // return (
  //   <main>
  //     <SignIn />
  //   </main>
  //   // <main>
  //   //   React ⚛️ + Vite ⚡ + Replit
  //   // </main>
  // );
}
