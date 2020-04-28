import { createSlice } from "@reduxjs/toolkit";

export const gamesReducer = createSlice({
  name: "gamesReducer",
  initialState: { all: [], gameDetails: {}, genreDetails: {}, loading: true },
  reducers: {
    setGames: (state, action) => {
      state.all = action.payload;
    },
    setGame: (state, action) => {
      const { slug, gameInfo } = action.payload;
      state.gameDetails[slug] = gameInfo;
    },
    setGenre: (state, action) => {
      const { id, genreInfo } = action.payload;
      state.genreDetails[id] = genreInfo;
    },
    setLoading: (state, action) => {
      state.loading = action.payload.loading;
    }
  }
});

export const fetchGenre = (id) => {
  const GENRE_URL = `https://api.rawg.io/api/genres/${id}`;
  return (dispatch) => {
    dispatch(gamesReducer.actions.setLoading({ loading: true }));
    fetch(GENRE_URL)
      .then((res) => res.json())
      .then((json) => {
        dispatch(gamesReducer.actions.setGenre({ id, genreInfo: json }));
        dispatch(gamesReducer.actions.setLoading({ loading: false }));
      });
  };
};

export const fetchGame = (slug) => {
  const GAME_URL = `https://api.rawg.io/api/games/${slug}`;
  return (dispatch) => {
    dispatch(gamesReducer.actions.setLoading({ loading: true }));
    fetch(GAME_URL)
      .then((res) => res.json())
      .then((json) => {
        dispatch(gamesReducer.actions.setGame({ slug, gameInfo: json }));
        dispatch(gamesReducer.actions.setLoading({ loading: false }));
      });
  };
};

export const fetchGames = () => {
  const GAMES_URL = "https://api.rawg.io/api/games?ordering=-rating0";
  return (dispatch) => {
    dispatch(gamesReducer.actions.setLoading({ loading: true }));
    fetch(GAMES_URL)
      .then((res) => res.json())
      .then((json) => {
        dispatch(gamesReducer.actions.setGames(json.results));
        dispatch(gamesReducer.actions.setLoading({ loading: false }));
      });
  };
};
