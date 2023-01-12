import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6rem;
  background: rgba(23, 21, 21, 0.75);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Roboto Condensed", serif;

  padding: 1rem;
`;

export const HeaderContent = styled.div`
  width: 1200px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  margin-right: 8rem;

  h1 {
    font-size: 2.5rem;
  }

  span {
    font-size: 1rem;
    margin-left: 0.5rem;
    font-weight: 300;
  }
`;

export const Challenges = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;

  p {
    margin-left: 1rem;
    font-weight: 700;
    font-size: 1.125rem;
    cursor: pointer;

    transition: all 0.2s;

    &:hover {
      color: #ff5383;
    }

    &.tba {
      cursor: default;

      &:hover {
        color: #f9f9f9;
      }
    }
  }
`;
