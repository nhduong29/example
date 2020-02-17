import React from 'react'
import {Card,CardHeader, CardBody, Row , Button,NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane} from 'reactstrap'
import classnames from "classnames";
import MaterialTable from "material-table";

class DetailInformation extends React.Component{
    state = {
        tabs: 2
    };
    exampleColumn = [
        { title: 'Adı', field: 'name' },
        { title: 'Abc', field: 'abc' },
        { title: 'Soyadı', field: 'surname' },
        { title: 'Cinsiyet', field: 'sex' },
        { title: 'Tipi', field: 'type', removable: false },
        { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
        {
          title: 'Doğum Yeri',
          field: 'birthCity',
          lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        },
      ];
    exampleData = [
        {
          id: 1,
          name: 'a',
          surname: 'Baran',
          birthYear: 1987,
          birthCity: 63,
          sex: 'Male',
          type: 'adult',
        },
        {
          id: 2,
          name: 'b',
          surname: 'Baran',
          birthYear: 1987,
          birthCity: 34,
          sex: 'Female',
          type: 'adult',
          parentId: 1,
        },
        {
          id: 3,
          name: 'c',
          surname: 'Baran',
          birthYear: 1987,
          birthCity: 34,
          sex: 'Female',
          type: 'child',
          parentId: 1,
        },
        {
          id: 4,
          name: 'd',
          surname: 'Baran',
          birthYear: 1987,
          birthCity: 34,
          sex: 'Female',
          type: 'child',
          parentId: 3,
        },
        {
          id: 5,
          name: 'e',
          surname: 'Baran',
          birthYear: 1987,
          birthCity: 34,
          sex: 'Female',
          type: 'child',
        },
        {
          id: 6,
          name: 'f',
          surname: 'Baran',
          birthYear: 1987,
          birthCity: 34,
          sex: 'Female',
          type: 'child',
          parentId: 5,
        },
        {
            id: 7,
            name: 'duonggggggg',
            surname: 'Nguyennnnn',
            birthYear: 1991,
            birthCity: 20,
            sex: 'Mmale',
            type: 'child',
            abc : "haha",
            parentId: 6,
          },
          {
            id: 8,
            name: 'dsdfsdf',
            surname: 'Nguyedsfsdfsdfnnnnn',
            birthYear: 1991,
            birthCity: 20,
            sex: 'Mmale',
            type: 'child',
            parentId: 7,
          }
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
                                chart here
                            </TabPane>
                            <TabPane tabId="tabs2">
                                    <MaterialTable parentChildData={(row, rows) => rows.find(a => a.id === row.parentId)}
                                        columns={this.exampleColumn}
                                        data={this.exampleData}
                                    />
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
