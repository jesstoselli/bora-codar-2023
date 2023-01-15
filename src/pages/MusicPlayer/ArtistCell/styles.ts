import styled from "styled-components";

export const ArtistCellContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin: 0.5rem 0;
  padding: 0.25rem;

  cursor: pointer;
  background: #2a2141;
  border-radius: 10px 0 10px 0;
  border: 2px solid #2a2141;

  img {
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 100px;
    border: 2px solid #171515;

    margin-right: 1rem;
  }

  transition: all 0.2s;

  :hover {
    border-color: #b39acf;
  }

  &.picked {
    border-color: #171515;
  }

  :first-of-type {
    margin-top: 0;
  }
`;
