import { signOut } from "firebase/auth";
import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import DarkMode from "../../../DarkMode/DarkMode";
import auth from "../../../Firebase/Firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <header className="header">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className="nav-brand">
            Muscle Mania
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
                  <Nav.Link as={Link} to="/addItem">
                    Add items
                  </Nav.Link>
                </div>
              )}

              {user ? (
                <Nav.Link eventKey={2} as={Link} to="/account">
                  My Items
                </Nav.Link>
              ) : (
                <Nav.Link eventKey={2} to="/blog" as={Link}>
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
