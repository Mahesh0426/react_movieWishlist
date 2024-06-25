import { Container } from "react-bootstrap";
import MovieWishlistContainer from "./components/MovieWishlistContainer";

function App() {
  return (
    <Container fluid style={{ backgroundColor: "#cfdbe9" }}>
      <MovieWishlistContainer />
    </Container>
  );
}

export default App;
