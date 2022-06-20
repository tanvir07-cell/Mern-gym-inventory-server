import { signOut } from "firebase/auth";
import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import DarkMode from "../../../DarkMode/DarkMode";
import auth from "../../../Firebase/Firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="header"
        fixed="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            Gym Inventory
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/inventory">
                Inventory
              </Nav.Link>
              {user && (
                <Nav.Link as={Link} to="/manageItem">
                  Manage Items
                </Nav.Link>
              )}
            </Nav>
            <Nav>
              {user ? (
                <Nav.Link as={Link} to="" onClick={() => signOut(auth)}>
                  LogOut
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}

              {user && (
                <div>
                  <Nav.Link as={Link} to="/">
                    Add items
                  </Nav.Link>
                </div>
              )}

              {user ? (
                <Nav.Link eventKey={2} as={Link} to="/account">
                  My Items
                </Nav.Link>
              ) : (
                <Nav.Link eventKey={2} href="#memes">
                  Blog
                </Nav.Link>
              )}
              {/* <Nav.Link eventKey={2} href="#memes">
                Blog
              </Nav.Link> */}

              <DarkMode></DarkMode>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
