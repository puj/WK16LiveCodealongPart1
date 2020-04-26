/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { fetchGenre, gamesReducer } from '../reducers/gamesReducer';

export const GenreDetails = () => {
  const { id } = useParams();
  // 1. Use dispatch to fetch this particular genre
  const dispatch = useDispatch();

  // 3. Use useSelector to get the genre details
  const genreDetails = useSelector((store) => store.reducer.genreDetails);
  const genre = genreDetails.hasOwnProperty(id) ? genreDetails[id] : null;

  useEffect(() => {
    // 4. Prevent reloading if we have the data from redux
    if (genre) {
      return;
    }
    dispatch(fetchGenre(id));
  }, [dispatch, genre, id]);

  if (!genre) {
    return <></>;
  }

  // Do things that are okay
  return (
    <section className="game-details">
      <h2>{genre.name}</h2>
      <section className="game-overview">
        <img src={genre.image_background} alt={genre.name} />
        <section className="game-stats">
          <h3>Games Count: {genre.games_count}</h3>
          <p>Description: {unescape(genre.description)}</p>
        </section>
      </section>
    </section>
  );
};
