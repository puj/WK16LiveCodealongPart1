import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GamesList } from '../components/GamesLists.js';
import { GamesDetails } from './GamesDetails.js';
import { GenreDetails } from './GenreDetails.js';

export const Home = () => {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" exact>
            <div>Hello, this home.</div>
          </Route>

          <Route path="/games" exact>
            <GamesList />
          </Route>

          <Route path="/games/:slug" exact>
            <GamesDetails />
          </Route>

          <Route path="/genres/:id" exact>
            <GenreDetails />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
};
