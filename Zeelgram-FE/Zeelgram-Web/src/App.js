import Footer from "./components/Footer/Footer";
import Login from "./pages/auth/login/LoginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/auth/signup/SignUpForm";
import HomePage from "./pages/home/HomePage";
import Profile from "./pages/profile/Profile";
import PrivateRoute from "./context/PrivateRoute";
import AuthProvider from "./context/AuthProvider";
import Explore from "./pages/Explore/Explore";

function App() {
  const isAuthenticated = false;

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* <Route index element={<HomePage />} /> */}
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="linhtql" element={<Profile />} />
            <Route path="Explore" element={Explore} />
            <Route exact path="/" element={<PrivateRoute />}>
              <Route exact path="/" element={<HomePage />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
