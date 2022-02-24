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
import DetailCourt from "./Components/DetailCourt";
import JoinMatch from "./Components/JoinMatch";
import DetailMatch from "./Components/DetailMatch";
import { SignUpBusiness } from "./Components/Auth/SignUpBusiness";
import { LayoutAuth } from "./Components/Auth/LayoutAuth";
import Chat from "./Components/Chat";
import DataUserGoogle from "./Components/Auth/DataUserGoogle";
import FailureMp from "./Components/FailureMp";
import YourMatches from "./Components/YourMatches";

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
            <Route path="reserveCourt/:name" element={<ReserveCourt />} />
            <Route path="gamesCreate" element={<GamesCreate />} />
            <Route path="/users/:id" element={<DetailUser />} />
            <Route path="/users/:id/chat" element={<Chat />} />
            <Route path="/sportcenters/:id" element={<DetailCourt />} />
            <Route path="/matches/:id_match" element={<DetailMatch />} />           
            <Route path="home" element={<Home />}>
              <Route path="yourMatches" element={<YourMatches />} />
              <Route path="profile" element={<DataUserGoogle />} />
              <Route path="games" element={<Games />} />
              <Route path="joinMatch/:id" element={<JoinMatch />} />
              <Route path="players" element={<Players />} />
              <Route path="canchas" element={<Fields />} />
              <Route path="failure" element={<FailureMp />} />
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
