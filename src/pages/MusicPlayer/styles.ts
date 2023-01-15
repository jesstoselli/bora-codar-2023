import styled from "styled-components";

export const MusicPlayerContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    align-self: center;
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }
`;

export const MusicPlayerContent = styled.div`
  width: 75rem;
  height: calc(100vh - 6rem - 2rem); //6 rem -> header size + 6rem -> margin

  display: flex;
  flex-direction: column;
  align-items: center;

  background: rgba(23, 21, 21, 0.75);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.75);
  border-radius: 0 0 20px 20px;

  h2 {
    margin: 2rem;
  }

  .grid {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const ArtistsContainer = styled.section`
  width: 20rem;
  height: 100%;

  color: #e1e1e6;
  background: rgb(23, 21, 21);
  border-radius: 10px 0 0 0;

  padding: 1rem 0 0 3rem;

  display: flex;
  flex-direction: column;

  > p {
    align-self: center;
    margin-bottom: 2rem;
  }
`;

export const PlayersContainer = styled.section`
  height: 40rem;

  color: #e1e1e6;

  padding: 0 3rem 3rem 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: rgb(23, 21, 21);
  border-radius: 0 0 10px 0;
`;

export const PlayersContainerHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-weight: 700;

  padding: 1rem;
  margin-bottom: 1rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    > p {
      margin: 0 2rem;
      cursor: pointer;

      transition: all 0.2s;

      &:hover {
        color: #8a70d3;
      }

      &.picked {
        color: #8a70d3;
      }
    }
  }
`;

export const MusicPlayerCardOne = styled.div`
  width: 16.625rem;
  height: 31.125rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2.25rem;

  font-family: "Roboto", sans-serif;

  background: #2a2141;
  border-radius: 10px;

  .albumCover {
    width: 11.875rem;
    height: 11.875rem;
    border-radius: 6px;
    margin-bottom: 2rem;
  }
`;

export const MusicPlayerCardTwo = styled.div`
  width: 22.325rem;
  height: 16.625rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1.75rem;

  font-family: "Roboto", sans-serif;

  background: #2a2141;
  border-radius: 10px;

  & > div {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  .albumCover {
    width: 5.25rem;
    height: 5.25rem;
    border-radius: 6px;
    margin-right: 2rem;
  }
`;

export const MusicPlayerCardThree = styled.div`
  width: 22.325rem;
  height: 12.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1.75rem;

  font-family: "Roboto", sans-serif;

  background: #2a2141;
  border-radius: 10px;

  & > div {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  .albumCover {
    width: 5.25rem;
    height: 5.25rem;
    border-radius: 6px;
    margin-right: 2rem;
  }
`;
