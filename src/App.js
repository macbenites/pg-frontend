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


function App() {
  return (
    <AuthProvider>
      <Container>
        <Wrapper>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path = '/login' element = {<Login/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/resetPassword" element={<Password/>}/>
              <Route path="/games" element={<Games/>}/>
              <Route path="/players" element={<Players/>}/>
            </Routes>
          </BrowserRouter>
        </Wrapper>
        <Footer />
      </Container>
    </AuthProvider>
  );
}

export default App;
