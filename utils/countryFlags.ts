const germany = require('../myAssets/flags/germany_flag.png');
const spain = require('../myAssets/flags/spain_flag.png');
const france = require('../myAssets/flags/france_flag.png');
const italy = require('../myAssets/flags/italy_flag.png');
const england = require('../myAssets/flags/england_flag.png');
export const countryFlags = [
  {
    id: 1,
    code: 'PL',
    name: 'Premier League',
    flagImage: england,
    country: 'England',
    emblem: 'https://crests.football-data.org/PL.png',
  },
  {
    id: 2,
    code: 'PD',
    name: 'La Liga',
    flagImage: spain,
    country: 'Spain',
    emblem: 'https://crests.football-data.org/PD.png',
  },
  {
    id: 3,
    code: 'FL1',
    name: 'Ligue 1',
    flagImage: france,
    country: 'France',
    emblem: 'https://crests.football-data.org/FL1.png',
  },
  {
    id: 4,
    code: 'SA',
    name: 'Serie A',
    flagImage: italy,
    country: 'Italy',
    emblem: 'https://crests.football-data.org/SA.png',
  },
  {
    id: 5,
    code: 'BL1',
    name: 'Bundesliga',
    flagImage: germany,
    country: 'Germany',
    emblem: 'https://crests.football-data.org/BL1.png',
  },
];
