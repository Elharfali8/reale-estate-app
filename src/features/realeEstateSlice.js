// src/features/realEstateSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Replace 'YOUR_API_KEY' with your actual API key from Realty Mole
const API_KEY = 'b7c83a4c91mshbdcc4ded5f5912dp19a8f2jsnc1e964184b60';
const API_HOST = 'realty-in-us.p.rapidapi.com';
const API_ENDPOINT = 'https://realty-in-us.p.rapidapi.com/properties/v3/list';

// Fetch properties action
export const fetchProperties = createAsyncThunk('realEstate/fetchProperties', async (postalCode) => {
  const options = {
    method: 'POST',
    url: API_ENDPOINT,
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': API_HOST,
      'Content-Type': 'application/json',
    },
    data: {
      limit: 200,
      offset: 0,
      postal_code: postalCode,
      status: [
        'for_sale',
        'ready_to_build',
      ],
      sort: {
        direction: 'desc',
        field: 'list_date',
      },
    },
  };

    const response = await axios.request(options);
    console.log(response);
  return response.data;
});

// Create a slice
const realEstateSlice = createSlice({
  name: 'realEstate',
  initialState: {
    properties: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.properties = action.payload.data.home_search.results;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default realEstateSlice.reducer;
