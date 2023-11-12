import React from 'react';
import "/src/styles/sidebar.css";

import logo from "/src/images/Spotify-Logo-png-RGB-White.png";
import HomeIcon from "/src/images/homespotify.png";
import SearchIcon from "/src/images/libraryspotify.png";
import LibraryIcon from "/src/images/searchspotify.png";
import FavouritesIcon from "/src/images/favourites-spotify.png";
import Saved from "/src/images/spotify-bookmarks.png";

function Sidebar() {
   // Array of words corresponding to the icons
   const menuItems = [
      { icon: HomeIcon, text: "Home" },
      { icon: SearchIcon, text: "Search" },
      { icon: LibraryIcon, text: "Library" },
      { icon: FavouritesIcon, text: "Liked Songs" },
      { icon: Saved, text: "Saved Episodes" },

   ];

   return (
      <div className="Sidebar">
         <img className="Sidelogo" src={logo} alt="logo" />
         <div className="Sidemenu">
            {menuItems.map((menuItem, index) => (
               <div key={index} className="menu-item">
                  <img className="icon" src={menuItem.icon} alt={menuItem.text} />
                  <span className="menu-text">{menuItem.text}</span>
               </div>
            ))}
         </div>
      </div>
   );
}

export default Sidebar;
