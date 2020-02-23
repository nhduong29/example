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
import { Route, Switch } from "react-router-dom";
import AdminNavbar from "components/Navbars/AdminNavbar.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";
import Index from "views/Index.jsx";

import routes from "routes.js";

class Admin extends React.Component {
  state = {
    queryParam : ["hihi"]
  }
  componentDidUpdate(e) {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.mainContent.scrollTop = 0;
  }
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
            state = {{hi : "hello"}}
          />
        );
      } else {
        return null;
      }
    });
  };
  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  getFilterData = (data) =>{
    console.log("getFilterData on Admin.jsx",data);
    this.setState({
      queryParam : [data]
    })
  }
  render() {
    return (
      <>
        <Sidebar onFilter={this.getFilterData}
          {...this.props}
          routes={routes}
          logo={{
            innerLink: "/admin/index",
            imgSrc: require("assets/img/brand/FFB-react.png"),
            imgAlt: "..."
          }}
        />
        <div className="main-content" ref="mainContent">
          <AdminNavbar
            {...this.props}
            brandText={this.getBrandText(this.props.location.pathname)}
          />
          {/* <Switch>{this.getRoutes(routes)}</Switch> */}
          <Switch>
            <Route path='/admin/index'
              render= {()=>(<Index query={this.state.queryParam}/>)}
              key={0}
            />
            {/* <Route path='/admin/index1'
              render= {()=>(<Index test={true}/>)}
              key={1}
            /> */}
          </Switch>
        </div>
      </>
    );
  }
}

export default Admin;
