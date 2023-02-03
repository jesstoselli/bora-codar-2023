import styled from "styled-components";

export const CalculatorVisor = styled.header`
  width: 100%;
  height: 5.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  margin-bottom: 1.5rem;
  padding: 0 1.5rem;

  p {
    font-size: 1.25rem;
    color: #6b6b6b;
  }

  & > div {
    width: 15.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: right;

    h5 {
      color: #ebebeb;
      flex: 1;
      font-size: 2.25rem;
      font-weight: 400;
    }
  }
`;
