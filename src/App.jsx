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
import { BookDetails } from "./components/Books/BookDetails/BookDetails";
import { Footer } from "./components/Footer/Footer";
import BookProvider from "./shared/contexts/BookContext";

function App() {
  const [jwt, setJwt] = useState(localStorage.getItem("token"));

  return (
    <BookProvider>
      <JwtContext.Provider value={{ jwt, setJwt }}>
        <div className="App">
          <div className="content">
            <Router>
              <nav className="nav">
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
              </nav>
              <Routes>
                {/*  <Route path="/" element={<RequireAuth><HomePage/></RequireAuth>}/> */}
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/book-details/:id" element={<BookDetails />} />
              </Routes>
            </Router>
          </div>
          <Footer />
        </div>
      </JwtContext.Provider>
    </BookProvider>
  );
}

export default App;
