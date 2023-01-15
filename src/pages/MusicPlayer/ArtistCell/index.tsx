// Styles
import { ArtistCellContainer } from "./styles";

export interface ArtistCellProps {
  artist: string;
  albumCover: string;
  onClick: () => void;
}

function ArtistCell({ albumCover, artist }: ArtistCellProps) {
  return (
    <ArtistCellContainer>
      <img src={albumCover} alt={artist} />
      <p>{artist}</p>
    </ArtistCellContainer>
  );
}

export default ArtistCell;
