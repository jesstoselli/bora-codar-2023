import { MainContainer, MainContent, MainCard } from "./styles";

function Main() {
  return (
    <MainContainer>
      <MainContent>
        <MainCard>
          <h2>about</h2>

          <img
            src='https://avatars.githubusercontent.com/u/54954987?v=4'
            alt='Jess'
          />

          <p>Hello world</p>
          <p>
            I'm Jess, a 31-year-old developer from Rio de Janeiro, Brazil.
            Formerly a Fashion Designer, I've been working with Android and
            Kotlin these past few years @{" "}
            <a href='https://www.bees.com/' target='_blank'>
              BEES
            </a>{" "}
            and this app is helping me get back in touch with React and its
            environment.
          </p>
          <p>
            This application aims to showcase a few challenges proposed by{" "}
            <a href='https://www.rocketseat.com.br/' target='_blank'>
              Rocketseat
            </a>{" "}
            in their website{" "}
            <a href='https://boracodar.dev/' target='_blank'>
              boracodar.dev
            </a>
            .{" "}
          </p>
        </MainCard>
      </MainContent>
    </MainContainer>
  );
}

export default Main;
