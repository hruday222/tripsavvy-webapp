import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Wishlist from "./components/Wishlist/Wishlist";
import ResetPassword from "./components/ResetPassword";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
      <Container style = {{width: "4000px"}}>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/reset" element={<ResetPassword />} />
            </Routes>
          </UserAuthContextProvider>
    </Container>
  );
}

export default App;
