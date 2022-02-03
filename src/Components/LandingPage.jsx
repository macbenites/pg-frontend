import { LandTop } from "../Styles/LandingPage";
import Logo from "./Logo";
import NavBar from "./NavBar";

function LandingPage() {
  return (
    <LandTop>
      <Logo />
      {/* <Button />
      <Button /> 
      */}
      <NavBar/>
    </LandTop>
  );
}

export default LandingPage;
