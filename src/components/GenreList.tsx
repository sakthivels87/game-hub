import React, { useEffect } from "react";
import useGenres from "../hooks/useGenre";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  return (
    <div>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;