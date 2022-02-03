import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Wrapper } from "./Styles/Wrapper";
import LandingPage from "./Components/LandingPage";
import SingIn from "./Components/SingIn";

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/singin" element={<SingIn />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
