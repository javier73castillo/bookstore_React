import "./main.scss";
import {
  BrowserRouter,
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import axios from "axios";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { RequireAuth } from "./shared/components/RequireAuth/RequireAuth";
import { JwtContext } from "./shared/contexts/JwtContext";
import { useState, useEffect } from "react";
import { ButtonLogOut } from "./shared/components/ButtonLogOut/ButtonLogOut";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";
import { BookDetails } from "./components/Books/BookDetails/BookDetails";
import { Footer } from "./components/Footer/Footer";
import BookProvider from "./shared/contexts/BookContext";
import { Cart } from "./pages/Cart/Cart";

function App() {
  const [jwt, setJwt] = useState(localStorage.getItem("token"));
  const [search, setSearch] = useState([]);
  const [books, setBooks] = useState([]);

  const urlPage = `https://library-api-rest-cp6zy22th-javier73castillo.vercel.app/api/books`;

  useEffect(() => {
    axios.get(urlPage).then((response) => {
      setBooks(response.data);
    });
  }, [urlPage]);

  const searchBook = (e) => {
    let resultado = books.filter((libro) =>
      libro.name.toLowerCase().trim().includes(e.target.value)
    );

    setSearch(resultado);
  };

  return (
    <BookProvider>
      <JwtContext.Provider value={{ jwt, setJwt }}>
        <div className="App">
          <div className="content">
            <Router>
              <nav className="nav">
                <NavLink to="/">
                  <img src="./assets/logo.png" alt="" />
                </NavLink>

                <div className="container-search">
                  <input
                    className="searchInput"
                    onChange={(e) => searchBook(e)}
                    type="text"
                  />
                  {/* <button className="botonSearchBook">Search book</button> */}
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
                <Route
                  path="/"
                  element={
                    <HomePage
                      books={search.length > 0 ? search : books}
                      searchBook={searchBook}
                    />
                  }
                />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/book-details/:id" element={<BookDetails />} />
                <Route path="/cart" element={<Cart />} />
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
