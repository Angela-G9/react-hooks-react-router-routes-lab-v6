// src/components/ReusableCard.jsx
import React from 'react';

function ReusableCard({ name, movies }) {
  return (
    <article>
      <h2>{name}</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </article>
  );
}

export default ReusableCard;