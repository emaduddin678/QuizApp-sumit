import Layout from "./components/Layout";
import LogIn from "./components/pages/LogIn";
import Quiz from "./components/pages/Quiz";
import Result from "./components/pages/Result";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import "./styles/App.css";

// Router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "../src/contexts/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
