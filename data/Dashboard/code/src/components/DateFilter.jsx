import React from 'react';
import {FormGroup,ButtonGroup,Button,
    InputGroupAddon,
    InputGroupText,
    InputGroup} from 'reactstrap';
import ReactDatetime from "react-datetime";
import moment from "moment";
import $ from "jquery";

class DateFilter extends React.Component{
    constructor(){
        super();
        this.state = {
            selectedDate: new Date(),
            type : 'daily'
        };
        this.isFocusDatePicker = false;
    }

    conChangeType =(type)=>{
        this.setState({
            type: type
        })
        this.props.handleSelectedDate(this.state.selectedDate, type);
    }

    onSelectDate = (date) =>{
        this.setState({
            selectedDate: date
        })
        this.props.handleSelectedDate(moment(date).format(), this.state.type);
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
                <ButtonGroup>
                    <Button color="primary" 
                        onClick={() => this.conChangeType('daily')} 
                        active={this.state.type === 'daily'}>
                        Daily
                    </Button>
                    <Button color="primary" className="mid"
                        onClick={() => this.conChangeType('weekly')} 
                        active={this.state.type === 'weekly'}>
                        Weekly
                    </Button>
                    <Button color="primary" 
                        onClick={() => this.conChangeType('mtd')} 
                        active={this.state.type === 'mtd'}>
                        MTD
                    </Button>
                    <Button color="primary" 
                        onClick={() => this.conChangeType('ytd')} 
                        active={this.state.type === 'ytd'}>
                        YTD
                    </Button>
                </ButtonGroup>
                <div className="day-select">
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
                            onChange={this.onSelectDate}
                            timeFormat={false}
                            dateFormat="DD/MM/YYYY"
                            defaultValue={new Date()}
                            value={this.state.selectedDate}
                            />
                        </InputGroup>
                    </FormGroup>
                </div>
            </div>
        );
    }
}

export default DateFilter;