import { createSlice } from '@reduxjs/toolkit';

export const gamesReducer = createSlice({
  name: 'gamesReducer',
  initialState: { all: [], gameDetails: {}, genreDetails: {} },
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
    }
  }
});

export const fetchGenre = (id) => {
  const GENRE_URL = `https://api.rawg.io/api/genres/${id}`;
  return (dispatch) => {
    fetch(GENRE_URL)
      .then((res) => res.json())
      .then((json) =>
        dispatch(gamesReducer.actions.setGenre({ id, genreInfo: json }))
      );
  };
};

export const fetchGame = (slug) => {
  const GAME_URL = `https://api.rawg.io/api/games/${slug}`;
  return (dispatch) => {
    fetch(GAME_URL)
      .then((res) => res.json())
      .then((json) =>
        dispatch(gamesReducer.actions.setGame({ slug, gameInfo: json }))
      );
  };
};

export const fetchGames = () => {
  const GAMES_URL = 'https://api.rawg.io/api/games?ordering=-rating0';
  return (dispatch) => {
    fetch(GAMES_URL)
      .then((res) => res.json())
      .then((json) => dispatch(gamesReducer.actions.setGames(json.results)));
  };
};
