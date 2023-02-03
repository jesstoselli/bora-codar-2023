import styled from "styled-components";

interface Props {
  buttonColor?: "black" | "purple" | "equal";
}

export const CalculatorContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Rubik", sans-serif;
`;

export const CalculatorContent = styled.div`
  width: 75rem;
  height: calc(100vh - 6rem - 2rem);
  //6 rem -> header size + 2rem -> margin bottom

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: rgba(23, 21, 21, 0.75);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.75);
  border-radius: 0 0 20px 20px;
`;

// export const CalculatorProjBg = styled.div``

export const CalculatorItself = styled.article`
  width: 22.25rem;
  height: 35.5rem;

  padding: 3.5rem 2rem;

  background: #2d2a37;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 188px 52px rgba(0, 0, 0, 0.01), 0px 120px 48px rgba(0, 0, 0, 0.04),
    0px 68px 41px rgba(0, 0, 0, 0.15), 0px 30px 30px rgba(0, 0, 0, 0.26),
    0px 8px 17px rgba(0, 0, 0, 0.29), inset 0px 6px 8px rgba(255, 255, 255, 0.1),
    inset 0px -4px 5px rgba(0, 0, 0, 0.22);
  border-radius: 48px;
`;

export const CalculatorButtonsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 0.75rem;
`;

export const CalculatorButton = styled.button<Props>`
  cursor: pointer;
  width: 4rem;
  height: 4rem;

  font-family: "Rubik";
  font-size: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) =>
    props.buttonColor === "purple"
      ? "linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0.01%, rgba(255, 255, 255, 0.05) 100%), #462878"
      : "linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #2D2A37"};

  box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04),
    0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26),
    0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.06);
  border-radius: 100px;
  color: #ebebeb;

  &:hover {
    background: ${(props) =>
      props.buttonColor === "purple"
        ? "linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0.01%, rgba(255, 255, 255, 0.05) 100%), #3A1F65"
        : "linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #222029"};
  }

  &.ceButton {
    color: #975dfa;
  }

  &.equalsButton {
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.15) 0%,
        rgba(255, 255, 255, 0.05) 100%
      ),
      #7f45e2;

    &:hover {
      background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.15) 0%,
          rgba(255, 255, 255, 0.05) 100%
        ),
        #703fc6;
    }
  }
`;
