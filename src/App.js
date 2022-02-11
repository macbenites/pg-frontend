import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Wrapper, Container } from "./Styles/Wrapper";
import LandingPage from "./Components/LandingPage";
import Login from "./Components/Login";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import Password from "./Components/Password";
import Games from "./Components/Games";
import GamesCreate from "./Components/GamesCreate";
import { AuthProvider } from "./Context/authContext";
import {Provider} from "react-redux";
import { store } from "./Redux/Store";
import Players from "./Components/Players";
import Fields from "./Components/Fields";

function App() {
  return (
    <Provider store={store}>
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
                  <Route path="gamesCreate" element={<GamesCreate />} />
                  <Route path="players" element={<Players />} />
                  <Route path="canchas" element={<Fields />} />
                </Route>
                <Route path="*" element={<h1>Not Found</h1>} />
              </Routes>
            </BrowserRouter>
          </Wrapper>
          <Footer />
        </Container>
      </AuthProvider>
    </Provider>
  );
}

export default App;
