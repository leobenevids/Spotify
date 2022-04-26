import rock from "./Assets/Covers/rock.jpeg";
import pop from "./Assets/Covers/pop.jpeg";
import hiphop from "./Assets/Covers/hiphop.jpeg";
import indie from "./Assets/Covers/indie.jfif";

import highwaytohell from "./Assets/Tracks/Rock/highwaytohell.mp3";
import paradisecity from "./Assets/Tracks/Rock/paradisecity.mp3";
import aceofspades from "./Assets/Tracks/Rock/aceofspades.mp3"
import jealousyjealousy from "./Assets/Tracks/Pop/jealousyjealousy.mp3";
import breakmyheart from "./Assets/Tracks/Pop/breakmyheart.mp3";
import needtoknow from './Assets/Tracks/Pop/needtoknow.mp3'
import gangstagangsta from "./Assets/Tracks/HipHop/gangstagangsta.mp3";
import youknowhowwedoit from "./Assets/Tracks/HipHop/youknowhowwedoit.mp3";
import goosebumps from './Assets/Tracks/HipHop/goosebumps.mp3'
import doiwannaknow from "./Assets/Tracks/Indie/doiwannaknow.mp3";
import electricfeel from "./Assets/Tracks/Indie/electricfeel.mp3";
import pumpedupkicks from "./Assets/Tracks/Indie/pumpedupkicks.mp3";

export const PlaylistsData = [
  {
    id: 1,
    name: "Rock",
    cover: rock,
    tracks: [
      {
        id: 1,
        name: "Highway to Hell",
        audio: highwaytohell,
      },
      {
        id: 2,
        name: "Paradise City",
        audio: paradisecity,
      },
      {
        id: 3,
        name: "Ace of Spades",
        audio: aceofspades,
      }
    ],
  },
  {
    id: 2,
    name: "Pop",
    cover: pop,
    tracks: [
      {
        id: 1,
        name: "Jealousy Jealousy",
        audio: jealousyjealousy,
      },
      {
        id: 2,
        name: "Break my Heart",
        audio: breakmyheart,
      },
      {
        id: 3,
        name: "Need to Know",
        audio: needtoknow,
      }
    ],
  },
  {
    id: 3,
    name: "Hip-Hop",
    cover: hiphop,
    tracks: [
      {
        id: 1,
        name: "Gangsta Gangsta",
        audio: gangstagangsta,
      },
      {
        id: 2,
        name: "You Know How We Do It",
        audio: youknowhowwedoit,
      },
      {
        id: 3,
        name: "Goosebumps",
        audio: goosebumps,
      }
    ],
  },
  {
    id: 4,
    name: "Indie",
    cover: indie,
    tracks: [
      {
        id: 1,
        name: "Do I Wanna Know",
        audio: doiwannaknow,
      },
      {
        id: 2,
        name: "Electric Feel",
        audio: electricfeel,
      },
      {
        id: 3,
        name: "Pumped Up Kicks",
        audio: pumpedupkicks,
      }
    ],
  },
];
