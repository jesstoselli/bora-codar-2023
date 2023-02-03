import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainContent = styled.div`
  width: 75rem;
  height: calc(100vh - 6rem - 2rem); //6 rem -> header size + 6rem -> margin

  display: flex;
  flex-direction: column;
  align-items: center;

  background: rgba(23, 21, 21, 0.75);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.75);
  border-radius: 0 0 20px 20px;
  /* width: 1200px;

  display: flex;
  flex-direction: column;
  align-items: center; */

  /* background: rgba(23, 21, 21, 0.75);
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.75);
  border-radius: 0 0 20px 20px; */
`;

export const MainCard = styled.article`
  width: 30rem;
  /* background: rgba(23, 21, 21, 0.75);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.75);
  border-radius: 0 0 20px 20px; */

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;

  h2 {
    margin: 1rem;
  }

  img {
    width: 15rem;
    height: 15rem;
    border-radius: 1000px;
    border: 2px solid rgba(23, 21, 21, 0.75);

    margin: 1rem;
  }

  p {
    margin: 1rem;
    line-height: 1.9;
    text-align: justify;
  }

  a {
    font-weight: 700;
    cursor: pointer;

    transition: all 0.2s;

    &:hover {
      color: #ff5383;
    }
  }
`;
