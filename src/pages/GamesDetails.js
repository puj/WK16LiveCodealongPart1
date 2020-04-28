/* eslint-disable indent */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useHistory } from "react-router-dom";
import { Circular } from "styled-loaders-react";
import { fetchGame, gamesReducer } from "../reducers/gamesReducer";
import { ReusableGameThumb } from "../components/ReusableGameThumb.js";

export const GamesDetails = () => {
  const { slug } = useParams();

  // 1. Use dispatch to fetch this particular game
  const dispatch = useDispatch();

  // 3. Use useSelector to get the game details
  const game = useSelector((store) => store.reducer.gameDetails[slug]);
  const loading = useSelector((store) => store.reducer.loading);

  const history = useHistory();
  const [statusCode, setStatusCode] = useState(200);

  useEffect(() => {
    // 4. Prevent reloading if we have the data from redux
    if (game) {
      return;
    }
    dispatch(fetchGame(slug));
  }, [dispatch, game, slug]);

  useEffect(() => {
    console.log(`Status code: ${statusCode}`);
    if (statusCode !== 200) {
      // Do something here to avoid showing an error to the user
      history.push("/games");
    }
  }, [history, statusCode]);

  if (loading || !game) {
    return <Circular color="white" size="200px" />;
  }

  return (
    <section className="game-details">
      <h2>{game.name}</h2>
      <h3>Rating: {game.rating}</h3>
      <section className="game-overview">
        <img src={game.background_image} alt={game.name} />
        <section className="game-stats">
          <h3>
            Genre: <br />
            {game.genres.map((genre) => (
              <ReusableGameThumb
                href={`/genres/${genre.id}`}
                name={genre.name}
                description={genre.description}
                background_image={genre.image_background}
                size="100px" />
            ))}
          </h3>
        </section>
      </section>
    </section>
  );
};
