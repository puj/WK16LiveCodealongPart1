/* eslint-disable indent */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Circular } from "styled-loaders-react";
import { ReusableGameThumb } from "./ReusableGameThumb.js";
import { fetchGames } from "../reducers/gamesReducer";

export const GamesList = () => {
  // 1. Migrate this to dispatch
  const dispatch = useDispatch();
  // 2. Use selector instead of state
  const games = useSelector((store) => store.reducer.all);
  const loading = useSelector((store) => store.reducer.loading);

  useEffect(() => {
    if (games.length) {
      return;
    }
    // 3. Move the fetch to the reducer &  Dispatch a thunk
    dispatch(fetchGames());
  }, [dispatch, games]);

  if (loading) {
    return <Circular color="white" size="200px" />;
  }

  return (
    <section className="games-list">
      {// Add a link
      games.map((game) => (
        <ReusableGameThumb
          href={`/games/${game.slug}`}
          description={game.rating}
          {...game} />
      ))
}
    </section>
  );
};
