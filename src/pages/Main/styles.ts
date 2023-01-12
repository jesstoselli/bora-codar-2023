import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainContent = styled.div`
  width: 1200px;

  margin-top: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainCard = styled.article`
  width: 30rem;
  background: rgba(23, 21, 21, 0.75);
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;

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
