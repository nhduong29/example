import React from 'react'
import {FormGroup,Label,Input} from 'reactstrap';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

class FilterItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          optionSelected: null
        };
      }
    handleChange = selected => {
        console.log(selected);
        this.setState({
          optionSelected: selected
        });
      };
    render(){
        const options = [
            { label: 'RO-1', value: 1},
            { label: 'RO-2', value: 2},
            { label: 'RO-3', value: 3},
            { label: 'RO-4', value: 4},
            { label: 'RO-5', value: 5},
            { label: 'RO-6', value: 6},
            { label: 'RO-7', value: 7},
            { label: 'RO-8', value: 8},
            { label: 'RO-9', value: 9},
            { label: 'RO-10', value: 10},
        ];

        return(
            <div className="filter-item">
                <FormGroup>
                    <Label for="exampleEmail"><i className="ni ni-atom"></i> {this.props.title}</Label>
                    <div className="filter-select-wrapper">
                        <ReactMultiSelectCheckboxes 
                            options={options}
                            placeholderButtonLabel="Select Data"
                            className="filter-select-checkboxes"
                            classNamePrefix="ffb-select"
                            allowSelectAll={true}
                            value={this.state.optionSelected}
                            onChange={this.handleChange}
                             />
                    </div>

                </FormGroup>
            </div>
        );
    }
}

export default FilterItem;