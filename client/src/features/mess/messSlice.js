import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMess, createMess } from '../../api';

const initialState = {
  messArray: [],
};

// Async thunk for fetching mess data
export const fetchMessArray = createAsyncThunk('messArray/fetchMessArray', async () => {
  const response = await getMess();
  return response.data;
});

// Async thunk for creating new mess
export const addNewMess = createAsyncThunk('messArray/addNewMess', async (newMess) => {
  const response = await createMess(newMess);
  return response.data;
});

const messSlice = createSlice({
  name: 'messArray',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessArray.fulfilled, (state, action) => {
        state.messArray = action.payload;
      })
      .addCase(addNewMess.fulfilled, (state, action) => {
        state.messArray.push(action.payload);
      });
  },
});

export default messSlice.reducer;
