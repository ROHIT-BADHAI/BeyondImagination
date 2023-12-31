import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/Styles/index.css";
import DashboardPage from "./Pages/DashboardPage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import { UserContextProvider } from "./Context/UserContext";
import { AuthContextProvider } from "./Context/authContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
    <AuthContextProvider>      <UserContextProvider>
        {" "}
        <Router>
          {" "}
          <Routes>
            <Route exact path="/" element={<DashboardPage />} />
            <Route exact path="/signup" element={<SignupPage />} />
            {/* <Route exact path="/login" element={<LoginPage />} /> */}
          </Routes>
        </Router>
        <ToastContainer/>
      </UserContextProvider>
      </AuthContextProvider>

    </div>
  );
}

export default App;
