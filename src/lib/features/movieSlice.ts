/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface MovieListInterface {
  topHomepageMoviesList: {
    status: "pending" | "success" | "failed" | "idle";
    data: any;
  };
  detailMovieData: {
    status: "pending" | "success" | "failed" | "idle";
    data: any;
  };
  topThreeMovies: {
    status: "pending" | "success" | "failed" | "idle";
    data: any;
  };
  movieBySearchList:{
    status: "pending" | "success" | "failed" | "idle";
    data: any;
  },
  windowWidth:number
}

const initialState: MovieListInterface = {
  topHomepageMoviesList: {
    status: "idle",
    data: [],
  },
  detailMovieData: {
    status: "idle",
    data: [],
  },
  topThreeMovies: {
    status: "idle",
    data: [],
  },
  movieBySearchList:{
    status: "idle",
    data: [],
  },
  windowWidth:0
};

export const getTopHomepageMovies: any = createAsyncThunk(
  "movies/getTopHomepageMovie",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `http://www.omdbapi.com/?apikey=9b53f55&s=avengers`
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getMoviesBySearch: any = createAsyncThunk(
    "movies/getMoviesBySearch",
    async ({q }: { q: string }, { rejectWithValue }) => {
      try {
        const res = await axios.get(
          `http://www.omdbapi.com/?apikey=9b53f55&s=${q}`
        );
        return res.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

export const getDetailMovieData: any = createAsyncThunk(
  "movies/getDetailMovieData",
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `http://www.omdbapi.com/?apikey=9b53f55&i=${id}`
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getTopThreeMovies: any = createAsyncThunk(
  "movies/getTopThreeMovies",
  async (_, { rejectWithValue }) => {
    try {
      const resOne = await axios.get(
        `http://www.omdbapi.com/?apikey=9b53f55&i=tt3501632`
      );
      const resTwo = await axios.get(
        `http://www.omdbapi.com/?apikey=9b53f55&i=tt7126948`
      );
      const restThree = await axios.get(
        `http://www.omdbapi.com/?apikey=9b53f55&i=tt3498820`
      );
      const restFour = await axios.get(
        `http://www.omdbapi.com/?apikey=9b53f55&i=tt1216475`
      );
      const restFive = await axios.get(
        `http://www.omdbapi.com/?apikey=9b53f55&i=tt3521164`
      );
      
      return [resOne.data, resTwo.data, restThree.data, restFour.data, restFive.data];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    handleSetMovieListBySearchToEmpty (state) {
        state.movieBySearchList.data = []
    },
    setWindowWidth (state, action) {
      state.windowWidth = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTopHomepageMovies.pending, (state) => {
        state.topHomepageMoviesList.status = "pending";
      })
      .addCase(getTopHomepageMovies.fulfilled, (state, action) => {
        state.topHomepageMoviesList.status = "success";
        state.topHomepageMoviesList.data = action.payload.Search;
      })
      .addCase(getTopHomepageMovies.rejected, (state) => {
        state.topHomepageMoviesList.status = "failed";
      })
      .addCase(getDetailMovieData.pending, (state) => {
        state.detailMovieData.status = "pending";
      })
      .addCase(getDetailMovieData.fulfilled, (state, action) => {
        state.detailMovieData.status = "success";
        state.detailMovieData.data = action.payload;
      })
      .addCase(getDetailMovieData.rejected, (state) => {
        state.detailMovieData.status = "failed";
      })
      .addCase(getTopThreeMovies.pending, (state) => {
        state.topThreeMovies.status = "pending";
      })
      .addCase(getTopThreeMovies.fulfilled, (state, action) => {
        state.topThreeMovies.status = "success";
        state.topThreeMovies.data = action.payload;
      })
      .addCase(getTopThreeMovies.rejected, (state) => {
        state.topThreeMovies.status = "failed";
      })
      .addCase(getMoviesBySearch.pending, (state) => {
        state.movieBySearchList.status = "pending";
      })
      .addCase(getMoviesBySearch.fulfilled, (state, action) => {
        state.movieBySearchList.status = "success";
        state.movieBySearchList.data = action.payload.Search;
      })
      .addCase(getMoviesBySearch.rejected, (state) => {
        state.movieBySearchList.status = "failed";
      });
  },
});

export default movieSlice.reducer;
export const { handleSetMovieListBySearchToEmpty, setWindowWidth} = movieSlice.actions
