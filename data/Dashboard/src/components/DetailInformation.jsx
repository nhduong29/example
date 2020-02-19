import React from 'react'
import {Card,CardHeader, CardBody, Row , Button,NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane} from 'reactstrap';
import classnames from "classnames";
import MaterialTable from "material-table";
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import {
    chartOptions,
    parseOptions,
    chartExample1,
    chartExample2
  } from "variables/charts.jsx";

class DetailInformation extends React.Component{
    state = {
        tabs: 2,
        chartExample1Data: "data1"
    };
    exampleColumn = [
        { title: 'Region', field: 'region', width : '130px' },
        { title: 'Mill', field: 'mill', width : '130px' },
        { title: 'Supplier Name', field: 'supplier', width : '180px' },
        { title: '1', field: 'd1', type: 'numeric' },
        { title: '2', field: 'd2', type: 'numeric'},
        { title: '3', field: 'd3', type: 'numeric' },
        { title: '4', field: 'd4',type: 'numeric' },
        { title: '5', field: 'd5', type: 'numeric'},
        { title: '6', field: 'd6', type: 'numeric' },
        { title: '7', field: 'd7', type: 'numeric' },
        { title: '8', field: 'd8', type: 'numeric'},
        { title: '9', field: 'd9', type: 'numeric' },
        { title: '10', field: 'd10',type: 'numeric' },
        { title: '11', field: 'd11', type: 'numeric'},
        { title: '12', field: 'd12', type: 'numeric' }
      ];
    exampleData = [
        {
          id: 1,
          region: 'RO-1',
        },
        {
          id: 2,
          mill: "PAN",
          parentId: 1,
        },
        {
            id: 3,
            mill: "PGD",
            parentId: 1,
        },
        {
            id: 4,
            supplier: "supplier 1",
            parentId: 2,
            d1:12, d2:54, d3:20, d4:23, d5:45, d6:145452, d7:112, d8:235, d9:52, d10:112, d11:1254, d12:65
        },
        {
            id: 6,
            supplier: "supplier 2",
            parentId: 2,
            d1:12, d2:54, d3:20, d4:23, d5:23, d6:34, d7:112, d8:235, d9:52, d10:112, d11:1254, d12:65
        },
        {
            id: 7,
            supplier: "supplier a",
            parentId: 3,
            d1:34, d2:879, d3:23423, d4:3463, d5:345, d6:56, d7:112, d8:235, d9:52, d10:112, d11:1254, d12:65
        },
        {
            id: 8,
            supplier: "supplier b",
            parentId: 3,
            d1:343, d2:343, d3:232, d4:23323, d5:232, d6:23, d7:112, d8:235, d9:52, d10:112, d11:1254, d12:65
        },
        {
            id: 9,
            region: 'RO-2',
          },
        {
            id: 10,
            mill: "PAN XYZ",
            parentId: 9,
        },
        {
            id: 11,
            supplier: "supplier x",
            parentId: 10,
            d1:343, d2:343, d3:232, d4:23323, d5:232, d6:23, d7:112, d8:235, d9:52, d10:112, d11:1254, d12:65
        },
      ];
    toggleNavs = (e, state, index) => {
        e.preventDefault();
        this.setState({
            [state]: index
        });
    };
    render(){
        return(
            <div className="detail-info">
                <Card className="shadow">
                    <CardHeader className="border-0">
                    <Row className="align-items-center">
                        <div className="col">
                        <h3 className="mb-0">FFB Purcharse Price</h3>
                        </div>
                        <div className="col text-right">
                            <Nav
                                className="nav-fill flex-column flex-md-row"
                                id="tabs-icons-text"
                                pills
                                role="tablist"
                            >
                                <NavItem>
                                <NavLink
                                    aria-selected={this.state.tabs === 1}
                                    className={classnames("mb-sm-3 mb-md-0", {
                                    active: this.state.tabs === 1
                                    })}
                                    onClick={e => this.toggleNavs(e, "tabs", 1)}
                                    href="#chart"
                                    role="tab"
                                >
                                    <i className="ni ni-chart-bar-32 mr-2" />
                                    Chart
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink
                                    aria-selected={this.state.tabs === 2}
                                    className={classnames("mb-sm-3 mb-md-0", {
                                    active: this.state.tabs === 2
                                    })}
                                    onClick={e => this.toggleNavs(e, "tabs", 2)}
                                    href="#detail"
                                    role="tab"
                                >
                                    <i className="ni ni-money-coins mr-2" />
                                    Detail Table
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink
                                    aria-selected={this.state.tabs === 3}
                                    className={classnames("mb-sm-3 mb-md-0", {
                                    active: this.state.tabs === 3
                                    })}
                                    onClick={e => this.toggleNavs(e, "tabs", 3)}
                                    href="#history"
                                    role="tab"
                                >
                                    <i className="ni ni-bullet-list-67 mr-2" />
                                    History Table
                                </NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                    </Row>
                    </CardHeader>
                    <CardBody>
                        <div>
                        <TabContent activeTab={"tabs" + this.state.tabs}>
                            <TabPane tabId="tabs1">
                                <Card className="bg-gradient-default shadow">
                                    <CardHeader className="bg-transparent">
                                    <Row className="align-items-center">
                                        <div className="col">
                                        <h6 className="text-uppercase text-light ls-1 mb-1">
                                            Overview
                                        </h6>
                                        <h2 className="text-white mb-0">Sales value</h2>
                                        </div>
                                        <div className="col">
                                        <Nav className="justify-content-end" pills>
                                            <NavItem>
                                            <NavLink
                                                className={classnames("py-2 px-3", {
                                                active: this.state.activeNav === 1
                                                })}
                                                href="#pablo"
                                                onClick={e => this.toggleNavs(e, 1)}
                                            >
                                                <span className="d-none d-md-block">Month</span>
                                                <span className="d-md-none">M</span>
                                            </NavLink>
                                            </NavItem>
                                            <NavItem>
                                            <NavLink
                                                className={classnames("py-2 px-3", {
                                                active: this.state.activeNav === 2
                                                })}
                                                data-toggle="tab"
                                                href="#pablo"
                                                onClick={e => this.toggleNavs(e, 2)}
                                            >
                                                <span className="d-none d-md-block">Week</span>
                                                <span className="d-md-none">W</span>
                                            </NavLink>
                                            </NavItem>
                                        </Nav>
                                        </div>
                                    </Row>
                                    </CardHeader>
                                    <CardBody>
                                    <div className="chart">
                                        <Line
                                        data={chartExample1[this.state.chartExample1Data]}
                                        options={chartExample1.options}
                                        getDatasetAtEvent={e => console.log(e)}
                                        />
                                    </div>
                                    </CardBody>
                                </Card>
                            </TabPane>
                            <TabPane tabId="tabs2">
                                    {/* <MaterialTable parentChildData={(row, rows) => rows.find(a => a.id === row.parentId)}
                                        columns={this.exampleColumn}
                                        data={this.exampleData}
                                        options={{
                                            draggable : false,
                                            showTitle : false,
                                        }}
                                    /> */}

                                    <div className="dark">
                                        <MaterialTable parentChildData={(row, rows) => rows.find(a => a.id === row.parentId)}
                                            columns={this.exampleColumn}
                                            data={this.exampleData}
                                            options={{
                                                draggable : false,
                                                showTitle : false,
                                                sorting: false
                                            }}
                                        />
                                    </div>
                            </TabPane>
                            <TabPane tabId="tabs3">
                                history table here
                            </TabPane>
                            </TabContent>
                        </div>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default DetailInformation;
