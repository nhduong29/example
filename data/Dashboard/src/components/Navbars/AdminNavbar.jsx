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
import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Navbar,
  Nav,
  Container,
  Media
} from "reactstrap";

class AdminNavbar extends React.Component {
  constructor(){
    super();
    this.isSidebarActive = false;
  }

  toggleSidebar = () =>{
    this.isSidebarActive = !this.isSidebarActive;
    if(this.isSidebarActive){
        $('.main-content').addClass('toggled');
    }else{
        $('.main-content').removeClass('toggled');
    }
  }

  render() {
    return (
      <>
        <Navbar className="navbar-top fixed-top navbar-dark" expand="md" id="navbar-main">
          <Container fluid className="justify-content-between">
            <div className="left">
              <Link className="navbar-brand text-default"  to="/"  >
              FFB Dashboard
                </Link>
                <button id="btn-toggle-filter" onClick={this.toggleSidebar} type="button" className="btn btn-icon"><i className="fas fa-align-left"></i></button>
                <Link className="text-default d-none d-lg-inline-block active"  to="/"  >
                  Overview
                </Link>
                <Link className="text-default d-none d-lg-inline-block"  to="/"  >
                  KPI Comparison
                </Link>
                <Link className="text-default d-none d-lg-inline-block"  to="/"  >
                  Base Map
                </Link>
            </div>
            <div className="right d-flex align-items-center">
              <button id="btn-alert" type="button" className="btn btn-icon"><i className="fas fa-bell"></i></button>
              <button id="btn-money" type="button" className="btn btn-icon">USD</button>
              <Nav className="align-items-center d-none d-md-flex" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle className="pr-0" nav>
                  <Media className="align-items-center">
                    <span className="avatar avatar-sm rounded-circle">
                      <img
                        alt="..."
                        src={require("assets/img/theme/team-4-800x800.jpg")}
                      />
                    </span>
                    <Media className="ml-2 d-none d-lg-block">
                      <span className="mb-0 text-sm text-default font-weight-bold">
                        Jessica Jones
                      </span>
                    </Media>
                  </Media>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-arrow" right>
                  <DropdownItem className="noti-title" header tag="div">
                    <h6 className="text-overflow m-0">Welcome!</h6>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-single-02" />
                    <span>My profile</span>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-settings-gear-65" />
                    <span>Settings</span>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-calendar-grid-58" />
                    <span>Activity</span>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-support-16" />
                    <span>Support</span>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    <i className="ni ni-user-run" />
                    <span>Logout</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            </div>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default AdminNavbar;