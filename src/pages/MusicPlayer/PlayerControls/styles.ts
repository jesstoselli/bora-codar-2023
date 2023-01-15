import styled from "styled-components";
import { MusicPlayerCard } from "..";

interface Props {
  playerVersion: MusicPlayerCard;
}

export const PlayerControlsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: "Roboto";

  margin-top: 2rem;
`;

export const Controls = styled.div<Props>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.playerVersion === MusicPlayerCard.Full
      ? "space-between"
      : "space-around"};

  margin-bottom: 1rem;

  img {
    cursor: pointer;

    :hover {
      filter: invert(12%) sepia(17%) saturate(1977%) hue-rotate(216deg)
        brightness(91%) contrast(92%);
    }
  }
`;

export const ProgressionBar = styled.div<Props>`
  font-size: 0.875rem;
  line-height: 1.6;
  color: #c4c4cc;
  opacity: 0.7;

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  visibility: ${(props) =>
    props.playerVersion === MusicPlayerCard.Minimal ? "hidden" : "visible"};

  position: relative;

  &::before {
    content: "";
    height: 6px;
    width: 100%;
    display: block;

    background: #d9d9d9;
    opacity: 0.3;
    border-radius: 10px;

    position: absolute;
  }

  &::after {
    content: "";
    height: 6px;
    width: 80%;
    display: block;

    background: #d9d9d9;
    border-radius: 10px;
  }
`;

export const TimeTrack = styled.div<Props>`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin-top: 0.675rem;

  visibility: ${(props) =>
    props.playerVersion === MusicPlayerCard.Minimal ? "hidden" : "visible"};
`;
