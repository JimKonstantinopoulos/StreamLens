import { useEffect } from "react";

export default function Content() {
  let uniqueGenres = [];
  useEffect(() => {
    async function getShows() {
      const res = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.tvmaze.com/shows`
      );
      const data = await res.json();
      const genres = [];
      data.forEach((movie) => {
        genres.push(movie.genres);
      });

      uniqueGenres = [...new Set(genres.flat())];
    }

    getShows();
  }, []);
  return <p>content</p>;
}
