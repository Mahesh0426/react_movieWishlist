import axios from "axios";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import { Stack, Spinner } from "react-bootstrap";
import MovieCard from "./MovieCard";
import AddToWishlist from "./AddToWishlist";
import MovieWishlist from "./MovieWishlist";

const API_URL =
  "http://www.omdbapi.com/?i=tt3896198&apikey=64de0b37&type=movie&t=";

const MovieWishlistContainer = () => {
  const [searchedMovie, setSearchedMovie] = useState({});
  const [wishlist, setWishlist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Function to search the movie
  const searchMovie = async (movieTitle) => {
    try {
      // set isLoading to true
      setIsLoading(true);
      const response = await axios.get(API_URL + movieTitle);
      // if response.data set isLoading to false
      setIsLoading(false);
      setSearchedMovie(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Function to add movies to wishlist
  const addMovieToWishlist = (movie) => {
    setWishlist([...wishlist, movie]);
  };
  // Function to remove from wishlist
  const removeMovieFromWishlist = (movieId) => {
    const updatedWishlist = wishlist.filter((item) => item.imdbID != movieId);

    setWishlist(updatedWishlist);
  };

  // useEffect(()=>{}, [dependency array])

  useEffect(() => {
    searchMovie("Thor");
  }, []);

  return (
    <>
      {/* Search Bar */}
      <SearchBar searchMovie={searchMovie} />
      {/* Condtional rendering */}
      {isLoading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      <br />
      {/* Search Result */}
      {/* Condtional rendering */}
      {!isLoading && (
        <Stack
          direction="horizontal"
          gap={4}
          className="d-flex flex-column flex-sm-row  mt-3"
        >
          <MovieCard movie={searchedMovie} />
          {/* Add to wishlist */}
          <AddToWishlist
            movie={searchedMovie}
            addMovieToWishlist={addMovieToWishlist}
            wishlist={wishlist}
          />
        </Stack>
      )}
      <br /> {/* wishlist section */}
      <MovieWishlist
        wishlist={wishlist}
        removeMovieFromWishlist={removeMovieFromWishlist}
      />
    </>
  );
};

export default MovieWishlistContainer;
