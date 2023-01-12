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
          <p>about</p>
          <p>music player</p>
          <p>product card</p>
          <p className='tba'>...TBA</p>
        </Challenges>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
