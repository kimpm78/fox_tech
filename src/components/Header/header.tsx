import React, { useState } from 'react';
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  Offcanvas,
} from 'react-bootstrap';
import './header.css';

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    localStorage.getItem('isLoggedIn') === 'true',
  );
  // ローカルのストレージからログイン情報削除
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <>
      <Navbar expand="xl" className="bg-color" data-bs-theme="white">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              className="logo"
              src="src/assets/Fox_Tech_Logo.svg"
              alt="fox_tech_logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas id="offcanvasNavbar" placement="end">
            <Offcanvas.Header
              closeButton
              style={{ backgroundColor: '#f98351', height: '100px' }}
            >
              <Offcanvas.Title>Fox Tech</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-5 nav-container">
                {!['/SignIn', '/SignUp'].includes(window.location.pathname) && (
                  <>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#TrendingTopic">Trending</Nav.Link>
                    <Nav.Link href="#Blog">Blog</Nav.Link>
                    <Nav.Link href="#About">About</Nav.Link>
                    <Nav.Link href="/SignUp">SignUp</Nav.Link>
                  </>
                )}
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  className="me-2 nav-input"
                  placeholder="Search"
                  aria-label="Search"
                />
                {isLoggedIn ? (
                  <Button
                    className="nav-submit"
                    variant="dark"
                    onClick={handleLogout}
                  >
                    ログアウト
                  </Button>
                ) : (
                  <Button className="nav-submit" href="/SignIn" variant="dark">
                    ログイン
                  </Button>
                )}
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
