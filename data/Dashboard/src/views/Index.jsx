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
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.jsx";

import classNames from "classnames";
import KPICard from "components/KPICard.jsx";
import DetailInformation from "components/DetailInformation.jsx";

class Index extends React.Component {
  state = {
    activeNav: 1,
    selectedKPI : 0,
    chartExample1Data: "data1"
  };
  onSelectKPI = (id)=>{
    console.log(id);
    this.setState({
      selectedKPI : id
    })
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
    console.log("index query componentWillMount: ",this.props.query);
  }
  componentDidUpdate(){
    console.log("index query: ",this.props.query);

  }
  render() {
    return (
      <>
        <Container fluid>
          <div className="row">
            <div className="col-12">
              <div className="header">
                <div className="header-body">
                  <div className="kpis">
                    <div className="row">
                      <div className="col-3 col-md-3 col-sm-6">
                        <div className={classNames('kpi',{
                            'active' : this.state.selectedKPI === 0
                          })} 
                          onClick={()=> this.onSelectKPI(0)}>
                            <KPICard
                            title="Purchase Price (IDR/Kg)" 
                            value="530,102" positive={true} 
                            state="3.47%" 
                            info="Since last month" />
                        </div>
                      </div>
                      <div className="col-3 col-md-3 col-sm-6">
                        <div className={classNames({'active' : this.state.selectedKPI === 1}, 'kpi')} 
                          onClick={()=> this.onSelectKPI(1)}>
                            <KPICard
                            title="Purchase Price (IDR/Kg)" 
                            value="530,102" positive={true} 
                            state="3.47%" 
                            info="Since last month" />
                        </div>
                      </div>
                      <div className="col-3 col-md-3 col-sm-6">
                        <div className={classNames({'active' : this.state.selectedKPI === 2}, 'kpi')} 
                          onClick={()=> this.onSelectKPI(2)}>
                            <KPICard
                            title="Purchase Price (IDR/Kg)" 
                            value="530,102" positive={true} 
                            state="3.47%" 
                            info="Since last month" />
                        </div>
                      </div>
                      <div className="col-3 col-md-3 col-sm-6">
                        <div className={classNames({'active' : this.state.selectedKPI === 3}, 'kpi')} 
                          onClick={()=> this.onSelectKPI(3)}>
                            <KPICard
                            title="Purchase Price (IDR/Kg)" 
                            value="530,102" positive={true} 
                            state="3.47%" 
                            info="Since last month" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                    <div className="col-3 col-md-3 col-sm-6">
                        <div className={classNames({'active' : this.state.selectedKPI === 4}, 'kpi')} 
                          onClick={()=> this.onSelectKPI(4)}>
                            <KPICard
                            title="Purchase Price (IDR/Kg)" 
                            value="530,102" positive={true} 
                            state="3.47%" 
                            info="Since last month" />
                        </div>
                      </div>
                      <div className="col-3 col-md-3 col-sm-6">
                        <div className={classNames({'active' : this.state.selectedKPI === 5}, 'kpi')} 
                          onClick={()=> this.onSelectKPI(5)}>
                            <KPICard
                            title="Purchase Price (IDR/Kg)" 
                            value="530,102" positive={true} 
                            state="3.47%" 
                            info="Since last month" />
                        </div>
                      </div>
                      <div className="col-3 col-md-3 col-sm-6">
                        <div className={classNames({'active' : this.state.selectedKPI === 6}, 'kpi')} 
                          onClick={()=> this.onSelectKPI(6)}>
                            <KPICard
                            title="Purchase Price (IDR/Kg)" 
                            value="530,102" positive={true} 
                            state="3.47%" 
                            info="Since last month" />
                        </div>
                      </div>
                      <div className="col-3 col-md-3 col-sm-6">
                        <div className={classNames({'active' : this.state.selectedKPI === 7}, 'kpi')} 
                          onClick={()=> this.onSelectKPI(7)}>
                            <KPICard
                            title="Purchase Price (IDR/Kg)" 
                            value="530,102" positive={true} 
                            state="3.47%" 
                            info="Since last month" />
                        </div>
                      </div>
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
              <DetailInformation/>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Index;
