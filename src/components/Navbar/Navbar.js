import React, { Component } from "react";
import logo from "../../logo.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

export default class DefNavbar extends Component {
  // constructor
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  // toggle method
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  // render method
  render() {
    return (
      <Navbar color="inverse" light expand="md">
        <Container>
          <NavbarBrand href="/">
            <div style={{ display: "flex", flex: 1 }}>
              <img
                width="30px"
                height="30px"
                className="align-top rounded"
                style={{ marginRight: 10 }}
                src={logo}
                alt="Logo"
              />
              <div>Thinkspaces</div>
            </div>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem outline color = "danger">
                <NavLink href="/signupin">Sign Up/In</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
