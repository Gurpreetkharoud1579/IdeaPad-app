import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import NotesPage from "../pages/NotesPage";
import LoginPage from "../pages/LoginPage";
import RequireAuth from "./RequireAuth";
import SignupPage from "../pages/SignupPage";
import LogoutPage from "../pages/LogoutPage";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
      <Routes>
        <Route index element={<RequireAuth> <NotesPage /></RequireAuth> } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/logout" element={<LogoutPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
