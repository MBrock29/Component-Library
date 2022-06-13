import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Fetch from "./pages/Fetch";
import Theme from "./styles/Theme";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Context } from "./context/Context";

function App() {
  return (
    <Context.Provider>
      <ChakraProvider>
        <Theme>
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/fetch">Fetch</Link>
                  </li>
                </ul>
              </nav>

              <Routes>
                <Route exact path="/fetch" element={<Fetch />}></Route>
              </Routes>
            </div>
          </Router>
        </Theme>
      </ChakraProvider>
    </Context.Provider>
  );
}

export default App;
