import styled from "styled-components";
import { MusicPlayerCard } from "..";

interface Props {
  playerVersion: MusicPlayerCard;
}

export const SongInfoContainer = styled.div<Props>`
  align-self: ${(props) =>
    props.playerVersion === MusicPlayerCard.Full
      ? "flex-start"
      : props.playerVersion === MusicPlayerCard.Compact
      ? "center"
      : "center"};

  h4 {
    font-size: 1.5rem;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    line-height: 1.5;
  }

  h5 {
    line-height: 1.5;
    font-size: 1.25rem;
    font-weight: 400;
    opacity: 0.7;
  }
`;
