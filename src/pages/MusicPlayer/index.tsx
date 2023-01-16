import { useEffect, useState } from "react";

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
import spotifyLogoBlack from "../../assets/spotify-logo-black.svg";
import spotifyLogoGreen from "../../assets/spotify-logo-green.svg";

// Components
import PlayerControls from "./PlayerControls";
import SongInfo from "./SongInfo";
import ArtistCell from "./ArtistCell";
import spotifyApi from "../../services/spotifyApi";
import { useSearchParams } from "react-router-dom";

export enum MusicPlayerCard {
  Full = "FULL",
  Compact = "COMPACT",
  Minimal = "MINIMAL",
}

function MusicPlayer() {
  const [isLoading, setIsLoading] = useState(false);
  const [playerCard, setPlayerCard] = useState<MusicPlayerCard>(
    MusicPlayerCard.Full
  );

  const [pickedPlayer, setPickedPlayer] = useState({
    player1: "picked",
    player2: "",
    player3: "",
  });

  const [spotifyLogoColor, setSpotifyLogoColor] = useState(false); // initiate it at false

  const [userToken, setUserToken] = useState<string>(() => {
    const storagedSearch = localStorage.getItem("@boraCodar:Spotify");

    if (storagedSearch) {
      return storagedSearch;
    }
    return "";
  });

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("code");

    if (code != null) {
      localStorage.setItem("@boraCodar:Spotify", code);
      searchParams.delete("code");
      setSearchParams(searchParams);
    }
  }, []);

  function pickArtist(artist: string) {
    console.log(artist + " picked.");
  }

  const musicPlayerCard1 = (
    <MusicPlayerCardOne>
      {/* replace alt with album title */}
      <img className='albumCover' src={albumCover} alt='Album Cover' />
      <SongInfo
        playerVersion={playerCard}
        title='Acorda Devinho'
        artist='Banda Rocketseat'
      />
      <PlayerControls playerVersion={playerCard} />
    </MusicPlayerCardOne>
  );

  const musicPlayerCard2 = (
    <MusicPlayerCardTwo>
      {/* replace alt with album title */}
      <div>
        <img className='albumCover' src={albumCover} alt='Album Cover' />
        <SongInfo
          playerVersion={playerCard}
          title='Acorda Devinho'
          artist='Banda Rocketseat'
        />
      </div>
      <PlayerControls playerVersion={playerCard} />
    </MusicPlayerCardTwo>
  );

  const musicPlayerCard3 = (
    <MusicPlayerCardThree>
      {/* replace alt with album title */}
      <div>
        <img className='albumCover' src={albumCover} alt='Album Cover' />
        <SongInfo
          playerVersion={playerCard}
          title='Acorda Devinho'
          artist='Banda Rocketseat'
        />
      </div>
      <PlayerControls playerVersion={playerCard} />
    </MusicPlayerCardThree>
  );

  function pickMusicPlayerCard(playerNumber: number) {
    switch (playerNumber) {
      case 1: {
        setPickedPlayer({ player1: "picked", player2: "", player3: "" });
        setPlayerCard(MusicPlayerCard.Full);
        return musicPlayerCard1;
      }
      case 2: {
        setPickedPlayer({ player1: "", player2: "picked", player3: "" });
        setPlayerCard(MusicPlayerCard.Compact);
        return musicPlayerCard2;
      }
      case 3: {
        setPickedPlayer({ player1: "", player2: "", player3: "picked" });
        setPlayerCard(MusicPlayerCard.Minimal);
        return musicPlayerCard3;
      }
    }
  }

  function tryOut() {
    spotifyApi.get("/auth-spotify").then((res) => {
      console.log(res.data);
    });
  }

  return (
    <MusicPlayerContainer>
      <MusicPlayerContent>
        <h2>challenge - music player</h2>
        <div className='grid'>
          <ArtistsContainer>
            <h3 onClick={tryOut}>pick an artist</h3>
            <p>login to your Spotify account to test the music players</p>
            <a
              href={`https://accounts.spotify.com/authorize?client_id=11a37ffe46ce40a2963b244f1de6e82a&response_type=code&redirect_uri=http://127.0.0.1:5173/music-player`}
              onMouseEnter={() => setSpotifyLogoColor(true)}
              onMouseLeave={() => setSpotifyLogoColor(false)}
            >
              <img
                src={spotifyLogoColor ? spotifyLogoGreen : spotifyLogoBlack}
                alt='Login to Spotify'
              />
            </a>
            <ArtistCell
              onClick={() => pickArtist("Adele")}
              albumCover={
                "https://i.scdn.co/image/ab6761610000e5eb68f6e5892075d7f22615bd17"
              }
              artist={"Adele"}
            />
            <ArtistCell
              onClick={() => pickArtist("Lily Allen")}
              albumCover={
                "https://cdns-images.dzcdn.net/images/cover/bbd5dc34c1e6ebe72dde67c4f908cb67/264x264.jpg"
              }
              artist={"Lily Allen"}
            />
            <ArtistCell
              onClick={() => pickArtist("Meghan Trainor")}
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
                <p
                  className={pickedPlayer.player1}
                  onClick={() => pickMusicPlayerCard(1)}
                >
                  player 1
                </p>
                <span>|</span>
                <p
                  className={pickedPlayer.player2}
                  onClick={() => pickMusicPlayerCard(2)}
                >
                  player 2
                </p>
                <span>|</span>
                <p
                  className={pickedPlayer.player3}
                  onClick={() => pickMusicPlayerCard(3)}
                >
                  player 3
                </p>
              </div>
            </PlayersContainerHeader>
            {(playerCard === MusicPlayerCard.Full && musicPlayerCard1) ||
              (playerCard === MusicPlayerCard.Compact && musicPlayerCard2) ||
              (playerCard === MusicPlayerCard.Minimal && musicPlayerCard3)}
          </PlayersContainer>
        </div>
      </MusicPlayerContent>
    </MusicPlayerContainer>
  );
}

export default MusicPlayer;
