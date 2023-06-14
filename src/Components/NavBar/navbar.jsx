import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-bootstrap';
import './navbar.css'

function navbar(props) {
  const value = props.nav1;
  const value2 = props.nav2;
  const value3 = props.nav3;
  
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href="/" >APNAPLATFORM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink href="/home" className={({ isActive }) => isActive ? "active" : ""}>{value3}</NavLink>
            <NavLink href={value}>{props.nav1}</NavLink>
            <NavLink href={value2}>{props.nav2}</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;