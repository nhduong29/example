import React from 'react';
import FilterItem from './common/FilterItem.jsx';
import {Row, Col,Button} from 'reactstrap';
import _ from 'lodash';
import axios  from 'axios';
import { API_BASE_URL } from '../../constants';
import DateFilter from 'components/DateFilter.jsx';
//Duong


class FilterContainer extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            selectedDate : new Date(),
            type:'daily',
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

   onchangeSupplier = async (selectedSupplier) =>{
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
                selectedSupplier : selectedSupplier,
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

    mapDataToQuery = (array)=>{
        if(array && array.length > 0){
           return array.map((item) => {
                return item.value;
            })
        }
        return [];
    }

    mapDataToQueryLabel = (array)=>{
        if(array && array.length > 0){
           return array.map((item) => {
                return item.label;
            })
        }
        return [];
    }

    getQuery = (region =[], mill=[], supplier=[],docode=[]) =>{
        let regionQuery = this.mapDataToQuery(region);
        let millQuery = this.mapDataToQuery(mill);
        let supplierQuery = this.mapDataToQuery(supplier);
        let docodeQuery =  this.mapDataToQuery(docode);
        return {
            "region":regionQuery,
            "mill":millQuery,
            "supplierName":supplierQuery,
            "doCode":docodeQuery
        }
    }

    callbackHandlerForDateFilter = (date,type) => {
        this.setState({
            selectedDate: date,
            type : type
        });
    }

    applyFilter = () =>{
        var timer = null;
        timer = setInterval(() => {
            if(this.state.isDisabledButton === false){
                clearInterval(timer);
                let regionQuery = this.mapDataToQueryLabel(this.state.filterData.selectedRegion);
                let millQuery = this.mapDataToQueryLabel(this.state.filterData.selectedMill);
                let supplierQuery = this.mapDataToQueryLabel(this.state.filterData.selectedSupplier);
                let docodeQuery =  this.mapDataToQueryLabel(this.state.filterData.selectedDO);
                let data={
                    "region" : regionQuery,
                    "mill" : millQuery,
                    "supplierName" : supplierQuery,
                    "docode" : docodeQuery,
                    "date" : this.state.selectedDate,
                    "type" : this.state.type
                }
                this.props.onFilter(data);
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
                        <DateFilter handleSelectedDate={this.callbackHandlerForDateFilter}/>
                    </Col>
                </Row>
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
                        title="Supplier Name" 
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