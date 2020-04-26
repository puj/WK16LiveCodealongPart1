/* eslint-disable indent */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GameThumb } from './GameThumb.js';
import { fetchGames } from '../reducers/gamesReducer';

export const GamesList = () => {
  // 1. Migrate this to dispatch
  const dispatch = useDispatch();
  // 2. Use selector instead of state
  const games = useSelector((store) => store.reducer.all);

  useEffect(() => {
    if (games.length) {
      return;
    }
    // 3. Move the fetch to the reducer &  Dispatch a thunk
    dispatch(fetchGames());
  }, [dispatch, games]);

  return (
    <section className="games-list">
      {// Add a link
      games.map((game) => (
        <GameThumb {...game} />
      ))
}
    </section>
  );
};
