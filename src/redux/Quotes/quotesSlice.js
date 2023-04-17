import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchQuotes = createAsyncThunk(
    'quotes/loadQuotes',
    async(URL) => {
        try{
            const response = await fetch(URL, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '584cee3d4cmshbc7ed3c23b24627p11e5c4jsn1dfbb3334930',
                    'X-RapidAPI-Host': 'quotes-by-api-ninjas.p.rapidapi.com'
                }
            });
            const data = response.json();
            return data
        }
        catch(error){
            console.log(error)
            throw error
        }
    }
);

export const quotesSlice = createSlice(
    {
        name: 'quotes',
        initialState: {
            quotes: [],
            isLoading: false,
            hasError: false, 
        },
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(fetchQuotes.pending, (state) => {
                    state.isLoading = true;
                    state.hasError = false;
                })
                .addCase(fetchQuotes.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.hasError = false;
                    state.quotes = action.payload;
                })
                .addCase(fetchQuotes.rejected, (state) => {
                    state.isLoading = false;
                    state.hasError = true;
                })
        }
    }
);

export const quotesReducer = quotesSlice.reducer;
export const selectQuotes = state => state.quotes; 
