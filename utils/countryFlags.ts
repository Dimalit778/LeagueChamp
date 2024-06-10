const germany = require('../myAssets/flags/germany_flag.png');
const spain = require('../myAssets/flags/spain_flag.png');
const france = require('../myAssets/flags/france_flag.png');
const italy = require('../myAssets/flags/italy_flag.png');
const england = require('../myAssets/flags/england_flag.png');
export const countryFlags = [
  {
    id: 1,
    code: 'PL ',
    name: 'Premier League',
    flagImage: england,
    country: 'England',
  },
  {
    id: 2,
    code: 'PD',
    name: 'La Liga',
    flagImage: spain,
    country: 'Spain',
  },
  {
    id: 3,
    code: 'FL1',
    name: 'Ligue 1',
    flagImage: france,
    country: 'France',
  },
  {
    id: 4,
    code: 'SA',
    name: 'Serie A',
    flagImage: italy,
    country: 'Italy',
  },
  {
    id: 5,
    code: 'BL1',
    name: 'Bundesliga',
    flagImage: germany,
    country: 'Germany',
  },
];
