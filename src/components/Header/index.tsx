import { Link } from "react-router-dom";
import { HeaderContainer, Logo, Challenges, HeaderContent } from "./styles";

function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <h1>#boraCodar</h1>
          <span>by jess.to</span>
        </Logo>
        <Challenges>
          <Link to={"/"}>about</Link>
          <Link to={"music-player"}>music player</Link>
          <Link to={"product-card"}>product card</Link>
          <Link to={"calculator"}>calculator</Link>
          <Link to={""} className='tba'>
            ...TBA
          </Link>
        </Challenges>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
