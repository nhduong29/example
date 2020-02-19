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

// reactstrap components
import { Container } from "reactstrap";
import KPICard from "components/KPICard.jsx";
class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header">
          <Container fluid>
            <div className="header-body">
              <div className="flex-grid kpis">
                <div className="col">
                  <KPICard title="Purchase Price (IDR/Kg)" value="530,102" positive={true} state="3.47%" info="Since last month" />
                </div>
                <div className="col">
                  <KPICard title="FFB Volume(MT)" value="530,102" positive={true} state="3.47%" info="Since last month" />
                </div>
                <div className="col">
                  <KPICard title="Sortasi(%)" value="530,102" positive={true} state="3.47%" info="Since last month" />
                </div>
                <div className="col">
                  <KPICard title="Utilization Factor(%)" value="530,102" positive={true} state="3.47%" info="Since last month" />
                </div>
                <div className="col">
                  <KPICard title="ORE(%)" value="530,102" positive={true} state="3.47%" info="Since last month" />
                </div>
                <div className="col">
                  <KPICard title="CPO Price(IDR/Kg)" value="530,102" positive={true} state="3.47%" info="Since last month" />
                </div>
                <div className="col">
                  <KPICard title="CPO Volume(MT)" value="530,102" positive={true} state="3.47%" info="Since last month" />
                </div>
                <div className="col">
                  <KPICard title="Gross Margin(IDR/Kg FFB)" value="530,102" positive={true} state="3.47%" info="Since last month" />
                </div>
                <div className="col">
                  <KPICard title="Net Margin(IDR/Kg FFB)" value="530,102" positive={true} state="3.47%" info="Since last month" />
                </div>
                <div className="col">
                  <KPICard title="Palm Shell(IDR/Kg FFB)" value="530,102" positive={true} state="3.47%" info="Since last month" />
                </div>
                <div className="col">
                  <KPICard title="Purchase Price (IDR/Kg)" value="530,102" positive={true} state="3.47%" info="Since last month" />
                </div>
                <div className="col">
                  <KPICard title="KIR(%)" value="530,102" positive={true} state="3.47%" info="Since last month" />
                </div>
                <div className="col">
                  <KPICard title="PR Price(IDR/Kg)" value="530,102" positive={true} state="3.47%" info="Since last month" />
                </div>
                <div className="col">
                  <KPICard title="Kenel Volume(MT)" value="530,102" positive={true} state="3.47%" info="Since last month" />
                </div>
              </div>
            </div>
            
          </Container>
        </div>
      </>
    );
  }
}

export default Header;
