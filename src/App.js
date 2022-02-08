import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Users from "./Components/Users";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/products" element={<h1>Desde productos</h1>} />
            <Route
              exact
              path="/products/:id"
              element={<h1>Desde producto especifico</h1>}
            />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
