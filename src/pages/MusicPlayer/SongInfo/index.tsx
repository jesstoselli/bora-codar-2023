// Styles
import { MusicPlayerCard } from "..";
import { SongInfoContainer } from "./styles";

export interface SongInfoProps {
  title: string;
  artist: string;
  playerVersion: MusicPlayerCard;
}

function SongInfo({ title, artist, playerVersion }: SongInfoProps) {
  console.log(playerVersion);

  return (
    <SongInfoContainer playerVersion={playerVersion}>
      <h4>{title}</h4>
      <h5>{artist}</h5>
    </SongInfoContainer>
  );
}

export default SongInfo;
