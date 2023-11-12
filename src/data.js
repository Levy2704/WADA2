//---------------------------
// Stub Data
//---------------------------

/*
LOCAL IMAGES.

there are TWO ways to do it : 

1. import the image using an import statement at the top of the page

2. use require

the first object in the list below uses the import method to import hammer.js
see how you need to add an import line to the top of the page.

the second object uses the require method.
you dont need an import statement at the top of the page. 





*/

import Metalica from "/src/images/metalica.jpg";
import Maneskin from "/src/images/maneskin.jpg";
import GunsRoses from "/src/images/appetite-for-destruction.jpg";
import RufusDuSol from "/src/images/RufusDuSol.jpg";
import WhoMadeWho from "/src/images/whomadewho.jpg";
import Playlist1 from "/src/images/playlist1.png";
import Playlist2 from "/src/images/playlist2.png";
import Playlist3 from "/src/images/playlist3.png";
import Playlist5 from "/src/images/playlist5.png";

var RecentlyPlayed = [
  {
    image: Metalica,
    user: "Nothing else matters",
    info: "Metalica",
    id: 1
  },

  {
    image: Maneskin,
    user: "Rush",
    info: "Maneskin",
    id: 2
  },
  {
    image: GunsRoses,
    user: "Welcome to the jungle",
    info: "Gun's and Roses",
    id: 3
  },
  {
    image: RufusDuSol,
    user: "On my Kness",
    info: "RufusDuSol",
    id: 4
  },
  {
    image: WhoMadeWho,
    user: "WhoMadeWho",
    info: "Miracle",
    id: 5
  }
];
var NewforU = [
  {
    image: RufusDuSol,
    user: "On my Kness",
    info: "RufusDuSol",
    id: 1
  },
  {
    image: WhoMadeWho,
    user: "WhoMadeWho",
    info: "Miracle",
    id: 2
  },
  {
    image: Maneskin,
    user: "Gasoline",
    info: "Maneskin",
    id: 3
  },
  {
    image: Metalica,
    user: "Nothing else matters",
    info: "Metalica",
    id: 4
  },
  {
    image: GunsRoses,
    user: "Welcome to the jungle",
    info: "Gun's and Roses",
    id: 5
  }
];
var Playlists = [
  {
    image: Playlist1,
    user: "Pop",
    info: "Metalica",
    id: 1
  },

  {
    image: Playlist2,
    user: "Good Vibes",
    info: "Maneskin",
    id: 2
  },
  {
    image: Playlist3,
    user: "R&B",
    info: "Gun's and Roses",
    id: 3
  },
  {
    image: Playlist5,
    user: "Rock",
    info: "RufusDuSol",
    id: 4
  },
  {
    image: WhoMadeWho,
    user: "WhoMadeWho",
    info: "Techno",
    id: 5
  }
];

export { RecentlyPlayed, NewforU, Playlists};
