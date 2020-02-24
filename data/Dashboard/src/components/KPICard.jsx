import React from 'react';
import { Card, CardBody, CardTitle} from "reactstrap";
import classNames from "classnames";

class KPICard extends React.Component{
    render() {
        let stateClassName = classNames('card-state',{
            'text-success' : this.props.positive === true
        }, {
            'text-warning' : this.props.positive === false
        })
        let arrowClass = classNames('fa',{
            'fa-arrow-up' : this.props.positive === true
        },{
            'fa-arrow-down' : this.props.positive === false
        })
        return (
            <>
            <Card className="card-stats  mb-3">
                <CardBody>
                <div>
                    <CardTitle tag="h5" className=" mb-0" >{this.props.title}</CardTitle>
                </div>
                <div className="d-flex align-items-center mt-1">
                    <span className="card-value">{this.props.value}</span>
                    <span className={stateClassName}>
                    <i className={arrowClass} /> {this.props.state}
                    </span>{" "}
                </div>
                <div>
        <span className="card-info">{this.props.info}</span>
                </div>
                </CardBody>
            </Card>
            </>
        );
    }

}
export default KPICard;