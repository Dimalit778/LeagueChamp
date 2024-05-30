import axios from '../../api/axios';

export const getSingleMatch = async (
  dispatch: Function,
  fixture_id: number,
  type: string = 'load'
) => {
  type === 'load' ? dispatch({ type: 'SINGLE_MATCH_LOADING' }) : {};
  try {
    const { data } = await axios.get(`/fixtures/id/${fixture_id}`);
    return dispatch({
      type: 'GET_SINGLE_MATCH',
      data: data.api.fixtures[0],
    });
  } catch (error) {
    console.log(error.response);
  }
};
export const getRoundMatches = async (
  dispatch: Function,
  round_number: number,
  code: string,
  type: string = 'load'
) => {
  type === 'load' ? dispatch({ type: 'ROUND_MATCHES_LOADING' }) : {};

  try {
    const { data } = await axios.get(
      `competitions/${code}/matches?matchday=${round_number}`
    );
    return dispatch({
      type: 'GET_SINGLE_ROUND',
      data: data,
    });
  } catch (error) {
    console.log(' error ', error.response);
  }
};
