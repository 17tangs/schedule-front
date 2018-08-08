import React, { Component } from 'react';
import './MainRegion.css';
import Schedule from './Schedule';
import Details from './Details';

class MainRegion extends Component {
    constructor(){
      super();
      this.state = {
        detailsID: '',
        showDetails : false,
        slideSchedule : 'animated zoomIn'
      }
    }
    onClick = (event) =>{
        console.log(event.target);
        this.setState({detailsID: event.target.id, showDetails:true});
    }
    clickBackground = (event) => {
        if(event.target.className === 'mainRegion'){
          this.setState({showDetails:false});
        }
    }
    handleKeyDetail = (event) => {
      if(event.keyCode === 27){
        this.setState({showDetails:false});
      }
    }
    handleDetails = () => {
      if(this.state.showDetails === true){
        return <Details cn = {'animated zoomIn'} id = {this.state.detailsID}/>;
      }
      else{
        return '';
      }
    }
    render(){
        return(
            <div onClick ={this.clickBackground} className = "mainRegion">
                <Schedule animation = {this.state.slideSchedule} onClick = {this.onClick} sd = {this.props.sd}/>
                {this.handleDetails()}
            </div>
        );
    }
}

export default MainRegion;
