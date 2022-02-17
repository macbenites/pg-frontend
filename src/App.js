import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Wrapper, Container } from "./Styles/Wrapper";
import LandingPage from "./Components/LandingPage";
import Login from "./Components/Auth/Login";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import SignIn from "./Components/Auth/SignIn";
import Password from "./Components/Password";
import Games from "./Components/Games";
import GamesCreate from "./Components/GamesCreate";
import Fields from "./Components/Fields";
import DetailUser from "./Components/DetailUser";
import ReserveCourt from "./Components/ReserveCourt";
import Players from "./Components/Players";
import { SignUpBusiness } from "./Components/Auth/SignUpBusiness";
import { LayoutAuth } from "./Components/Auth/LayoutAuth";

function App() {
  return (
    <Container>
      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="auth" element={<LayoutAuth />}>
              <Route path="signin" element={<SignIn />} />
              <Route path="login" element={<Login />} />
              <Route path="business" element={<SignUpBusiness />} />
              <Route path="resetPassword" element={<Password />} />
            </Route>
            <Route path="reserveCourt" element={<ReserveCourt />} />
            <Route path="gamesCreate" element={<GamesCreate />} />
            <Route path="/users/:id" element={<DetailUser />} />
            <Route path="home" element={<Home />}>
              <Route path="games" element={<Games />} />
              <Route path="players" element={<Players />} />
              <Route path="canchas" element={<Fields />} />
            </Route>
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default App;
