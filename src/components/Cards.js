import "/src/styles/cards.css";
import Card from "./Card";
import Playlist from "./Playlist"

import { RecentlyPlayed, NewforU, Playlists } from "../data";

function Cards() {
  return (
    <div className="cards">
      <h2>Playlist</h2>
        <div className="playlists">
          {Playlists.map((Play) => (
            <Playlist
              image={Play.image}
              user={Play.user}
              info={Play.info}
              key={Play.id}
            />
          ))}
        </div>
      <h2>Recently Played</h2>
      <div className="row">
        {RecentlyPlayed.map((RecentlyPlay) => (
          <Card
            image={RecentlyPlay.image}
            user={RecentlyPlay.user}
            info={RecentlyPlay.info}
            key={RecentlyPlay.id}
          />
        ))}
      </div>
      <h2>New for you</h2>
      <div className="row">
        {NewforU.map((ForU) => (
          <Card
            image={ForU.image}
            user={ForU.user}
            info={ForU.info}
            key={ForU.id}
          />
        ))}
      </div>
      <h2>Latest addition</h2>
      <div className="row">
        {NewforU.map((ForU) => (
          <Card
            image={ForU.image}
            user={ForU.user}
            info={ForU.info}
            key={ForU.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
