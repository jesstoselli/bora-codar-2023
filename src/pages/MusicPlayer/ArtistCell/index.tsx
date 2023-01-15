// Styles
import { ArtistCellContainer } from "./styles";

export interface ArtistCellProps {
  artist: string;
  albumCover: string;
  onClick: () => void;
}

function ArtistCell({ albumCover, artist, onClick }: ArtistCellProps) {
  return (
    <ArtistCellContainer onClick={onClick}>
      <img src={albumCover} alt={artist} />
      <p>{artist}</p>
    </ArtistCellContainer>
  );
}

export default ArtistCell;
