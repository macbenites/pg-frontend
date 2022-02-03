import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Wrapper, Container } from "./Styles/Wrapper";
import LandingPage from "./Components/LandingPage";
import Footer from "./Components/Footer";
import SingIn from "./Components/SingIn";

function App() {
  return (
    <Container>
      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/singin" element={<SingIn />} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default App;
