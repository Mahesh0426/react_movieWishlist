import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const MovieCard = (props) => {
  const { movie = {}, removeMovieFromWishlist } = props;

  const { Title, Poster, Year, Actors } = movie;

  const handleOnClick = () => {
    if (window.confirm("are you sure you want to remove?")) {
      removeMovieFromWishlist(movie.imdbID);
    }
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Poster} height={300} />
      <Card.Body>
        <Card.Title>
          {Title}({Year})
        </Card.Title>
        <Card.Text>
          <h5>Actors:</h5>
          {Actors}
        </Card.Text>
      </Card.Body>

      {removeMovieFromWishlist && (
        <Card.Footer>
          <Button variant="danger" onClick={handleOnClick}>
            Remove
          </Button>
        </Card.Footer>
      )}
    </Card>
  );
};

export default MovieCard;
