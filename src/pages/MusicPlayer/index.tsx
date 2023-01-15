import { useState } from "react";

// Styles
import {
  MusicPlayerContainer,
  MusicPlayerContent,
  ArtistsContainer,
  PlayersContainer,
  PlayersContainerHeader,
  MusicPlayerCardOne,
  MusicPlayerCardTwo,
  MusicPlayerCardThree,
} from "./styles";

// Images
import albumCover from "../../assets/albumcoverplaceholder.png";

// Components
import PlayerControls from "./PlayerControls";
import SongInfo from "./SongInfo";
import ArtistCell from "./ArtistCell";

export enum MusicPlayerCard {
  Full = "FULL",
  Compact = "COMPACT",
  Minimal = "MINIMAL",
}

function MusicPlayer() {
  const [playerCard, setPlayerCard] = useState<MusicPlayerCard>(
    MusicPlayerCard.Full
  );

  function pickAnArtist() {
    console.log("Artist picked.");
  }

  const MusicPlayerCard1 = (
    <MusicPlayerCardOne>
      {/* replace alt with album title */}
      <img className='albumCover' src={albumCover} alt='Album Cover' />
      <SongInfo
        playerVersion={MusicPlayerCard.Full}
        title='Acorda Devinho'
        artist='Banda Rocketseat'
      />
      <PlayerControls playerVersion={MusicPlayerCard.Full} />
    </MusicPlayerCardOne>
  );

  const MusicPlayerCard2 = (
    <MusicPlayerCardTwo>
      {/* replace alt with album title */}
      <div>
        <img className='albumCover' src={albumCover} alt='Album Cover' />
        <SongInfo
          playerVersion={MusicPlayerCard.Compact}
          title='Acorda Devinho'
          artist='Banda Rocketseat'
        />
      </div>
      <PlayerControls playerVersion={MusicPlayerCard.Compact} />
    </MusicPlayerCardTwo>
  );

  const MusicPlayerCard3 = (
    <MusicPlayerCardThree>
      {/* replace alt with album title */}
      <div>
        <img className='albumCover' src={albumCover} alt='Album Cover' />
        <SongInfo
          playerVersion={MusicPlayerCard.Minimal}
          title='Acorda Devinho'
          artist='Banda Rocketseat'
        />
      </div>
      <PlayerControls playerVersion={MusicPlayerCard.Minimal} />
    </MusicPlayerCardThree>
  );

  function pickMusicPlayerCard() {}

  return (
    <MusicPlayerContainer>
      <MusicPlayerContent>
        <h2>challenge - music player</h2>
        <div className='grid'>
          <ArtistsContainer>
            <h3>pick an artist</h3>
            <p>their latest success will hit the player</p>
            <ArtistCell
              onClick={pickAnArtist}
              albumCover={
                "https://i.scdn.co/image/ab6761610000e5eb68f6e5892075d7f22615bd17"
              }
              artist={"Adele"}
            />
            <ArtistCell
              onClick={pickAnArtist}
              albumCover={
                "https://cdns-images.dzcdn.net/images/cover/bbd5dc34c1e6ebe72dde67c4f908cb67/264x264.jpg"
              }
              artist={"Lily Allen"}
            />
            <ArtistCell
              onClick={pickAnArtist}
              albumCover={
                "https://cdns-images.dzcdn.net/images/cover/57c8b89632809b6efca8d7e1c2da7ec4/264x264.jpg"
              }
              artist={"Meghan Trainor"}
            />
          </ArtistsContainer>

          <PlayersContainer>
            <PlayersContainerHeader>
              <h3>pick a player</h3>
              <div>
                <p className='picked'>player 1</p>
                <span>|</span>
                <p>player 2</p>
                <span>|</span>
                <p>player 3</p>
              </div>
            </PlayersContainerHeader>
            {MusicPlayerCard3}
          </PlayersContainer>
        </div>
      </MusicPlayerContent>
    </MusicPlayerContainer>
  );
}

export default MusicPlayer;
