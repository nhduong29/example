import React from 'react';
import FilterItem from './common/FilterItem.jsx';
import {Row, Col} from 'reactstrap';
import _ from 'lodash';
import axios  from 'axios';
//Duong


class RegionSelectBox extends React.Component{
    state = {
        regionList : [],
        selectedRegion : [],
        millList : [],
        selectedMill : [],
        supplierList : [],
        selectedSupplier : [],
        doList : [],
        selectedDO : []
    }
    componentDidMount(){
        console.log("state",this.state);
        axios.post(`http://localhost:8000/filter/region`, this.getQuery())
          .then((response) =>{
            this.setState({
                regionList : response.data
            })
          })
          .catch((error) =>{
            console.log(error);
          });
          axios.post(`http://localhost:8000/filter/mill`, this.getQuery())
          .then((response) =>{
            console.log("response",response);
            this.setState({
                millList : response.data
            })
          })
          .catch((error) =>  {
            console.log(error);
          });
          axios.post(`http://localhost:8000/filter/supplier`, this.getQuery())
          .then((response)  => {
            console.log("response",response);
            this.setState({
                supplierList : response.data
            })
          })
          .catch((error) => {
            console.log(error);
          });
          axios.post(`http://localhost:8000/filter/docode`, this.getQuery())
          .then((response) => {
            console.log("response",response);
            this.setState({
                doList : response.data
            })
          })
          .catch((error) => {
            console.log(error);
          });
    }

    callbackHandleFilterList = (selectedList, type) => {
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

    onChangeRegion = (selectedList) =>{
        //Call get Mill by region to update mill the resul is millResult
        
        axios.post(`http://localhost:8000/filter/mill`, this.getQuery(selectedList))
            .then(function (response) {
                let millResult  = response.data;
                axios.post(`http://localhost:8000/filter/supplier`, this.getQuery(selectedList,millResult))
                    .then(function (response) {
                        let supplierResult  = response.data;
                        axios.post(`http://localhost:8000/filter/docode`, this.getQuery(selectedList,millResult,supplierResult))
                            .then(function (response) {
                                let doResult  = response.data;
                                /**Update list and selected list here!!!**/
                                //=> update millList = millResult
                                //filter out the selected and updtate
                                let newSelectedMill = _.intersectionWith(this.state.selectedMill, millResult, _.isEqual);
                                let newSelectedSupplier = _.intersectionWith(this.state.selectedSupplier, supplierResult, _.isEqual);
                                let newSelectedDO = _.intersectionWith(this.state.selectedDO, doResult, _.isEqual);
                                    this.setState({
                                        millList : millResult,
                                        supplierList:supplierResult,
                                        doList:doResult,
                                        selectedRegion : selectedList,
                                        selectedMill : newSelectedMill,
                                        selectedSupplier : newSelectedSupplier,
                                        selectedDO : newSelectedDO
                                    });
                                })
                            .catch(function (error) {
                                console.log(error);
                        });
                    })
                    .catch(function (error) {
                        console.log(error);
                });
            })
            .catch(function (error) {
                console.log(error);
        });
    }
    componentDidUpdate(){
        console.log('this.state', this.state);
    }

    onchangeMill = (selectedList) =>{
        //Call get Supplier by selected mill
        let supplierResult = this.getFilerData('supplier', this.getQuery(this.selectedRegion,selectedList));

        //Call get do by selected supplier
        let doResult = this.getFilerData('docode', this.getQuery(this.selectedRegion,selectedList,supplierResult));

        /**Update list and selected list here!!!**/
        let newSelectedSupplier = _.intersectionWith(this.state.selectedSupplier, supplierResult, _.isEqual);
        let newSelectedDO = _.intersectionWith(this.state.selectedDO, doResult, _.isEqual);
        this.setState({
            supplierList:supplierResult,
            doList:doResult,
            selectedMill : selectedList,
            selectedSupplier : newSelectedSupplier,
            selectedDO : newSelectedDO
        });
    }

    onchangeSupplier = (selectedList) =>{
        //Call get do by selected supplier
        let doResult = this.getFilerData('docode', this.getQuery(this.selectedRegion,this.selectedMill,this.selectedSupplier, selectedList));

        /**Update list and selected list here!!!**/
        let newSelectedDO = _.intersectionWith(this.state.selectedDO, doResult, _.isEqual);
        this.setState({
            doList:doResult,
            selectedSupplier : selectedList,
            selectedDO : newSelectedDO
        });
    }

    onchangeDO = (selectedList) =>{
        /**Update list and selected list here!!!**/
        this.setState({
            selectedDO : selectedList
        });
    }

    // getFilerData = async (param,query) =>{
    //    let result =  await axios.post(`http://localhost:8000/filter/${param}`, query);
    //    return result.data
    // }

    getQuery = (region =[], mill=[], supplier=[],docode=[]) =>{
        return {
            "region":region,
            "mill":mill,
            "supplierName":supplier,
            "doCode":docode
        }
    }
    
   
    render(){
        return(
            <>
                <Row>
                    <Col xs="12">
                        <FilterItem list={this.state.regionList} title="Region Name" handleFilterList={this.callbackHandleFilterList} selected={this.state.selectedRegion} type="REGION" />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <FilterItem list={this.state.millList} title="Mill Name" handleFilterList={this.callbackHandleFilterList} selected={this.state.selectedMill} type="MILL" />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <FilterItem list={this.state.supplierList} title="Suppiler Name" handleFilterList={this.callbackHandleFilterList} selected={this.state.selectedSupplier} type="SUPPLIER" />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <FilterItem list={this.state.doList} title="DO" handleFilterList={this.callbackHandleFilterList} selected={this.state.selectedDO} type="DO" />
                    </Col>
                </Row>
            </>
        );
    }
}

export default RegionSelectBox;