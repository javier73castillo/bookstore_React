import "./main.scss";
import {
  BrowserRouter,
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { RequireAuth } from "./shared/components/RequireAuth/RequireAuth";
import { JwtContext } from "./shared/contexts/JwtContext";
import { useState } from "react";
import { ButtonLogOut } from "./shared/components/ButtonLogOut/ButtonLogOut";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";
<<<<<<< HEAD
import { Books } from "./components/Books/Books";
import { Button } from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
=======
import { BookDetails } from "./components/Books/BookDetails/BookDetails";
>>>>>>> 9c8aff1a1c3f5e05399b6a65c4b2567cd32d68b9

function App() {
  const [jwt, setJwt] = useState(localStorage.getItem("token"));

  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>
      <div className="App">
        <Router>
          <nav className="nav">
<<<<<<< HEAD
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
=======
            <img src="./assets/logo.png" alt="" />

            <div className="container-search">
              <input className="searchInput" type="text" />
              <button className="botonSearchBook">Search book</button>
            </div>
            <div className="container-carro">
              <ul>
                {jwt && (
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                )}
                {!jwt && (
                  <>
                    <li>
                      <NavLink to="/login">Login</NavLink>
                    </li>
                    <li>
                      <NavLink to="/register">Register</NavLink>
                    </li>
                  </>
                )}
              </ul>

              {jwt && <ButtonLogOut />}
              {jwt && <ShoppingCart />}
            </div>
>>>>>>> 9c8aff1a1c3f5e05399b6a65c4b2567cd32d68b9
          </nav>
          <Routes>
            {/*  <Route path="/" element={<RequireAuth><HomePage/></RequireAuth>}/> */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
<<<<<<< HEAD
          </Routes>  
          <Books />
          <Footer />
        </Router>

=======
            <Route path="/book-details/:id" element={<BookDetails />} />
          </Routes>
        </Router>
>>>>>>> 9c8aff1a1c3f5e05399b6a65c4b2567cd32d68b9
      </div>
    </JwtContext.Provider>
  );
}

export default App;
