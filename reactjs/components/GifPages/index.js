import React from 'react';
import Gifs from '../../components/Gifs';

const GifPages = () => (
  <div>
    <nav className="navbar navbar-dark bg-primary mb-4">
      <span className="navbar-brand mb-0 h1">The SystemSeed Giphy Client</span>
    </nav>
    <div className="container">
      <Gifs />
    </div>
  </div>
);

export default GifPages;
