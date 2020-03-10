import React from 'react'
import {Card,CardHeader, CardBody, Row ,NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane} from 'reactstrap';
import classnames from "classnames";
import MaterialTable from "material-table";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import {
    chartOptions,
  parseOptions,
  chartExample2
  } from "variables/charts.jsx";

class DetailInformation extends React.Component{
    state = {
        tabs: 2,
        chartExample1Data: "data1"
    };
    
    toggleNavs = (e, state, index) => {
        e.preventDefault();
        this.setState({
            [state]: index
        });
    };
    render(){
        console.log(this.props.historyTable);
        return(
            <div className="detail-info">
                <Card className="shadow">
                    <CardHeader className="border-0">
                    <Row className="align-items-center">
                        <div className="col">
                        <h3 className="mb-0">FFB Purchase Price</h3>
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
                                    </Row>
                                    </CardHeader>
                                    <CardBody>
                                    <div className="chart">
                                        {/* <Line
                                        data={chartExample1[this.state.chartExample1Data]}
                                        options={chartExample1.options}
                                        getDatasetAtEvent={e => console.log(e)}
                                        /> */}
                                        <Bar
                                            data={this.props.barchart}
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
                                            columns={this.props.detailTable.columns}
                                            data={this.props.detailTable.data}
                                            // columns={columns}
                                            // data={data}
                                            options={{
                                                draggable : false,
                                                showTitle : false,
                                                sorting: false
                                            }}
                                        />
                                    </div>
                            </TabPane>
                            <TabPane tabId="tabs3">
                            <div className="dark">
                                        <MaterialTable parentChildData={(row, rows) => rows.find(a => a.id === row.parentId)}
                                            columns={this.props.historyTable.columns}
                                            data={this.props.historyTable.data}
                                            // columns={columns}
                                            // data={data}
                                            options={{
                                                draggable : false,
                                                showTitle : false,
                                                sorting: false
                                            }}
                                        />
                                    </div>
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
