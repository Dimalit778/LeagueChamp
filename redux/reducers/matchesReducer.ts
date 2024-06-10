export const initialState = {
  live: [],
  upcoming: [],

  singleMatch: null,
  singleMatchLoading: false,
  singleRound: [],
  singleRoundLoading: false,

  league: 524,
};

type actionType = {
  type: string;
  data: object;
};

const MatchesReducer = (state: object = initialState, action: actionType) => {
  switch (action.type) {
    case 'SINGLE_MATCH_LOADING':
      return { ...state, singleMatchLoading: true };
    case 'GET_SINGLE_MATCH':
      return { ...state, singleMatch: action.data, singleMatchLoading: false };
    case 'ROUND_MATCHES_LOADING':
      return { ...state, singleRoundLoading: true };
    case 'GET_SINGLE_ROUND':
      return { ...state, singleRound: action.data, singleRoundLoading: false };

    default:
      return state;
  }
};

export default MatchesReducer;
