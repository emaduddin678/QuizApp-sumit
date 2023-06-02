import Layout from "./components/Layout";
import LogIn from "./components/pages/LogIn";
import Quiz from "./components/pages/Quiz";
import Result from "./components/pages/Result";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import "./styles/App.css";
import { AuthProvider } from "../src/contexts/AuthContext";
// Router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// context data
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/signup"
              element={<PublicRoute component={SignUp} />}
            />
            <Route path="/login" element={<PublicRoute component={LogIn} />} />
            <Route path="/quiz/:id" element={<PrivateRoute component={Quiz} />} />
            <Route
              path="/result/:id"
              element={<PrivateRoute component={Result} />}
            />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
