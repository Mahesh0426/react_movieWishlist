import { Col, Row, Tab, Tabs } from "react-bootstrap";
import MovieCard from "./MovieCard";

const MovieWishlist = (props) => {
  const { wishlist = [], removeMovieFromWishlist } = props;

  const actionMovies = wishlist.filter((movie) => movie.Genre === "action");
  const comedyMovies = wishlist.filter((movie) => movie.Genre === "comedy");

  return (
    <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="ml-3">
      <Tab eventKey="all" title="All">
        <Row>
          {wishlist.map((movie) => (
            <Col key={movie.imdbID}>
              <MovieCard
                movie={movie}
                removeMovieFromWishlist={removeMovieFromWishlist}
              />
            </Col>
          ))}
        </Row>
      </Tab>
      <Tab eventKey="action" title="Action">
        <Row>
          {actionMovies.map((movie) => (
            <Col key={movie.imdbID}>
              <MovieCard
                movie={movie}
                removeMovieFromWishlist={removeMovieFromWishlist}
              />
            </Col>
          ))}
        </Row>
      </Tab>
      <Tab eventKey="comedy" title="Comedy">
        <Row>
          {comedyMovies.map((movie) => (
            <Col key={movie.imdbID}>
              <MovieCard
                movie={movie}
                removeMovieFromWishlist={removeMovieFromWishlist}
              />
            </Col>
          ))}
        </Row>
      </Tab>
    </Tabs>
  );
};

export default MovieWishlist;
