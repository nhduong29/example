import React from 'react'
import {FormGroup,Label} from 'reactstrap';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

class FilterItem extends React.Component{
  state={
    optionSelected: []
  }
    handleChange = selected => {
      this.setState({
        optionSelected: selected
      });
    };
    handleMenuClose = () => {
      this.props.handleOnFilterMenuClose(this.state.optionSelected, this.props.type);
    };
    render(){
        return(
            <div className="filter-item">
                <FormGroup>
                    <Label>{this.props.title}</Label>
                    <div className="filter-select-wrapper">
                        <ReactMultiSelectCheckboxes 
                            options={this.props.list}
                            placeholderButtonLabel="All"
                            className="filter-select-checkboxes"
                            classNamePrefix="ffb-select"
                            onChange={this.handleChange}
                            onMenuClose = {this.handleMenuClose}
                             />
                    </div>

                </FormGroup>
            </div>
        );
    }
}

export default FilterItem;