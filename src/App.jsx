import "./main.scss";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { RequireAuth } from "./shared/components/RequireAuth/RequireAuth";
import { JwtContext } from "./shared/contexts/JwtContext";
import { useState } from "react";
import { ButtonLogOut } from "./shared/components/ButtonLogOut/ButtonLogOut";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";
import { Books } from "./components/Books/Books";
import { Button } from "./components/Button/Button";
import Footer from "./components/Footer/Footer";

function App() {
  const [jwt, setJwt] = useState(localStorage.getItem("token"));

  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>
      <div className="App">
        <Router>
          <nav className="nav">
          <img src="./assets/logo.png" alt=""/>
            {jwt && <NavLink to="/">Home</NavLink>}
            {!jwt && (
              <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
              </>
            )}
            {jwt && <ButtonLogOut />}
            {jwt && <ShoppingCart />}       
          </nav>
          <Routes>
            {/*  <Route path="/" element={<RequireAuth><HomePage/></RequireAuth>}/> */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>  
          <Books />
          <Footer />
        </Router>

        <Books /> 
      </div>
    </JwtContext.Provider>
  );
}

export default App;
