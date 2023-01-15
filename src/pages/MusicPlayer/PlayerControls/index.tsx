import {
  PlayerControlsContainer,
  Controls,
  ProgressionBar,
  TimeTrack,
} from "./styles";

import playBack from "../../../assets/play-back.svg";
import play from "../../../assets/play.svg";
import playForward from "../../../assets/play-forward.svg";
import { MusicPlayerCard } from "..";

export interface PlayerControlsProps {
  playerVersion: MusicPlayerCard;
}

function PlayerControls({ playerVersion }: PlayerControlsProps) {
  return (
    <PlayerControlsContainer>
      <Controls playerVersion={playerVersion}>
        <img src={playBack} alt='play back' />
        <img src={play} alt='play' />
        <img src={playForward} alt='play forward' />
      </Controls>

      {(playerVersion === MusicPlayerCard.Full ||
        playerVersion === MusicPlayerCard.Compact) && (
        <>
          <ProgressionBar playerVersion={playerVersion} />
          <TimeTrack playerVersion={playerVersion}>
            <p>03:20</p>
            <p>00:12</p>
          </TimeTrack>
        </>
      )}
    </PlayerControlsContainer>
  );
}

export default PlayerControls;
