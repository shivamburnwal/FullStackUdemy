import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieDetailsApi } from "./Api";
import MovieDetails from "./MovieDetails";
import Hero from "./Hero";

const MovieView = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    MovieDetailsApi(id)
      .then((data) => {
        setMovieDetails(() => data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [id]);

  function renderMovieView() {
    if (isLoading) {
      return <Hero text={"Loading..."} />;
    }

    if (movieDetails) {
      const backgroundImageUrl = `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`;

      return (
        <>
          <Hero
            text={movieDetails.original_title}
            backgroundImage={backgroundImageUrl}
          />
          <MovieDetails movie={movieDetails} />
        </>
      );
    }
  }

  return renderMovieView();
};

export default MovieView;
