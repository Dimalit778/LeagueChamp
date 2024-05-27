import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getLeague = createAsyncThunk('getLeague', async () => {
  try {
    const { data } = await axios.get(
      'https://api.football-data.org/v4/competitions/PL',
      {
        headers: { 'X-Auth-Token': 'e44e55e51d5242b8b5d8ac92af329d46' },
      }
    );

    return data;
  } catch (err) {
    console.log(err);
  }
});
