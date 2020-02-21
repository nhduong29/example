import React from 'react'
import {FormGroup,Label} from 'reactstrap';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

class FilterItem extends React.Component{
    handleChange = selected => {
      this.setState({
        optionSelected: selected
      });
      this.props.handleFilterList(selected, this.props.type);
    };
    render(){
        return(
            <div className="filter-item">
                <FormGroup>
                    <Label>{this.props.title}</Label>
                    <div className="filter-select-wrapper">
                        <ReactMultiSelectCheckboxes 
                            options={this.props.list}
                            placeholderButtonLabel="Select Data"
                            className="filter-select-checkboxes"
                            classNamePrefix="ffb-select"
                            value={this.props.selected}
                            onChange={this.handleChange}
                             />
                    </div>

                </FormGroup>
            </div>
        );
    }
}

export default FilterItem;