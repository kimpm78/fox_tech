import React from 'react'
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  Offcanvas,
} from 'react-bootstrap'
import './header.css'

const Header: React.FC = () => {
  return (
    <>
      {['xl'].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-color"
          data-bs-theme="white"
        >
          <Container fluid>
            <Navbar.Brand href="/">
              <img
                className="logo"
                src="src/assets/Fox_Tech_Logo.svg"
                alt="fox_tech_logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Fox_Tech
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-5 nav-container">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="#TrendingTopic">Trending</Nav.Link>
                  <Nav.Link href="#Blog">Blog</Nav.Link>
                  <Nav.Link href="#About">About</Nav.Link>
                  <Nav.Link href="/SignUp">SignUp</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    className="me-2 nav-input"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <Button href="/SignIn" className="nav-submit" variant="dark">
                    ログイン
                  </Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default Header