import "/src/styles/navbar.css";
import Play from "/src/images/playspotify.png";
import Sound from "/src/images/sound-spotify.png";
import Plus from "/src/images/plus-spotify.png";
import { RecentlyPlayed } from "../data";


function Navbar() {
   return (

      <div className="navbar">
         <div className="menu">
          <div className="reproduction">
               <img className="albumCover" src={ RecentlyPlayed[4].image} alt="logo"/>
               <div className="info">
               <h2>{RecentlyPlayed[4].user}</h2>
               <h3>{RecentlyPlayed[4].info}</h3>
               </div>
               <img className="pls" src={Plus} alt="logo" />
            </div>
            <img className="play" src={Play} alt="logo" />
            <img className="sound" src={Sound} alt="logo" />
         </div>
      </div>

   );
}

export default Navbar;
