import { ImageSourcePropType } from 'react-native';

export type Movies = {
  id: string;
  name: string;
  image: ImageSourcePropType;
  genres: string[];
  duration: string;
  year: number;
  rate: number;
  favorite: boolean;
  general_review: string;
};

export const movies: Movies[] = [
  {
    id: '1',
    name: 'Frieren',
    image: require('../assets/images/frieren.jpg'),
    genres: ['Anime', 'Magic', 'Shonen'],
    duration: '15:12:00',
    year: 2023,
    rate: 10.0,
    favorite: false,
    general_review:
      'Amazing anime, worth of all minutes you spend on it. Brings all kinds of reflections about life and time.',
  },
  {
    id: '2',
    name: 'Fullmetal Alchemist Brotherhood',
    image: require('../assets/images/fullmetal_alchemist_brotherhood.jpg'),
    genres: ['Anime', 'Seinen', 'Action'],
    duration: '25:36:00',
    year: 2009,
    rate: 10.0,
    favorite: false,
    general_review: 'Absolute cinema. Best of all times they say. A must if you have good taste.',
  },
  {
    id: '3',
    name: 'Death Note',
    image: require('../assets/images/death_note.jpg'),
    genres: ['Anime', 'Seinen', 'Investigation'],
    duration: '',
    year: 2026,
    rate: 8.2,
    favorite: false,
    general_review:
      'A classic. May be full of script fails, but still an icon if you are talking about y2k fashion and culture.',
  },
  {
    id: '4',
    name: 'Banana Fish',
    image: require('../assets/images/banana_fish.jpg'),
    genres: ['Anime', 'Crime', 'Investigation'],
    duration: '09:17:00',
    year: 2018,
    rate: 9.6,
    favorite: false,
    general_review:
      'A brutal investigation piece, guides you into a real interesting trama. Watch only if you got the guts, by your own will.',
  },
  {
    id: '5',
    name: 'Shingeki no Kyojin',
    image: require('../assets/images/shingeki_no_kyojin.jpg'),
    genres: ['Anime', 'Seinen', 'Distopia'],
    duration: '34:50:00',
    year: 2013,
    rate: 9.2,
    favorite: false,
    general_review:
      'The trama is complex and well written. No matter how many times you watch, you always notice something new.',
  },
  {
    id: '6',
    name: 'Dungeon Meshi',
    image: require('../assets/images/dungeon_meshi.jpg'),
    genres: ['Anime', 'Shonen', 'Medieval'],
    duration: '10:32:00',
    year: 2014,
    rate: 9.6,
    favorite: false,
    general_review:
      'We can tell this anime is done with lots of love. A real cozy medieval fantasy, great to just relax. I recommend you to grab a snack.',
  },
  {
    id: '7',
    name: 'Ansatsu Kyoushitsu',
    image: require('../assets/images/ansatsu_kyoushitsu.jpg'),
    genres: ['Anime', 'Shonen', 'Action'],
    duration: '18:48:00',
    year: 2025,
    rate: 9.6,
    favorite: false,
    general_review:
      'Well well well.... A really good action anime, but it was made with one and only goal: to make you cry. It will make you wanna go back to high school too, maybe.',
  },
  {
    id: '8',
    name: 'Hunter X Hunter',
    image: require('../assets/images/hunter_x_hunter.jpg'),
    genres: ['Anime', 'Shonen', 'Adventure'],
    duration: '56:00:00',
    year: 2011,
    rate: 10.0,
    favorite: false,
    general_review:
      'The only negative thing I can say about this anime is that it is not finished yet. Just watch it, already.',
  },
];
