import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  leagueStanding: [],
  error: '',
};
export const getLeagueStanding = async (leagueCode: string): Promise<any> => {
  try {
    const response: AxiosResponse = await axios.get(
      `http://api.football-data.org/v4/competitions/${leagueCode}/standings`,
      {
        headers: {
          'X-Auth-Token': 'e44e55e51d5242b8b5d8ac92af329d46',
        },
      }
    );
    const data = response.data.standings[0].table;

    return data;
  } catch (error) {
    console.log(' error ', error.response);
  }
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
