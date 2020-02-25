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
import axios  from 'axios';
import { API_BASE_URL } from '../constants';

class Admin extends React.Component {
  state = {
    kpis :[],
    selectedKPI : 0,
    barchart: {},
    detailTable : {},
    historyTable :{},
    query : {
      region: [],
      mill: [],
      supplierName: [],
      doCode: [],
      date :  new Date(),
      type : 'daily'
    }
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

  getFilterData = async (query=[]) =>{
    //get kpis
    console.log(query)
    this.getKPIsData(query);
  }

  componentDidMount = async()=>{
    this.getKPIsData(this.state.query);
  }
  getKPIsData =  async(query=[])=>{
    let param = {
      'region' : query.region || [],
      'mill' : query.mill || [],
      'supplierName' : query.supplier || [],
      'doCode' : query.docode || [],
      'date' : query.date || new Date(),
    }
    const API_PARAM = query.type || 'daily';
    const kpisResult = await axios.post(`${API_BASE_URL}/card/${API_PARAM}`, param);
    //const detailResult = await axios.post(`${API_BASE_URL}/card/detail`, param);
    //const detailResult ={};
    //console.log(detailResult.data)
    this.setState({
      query : param,
      kpis : kpisResult.data || [],
      //details :  detailResult.data || {}
    })
  }

  callBackHandleSelectKPI= async(id, api)=>{
    const detailTableResult = await axios.post(`${API_BASE_URL}${api.apiDetails}`, this.state.query);
    const barchartResult = await axios.post(`${API_BASE_URL}${api.apiBar}`, this.state.query);
    const historyTableResult = await axios.post(`${API_BASE_URL}${api.apiHistory}`, this.state.query);
    this.setState({
      selectedKPI : id,
      detailTable :  detailTableResult.data || {},
      barchart : barchartResult.data || {},
      historyTable : historyTableResult.data ||{}
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
              render= {()=>(<Index 
                kpis={this.state.kpis} 
                query={this.state.query} 
                selectedKPI={this.state.selectedKPI} 
                detailTable={this.state.detailTable}
                barchart = {this.state.barchart}
                historyTable = {this.state.historyTable}
                onSelectKPI={this.callBackHandleSelectKPI}
                 />)}
              key={0}
            />
          </Switch>
        </div>
      </>
    );
  }
}

export default Admin;
