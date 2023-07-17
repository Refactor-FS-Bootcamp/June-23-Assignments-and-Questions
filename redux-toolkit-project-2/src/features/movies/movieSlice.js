import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async () => {
    const response = await movieApi.get(`movie?api_key=${APIKey}`);
    return response.data.results;
})

const initialState = {
    movies: []
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log("Fetched Sucessfully");
            return { ...state, movies: payload }
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected!")
        }
    }
})

export const { addMovies } = movieSlice.actions;
export const getAllMovies = state => state.movies.movies;
export default movieSlice.reducer;