import React, { Component } from  'react';
import HourContainer from './HourContainer/HourContainer';
import DayContainer from './DayContainer/DayContainer';
import './Schedule.css'

class Schedule extends Component{
  hourBounds = () =>{
    let et = 0;
    this.props.sd.forEach((subject) => {
      subject.slots.forEach((meeting) => {
        if(meeting.end > et){
          et = meeting.end;
        }
      })
    });
    return et+1;
  }
  render(){
    let et = this.hourBounds();
    let numHours = et-8>7 ? et-8 : 7;
    let height = (numHours+1)*50;
    let {sd} = this.props;
    return(
      <div className="scheduleContainer">
        <div className={`schedule ${this.props.animation}`}style = {{height: `${height}px`}}>
          <HourContainer num = {numHours} />
          <DayContainer hoverDay = {this.props.hoverDay} resetDay = {this.props.resetDay}  onClick = {this.props.onClick} schedule = {sd}/>
        </div>
      </div>
    );
  }
}

export default Schedule;
