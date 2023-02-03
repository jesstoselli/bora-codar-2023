import styled from "styled-components";

export const AppContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AppContent = styled.div`
  width: 75rem;
  height: calc(100vh - 6rem - 2rem); //6 rem -> header size + 6rem -> margin

  display: flex;
  flex-direction: column;
  align-items: center;

  background: rgba(23, 21, 21, 0.75);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.75);
  border-radius: 0 0 20px 20px;
`;
