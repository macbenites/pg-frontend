import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Wrapper, Container } from "./Styles/Wrapper";
import LandingPage from "./Components/LandingPage";
import Login from "./Components/Login";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import Password from "./Components/Password";
import Games from "./Components/Games";
import { AuthProvider } from "./Context/authContext";
import Players from "./Components/Players";
import CardsCity from "./Components/CardsCity";

function App() {
  return (
    <AuthProvider>
      <Container>
        <Wrapper>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="signin" element={<SignIn />} />
              <Route path="login" element={<Login />} />
              <Route path="resetPassword" element={<Password />} />
              <Route path="/home/*" element={<Home />}>
                <Route path="games" element={<Games />} />
                <Route path="players" element={<Players />} />
                <Route path="canchas" element={<CardsCity />} />
              </Route>
              <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
          </BrowserRouter>
        </Wrapper>
        <Footer />
      </Container>
    </AuthProvider>
  );
}

export default App;
