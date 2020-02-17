import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, FormGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroup} from 'reactstrap';
import classnames from 'classnames';
import ReactDatetime from "react-datetime";
import $ from "jquery";

class DateFilter extends React.Component{
    constructor(){
        super();
        this.state = {
            activeTab : 'day'
        };
        this.isFocusDatePicker = false;
    }
    toggle = tab => {
        if(this.state.activeTab !== tab){
            this.setState({
                activeTab : tab
            });
        }
    }
    toggleDatePicker = () =>{
        this.isFocusDatePicker = !this.isFocusDatePicker;
        if(this.isFocusDatePicker){
            $('#sidenav-main').addClass('over');
        }else{
            $('#sidenav-main').removeClass('over');
        }
    }
    render(){
        return(
            <div className="date-filter">
                <Nav tabs>
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab  === 'day' })} onClick={() => { this.toggle('day'); }}>
                            Daily
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames('mid',{ active: this.state.activeTab  === 'mtd' })} onClick={() => { this.toggle('mtd'); }}>
                            MTD
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab  === 'ytd' })} onClick={() => { this.toggle('ytd'); }}>
                            YTD
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="day">
                        <FormGroup>
                            <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="ni ni-calendar-grid-58" />
                                </InputGroupText>
                                </InputGroupAddon>
                                <ReactDatetime 
                                closeOnSelect={true}
                                onFocus={this.toggleDatePicker}
                                onBlur={this.toggleDatePicker}
                                timeFormat={false}
                                dateFormat="DD/MM/YYYY"
                                defaultValue={new Date()}
                                />
                            </InputGroup>
                        </FormGroup>
                    </TabPane>
                    <TabPane tabId="mtd">
                        <FormGroup>
                            <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="ni ni-calendar-grid-58" />
                                </InputGroupText>
                                </InputGroupAddon>
                                <ReactDatetime 
                                closeOnSelect={true}
                                onFocus={this.toggleDatePicker}
                                onBlur={this.toggleDatePicker}
                                timeFormat={false}
                                dateFormat="DD/MM/YYYY"
                                defaultValue={new Date()}
                                />
                            </InputGroup>
                        </FormGroup>
                    </TabPane>
                    <TabPane tabId="ytd">
                        <FormGroup>
                            <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="ni ni-calendar-grid-58" />
                                </InputGroupText>
                                </InputGroupAddon>
                                <ReactDatetime 
                                closeOnSelect={true}
                                onFocus={this.toggleDatePicker}
                                onBlur={this.toggleDatePicker}
                                timeFormat={false}
                                dateFormat="DD/MM/YYYY"
                                defaultValue={new Date()}
                                />
                            </InputGroup>
                        </FormGroup>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default DateFilter;