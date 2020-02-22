import React from 'react';
import FilterItem from './common/FilterItem.jsx';
import {Row, Col,Button} from 'reactstrap';
import _ from 'lodash';
import axios  from 'axios';
import { API_BASE_URL } from '../../constants';
import FilterAPI from '../../api/FilterAPI.js';
//Duong


class FilterContainer extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            regionList : [],
            millList : [],
            supplierList : [],
            selectedSupplier : [],
            doList : [],
            selectedDO : [],
            filterData : {
                selectedRegion : [],
                selectedMill : [],
                selectedSupplier : [],
                selectedDO : []
            },
            isDisabledButton : false
        };
      }
    componentDidMount(){
        axios.post(`${API_BASE_URL}/filter/region`, this.getQuery())
        .then((response) =>{
            this.setState({
                regionList : response.data
            })
        }).catch((error) =>  {
            console.log(error);
        });
        axios.post(`${API_BASE_URL}/filter/mill`, this.getQuery())
            .then((response) =>{
                this.setState({
                    millList : response.data
                })
            }).catch((error) =>  {
                console.log(error);
            });

        axios.post(`${API_BASE_URL}/filter/supplier`, this.getQuery())
            .then((response)  => {
                this.setState({
                    supplierList : response.data
                })
            }).catch((error) => {
                console.log(error);
            });

        axios.post(`${API_BASE_URL}/filter/docode`, this.getQuery())
            .then((response) => {
                this.setState({
                    doList : response.data
                })
            }).catch((error) => {
                console.log(error);
            });
    }

    callbackHandleOnFilterMenuClose = (selectedList, type) => {
        switch (type) {
            case 'REGION':
                this.onChangeRegion(selectedList);
                break;
            case 'MILL':
                this.onchangeMill(selectedList);
                break;
            case 'SUPPLIER':
                this.onchangeSupplier(selectedList);
                break;
            case 'DO':
                this.onchangeDO(selectedList);
                break;
            default:
                break;
        }
    }

    onChangeRegion = async (selectedList) =>{
        //lock
        this.setState({
            isDisabledButton : true
        });
        //get data
        const millResult = await axios.post(`${API_BASE_URL}/filter/mill`, this.getQuery(selectedList));
        const supplierResult = await axios.post(`${API_BASE_URL}/filter/supplier`, this.getQuery(selectedList,millResult))
        const doResult = await axios.post(`${API_BASE_URL}/filter/docode`, this.getQuery(selectedList,millResult,supplierResult));
        //filter
        let newSelectedMill = _.intersectionWith(this.state.filterData.selectedMill, millResult.data, _.isEqual);
        let newSelectedSupplier = _.intersectionWith(this.state.filterData.selectedSupplier, supplierResult.data, _.isEqual);
        let newSelectedDO = _.intersectionWith(this.state.filterData.selectedDO, doResult.data, _.isEqual);
        this.setState({
            millList : millResult.data  || [],
            supplierList:supplierResult.data || [],
            doList:doResult.data || [],
            filterData : {
                selectedRegion : selectedList,
                selectedMill : newSelectedMill,
                selectedSupplier : newSelectedSupplier,
                selectedDO : newSelectedDO,
            },
            isDisabledButton : false //unlock
        });
    }

    componentDidUpdate = ()=>{
        //console.log("filterData", this.state.filterData);
    }

    onchangeMill = async (selectedMill) =>{
        //lock
        this.setState({
            isDisabledButton : true
        });
        //get data
        const supplierResult = await axios.post(`${API_BASE_URL}/filter/supplier`, this.getQuery(this.state.filterData.selectedRegion, selectedMill))
        const doResult = await axios.post(`${API_BASE_URL}/filter/docode`, this.getQuery(this.state.filterData.selectedRegion, selectedMill, supplierResult));
        //filter
        let newSelectedSupplier = _.intersectionWith(this.state.filterData.selectedSupplier, supplierResult.data, _.isEqual);
        let newSelectedDO = _.intersectionWith(this.state.filterData.selectedDO, doResult.data, _.isEqual);
        this.setState({
            supplierList:supplierResult.data || [],
            doList:doResult.data || [],
            filterData : {
                selectedRegion : this.state.filterData.selectedRegion,
                selectedMill : selectedMill,
                selectedSupplier : newSelectedSupplier,
                selectedDO : newSelectedDO,
            },
            isDisabledButton : false //unlock
        });
    }

   onchangeSupplier = async (selectedSuppiler) =>{
       //lock
        this.setState({
            isDisabledButton : true
        });
        //get data
        const doResult = await axios.post(`${API_BASE_URL}/filter/docode`, this.getQuery(this.state.filterData.selectedRegion, this.state.filterData.selectedMill, this.state.filterData.selectedSupplier));
        let newSelectedDO = _.intersectionWith(this.state.filterData.selectedDO, doResult.data, _.isEqual);
        this.setState({
            doList:doResult.data || [],
            filterData : {
                selectedRegion : this.state.filterData.selectedRegion,
                selectedMill : this.state.filterData.selectedMill,
                selectedSupplier : selectedSuppiler,
                selectedDO : newSelectedDO,
            },
            isDisabledButton : false //unlock
        });
    }

    onchangeDO = async (selectedDO) =>{
        this.setState({
            selectedDO : selectedDO || [],
            filterData : {
                selectedRegion : this.state.filterData.selectedRegion,
                selectedMill : this.state.filterData.selectedMill,
                selectedSupplier : this.state.filterData.selectedSupplier,
                selectedDO : selectedDO,
            },
            isDisabledButton : false //unlock
        });
    }

    getFilerData = async (param,query) =>{
       let result =  await axios.post(`${API_BASE_URL}/filter/${param}`, query);
       return result.data
    }

    getQuery = (region =[], mill=[], supplier=[],docode=[]) =>{
        return {
            "region":region,
            "mill":mill,
            "supplierName":supplier,
            "doCode":docode
        }
    }

    applyFilter = () =>{
        var timer = null;
        timer = setInterval(() => {
            if(this.state.isDisabledButton === false){
                clearInterval(timer);
                console.log("this.state.filterData",this.state.filterData);
            }else{
                console.log('Data is loading');
            }
        }, 100);
    }
    clearFilter = () =>{
        console.log("clear all");
    }


    
   
    render(){
        return(
            <>
                <Row>
                    <Col xs="12">
                        <FilterItem 
                            title="Region Name" 
                            type="REGION"
                            list={this.state.regionList} 
                            handleOnFilterMenuClose = {this.callbackHandleOnFilterMenuClose}
                             />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <FilterItem 
                        list={this.state.millList} 
                        title="Mill Name" 
                        handleOnFilterMenuClose = {this.callbackHandleOnFilterMenuClose}
                        type="MILL" />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <FilterItem 
                        list={this.state.supplierList} 
                        title="Suppiler Name" 
                        handleOnFilterMenuClose = {this.callbackHandleOnFilterMenuClose}
                        type="SUPPLIER" />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <FilterItem 
                        title="DO" 
                        type="DO"
                        handleOnFilterMenuClose = {this.callbackHandleOnFilterMenuClose} 
                        list={this.state.doList} />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                    <div className="d-flex flex-column justify-content-center filter-btn">
                        <Button color="info" type="button" className="apply" onClick={this.applyFilter}>Apply</Button>
                        <Button color="primary" outline type="button" className="clear" onClick={this.clearFilter}>Clear Filter</Button>
                    </div>
                    </Col>
                </Row>
            </>
        );
    }
}

export default FilterContainer;