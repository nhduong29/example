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
// node.js library that concatenates classes (strings)
import Chart from "chart.js";
// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
} from "variables/charts.jsx";

import classNames from "classnames";
import KPICard from "components/KPICard.jsx";
import DetailInformation from "components/DetailInformation.jsx";
import axios  from 'axios';
import { API_BASE_URL } from '../constants';

class Index extends React.Component {
  state = {
    activeNav: 1,
    chartExample1Data: "data1",
  };

  onSelectKPI = (id,api)=>{
    console.log(id, api);
    this.props.onSelectKPI(id, api);
  }
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
    let wow = () => {
      console.log(this.state);
    };
    wow.bind(this);
    setTimeout(() => wow(), 1000);
    // this.chartReference.update();
  };
  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  render() {
    let {kpis, detailTable, selectedKPI, barchart, historyTable} = this.props;
    console.log(kpis)

    if(kpis && kpis.length > 0){
      let firstFiveKPI = kpis.slice(0,5);
      let lastFiveKPI = kpis.slice(5);
      return (
        <>
          <Container fluid>
            <div className="row">
              <div className="col-12">
                <div className="header">
                  <div className="header-body">
                    <div className="kpis">
                      <div className="row">
                        {
                          firstFiveKPI.map((kpi, index)=>{
                            return (
                              <div className="col" key={index}>
                                <div className={classNames('kpi',{
                                    'active' : selectedKPI === index
                                  })} 
                                  onClick={()=> this.onSelectKPI(index,{
                                    apiBar: kpi.apiBar,
                                    apiDetails: kpi.apiDetails,
                                    apiHistory : kpi.apiHistory
                                  })}>
                                    <KPICard
                                    title={kpi.name}
                                    position ={kpi.position}
                                    state ={kpi.state}
                                    value={kpi.header}
                                    info={`Budget: ${kpi.footer}`} />
                                </div>
                              </div>
                            );
                          })
                        }
                      </div>
                      <div className="row">
                        {
                          lastFiveKPI.map((kpi, index)=>{
                            return (
                              <div className="col" key={index}>
                                <div className={classNames('kpi',{
                                    'active' : selectedKPI === index+5
                                  })} 
                                  onClick={()=> this.onSelectKPI(index+5,{
                                    apiBar: kpi.apiBar,
                                    apiDetails: kpi.apiDetails,
                                    apiHistory : kpi.apiHistory
                                  })}>
                                    <KPICard
                                    title={kpi.name}
                                    position ={kpi.position}
                                    state ={kpi.state}
                                    value={kpi.header}
                                    info={`Budget: ${kpi.footer}`} />
                                </div>
                              </div>
                            );
                          })
                        }
                      </div>
                    </div>
                  </div>  
                </div>
              </div>
            </div>
          </Container>
          {/* Page content */}
          <Container fluid>
            <Row>
              <Col xl="12">
                <DetailInformation detailTable={detailTable} barchart = {barchart} historyTable = {historyTable}/>
              </Col>
            </Row>
          </Container>
        </>
        );
    }else{
      return <div>Server have problem, Please contact acministrator to check!!! </div>
    }
  }
}

export default Index;
