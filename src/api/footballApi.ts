import axios, { AxiosResponse } from 'axios';

export const getRound = async (
  leagueCode: string,
  matchDay: number
): Promise<any> => {
  try {
    const response: AxiosResponse = await axios.get(
      `http://api.football-data.org/v4/competitions/${leagueCode}/matches/?matchday=${matchDay}`,
      {
        headers: {
          'X-Auth-Token': 'e44e55e51d5242b8b5d8ac92af329d46',
        },
      }
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.log(' error ', error.response);
  }
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
    const data = response.data;

    return data;
  } catch (error) {
    console.log(' error ', error.response);
  }
};
