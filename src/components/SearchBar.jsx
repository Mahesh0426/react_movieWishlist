import React, { useRef } from "react";
import { Button, Form, Nav, Navbar, Container } from "react-bootstrap";

const SearchBar = (props) => {
  const { searchMovie } = props;
  const searchInputRef = useRef(null);

  const handleOnClick = (searchInputRef) => {
    searchMovie(searchInputRef.current.value);
    searchInputRef.current.value = "";
  };

  return (
    <>
      <Navbar className="sticky-top bg-dark">
        <Container className="d-flex justify-content-between align-items-center">
          <Nav className="me-auto">
            <h1 className="text-white">Wishlist App</h1>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              size="lg"
              type="text"
              placeholder="Enter movie title"
              ref={searchInputRef}
              className="mx-3"
            />
            <Button
              variant="outline-primary"
              size="lg"
              onClick={() => handleOnClick(searchInputRef)}
            >
              Search
            </Button>
          </Form>
        </Container>
      </Navbar>
    </>
  );
};

export default SearchBar;
