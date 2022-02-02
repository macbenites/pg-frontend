import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Wrapper } from "./Styles/Wrapper";
import LandingPage from "./Components/LandingPage";
import Login from "./Components/Login";

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path = '/login' element = {<Login/>}/>
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
