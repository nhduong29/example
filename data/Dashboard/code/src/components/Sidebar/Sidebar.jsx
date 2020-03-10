/*!

=========================================================
* FFB Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/FFB-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/FFB-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// reactstrap components
import {
  Button,
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Media,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

import FilterContainer from 'components/FFB/FilterContainer.jsx'

var ps;

class Sidebar extends React.Component {
  state = {
    collapseOpen: false
  };
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
  }

  

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  // toggles collapse between opened and closed (true/false)
  toggleCollapse = () => {
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  // closes the collapse
  closeCollapse = () => {
    this.setState({
      collapseOpen: false
    });
  };
  // creates the links that appear in the left menu / Sidebar
  createLinks = routes => {
    return routes.map((prop, key) => {
      return (
        <NavItem key={key}>
          <NavLink
            to={prop.layout + prop.path}
            tag={NavLinkRRD}
            onClick={this.closeCollapse}
            activeClassName="active"
          >
            <i className={prop.icon} />
            {prop.name}
          </NavLink>
        </NavItem>
      );
    });
  };

  getFilterData = (data) =>{
    this.props.onFilter(data);
  }
  render() {
    const { bgColor, routes, logo } = this.props;
    let navbarBrandProps;
    if (logo && logo.innerLink) {
      navbarBrandProps = {
        to: logo.innerLink,
        tag: Link
      };
    } else if (logo && logo.outterLink) {
      navbarBrandProps = {
        href: logo.outterLink,
        target: "_blank"
      };
    }
    const greeting = 'Welcome to React';
    return (
      <Navbar
        className="navbar-vertical fixed-left"
        expand="md"
        id="sidenav-main"
      >
        <Container fluid>
          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleCollapse}
          >
            <span className="navbar-toggler-icon" >
            <i className="fas fa-align-left"></i>
            </span>
          </button>
          <Nav className="align-items-center d-md-none">
            <UncontrolledDropdown nav>
              <DropdownToggle nav>
                <button className="navbar-toggler">
                  <i className="fas fa-bars"></i>
                </button>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <DropdownItem to="/" tag={Link}>
                  <i className="ni ni-chart-pie-35" />
                  <span>Overview</span>
                </DropdownItem>
                <DropdownItem to="/" tag={Link}>
                  <i className="ni ni-ui-04" />
                  <span>KPI Comparison</span>
                </DropdownItem>
                <DropdownItem to="/" tag={Link}>
                  <i className="ni ni-square-pin" />
                  <span>Base Map</span>
                </DropdownItem>
                <DropdownItem to="/" tag={Link}>
                  <i className="ni ni-bell-55" />
                  <span>Alerts</span>
                </DropdownItem>
                <DropdownItem to="/" tag={Link}>
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="fas fa-sign-out-alt"></i>
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* Collapse */}
          <Collapse navbar isOpen={this.state.collapseOpen}>
            {/* Collapse header */}
            <div className="navbar-collapse-header d-md-none">
              <Row>
                {logo ? (
                  <Col className="collapse-brand" xs="6">
                    SVPM Dashboard
                  </Col>
                ) : null}
                <Col className="collapse-close" xs="6">
                  <button className="navbar-toggler" type="button" onClick={this.toggleCollapse}>
                  <i className="fas fa-angle-double-up"></i>
                  </button>
                </Col>
              </Row>
            </div>
            {/* {new from ffb} */}
              <Row>
                <Col xs="12">
                      <h2 className="filter-title">Search criteria</h2>
                </Col>
              </Row>
              
              <FilterContainer onFilter={this.getFilterData}/>

            {/* Navigation */}
            {/* <Nav className="kaka" navbar>{this.createLinks(routes)}</Nav> */}
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

Sidebar.defaultProps = {
  routes: [{}]
};

Sidebar.propTypes = {
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the image src of the logo
    imgSrc: PropTypes.string.isRequired,
    // the alt for the img
    imgAlt: PropTypes.string.isRequired
  })
};

export default Sidebar;
