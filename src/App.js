import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Wrapper } from "./Styles/Wrapper";
import LandingPage from "./Components/LandingPage";

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
