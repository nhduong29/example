import React from 'react';
import { Card, CardBody, CardTitle} from "reactstrap";
import classNames from "classnames";

class KPICard extends React.Component{
    render() {
        let stateClassName = classNames('card-state',{
            'text-success' : this.props.position === 'up'
        }, {
            'text-warning' : this.props.position === 'down'
        }, {
            'text-default' : this.props.position === 'neutral'
        })
        let arrowClass = classNames({
            'fa fa-arrow-up' : this.props.position === 'up'
        },{
            'fa fa-arrow-down' : this.props.position === 'down'
        },{
            'fas fa-grip-lines' : this.props.position === 'neutral'
        })
        return (
            <>
            <div className="border-sa  mb-3">
                <Card className="card-stats">
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
            </div>
            </>
        );
    }

}
export default KPICard;