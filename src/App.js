import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import TitleRegion from './TitleRegion';
import Schedule from './Schedule';
import SearchBar from './SearchBar';
import {ScheduleData} from './ScheduleData.js';
import './animate.css';


class App extends Component {
  constructor(){
    super();
    this.state= {
      schedule_data: ScheduleData,
      searchfield: '',
      showSearchBar: false,
    }
  }
  onSearchChange = (event) => {
      if(event.target.value === ''){
          this.setState({searchfield:'', showSearchBar:false});
      }
      else{
          this.setState({searchfield:event.target.value});
      }
  }
  handleSearchBar = (event) =>{
      if("abcdefghijklmnopqrstuvwxyz0123456789".includes(event.key)){
          this.setState({showSearchBar:true});
      }
      else if (event.keyCode === 27){
          this.setState({searchfield: '', showSearchBar:false});
      }
  }
  onBlur = (event) =>{
      if(event.type === 'blur'){
          this.setState({searchfield: '', showSearchBar:false});
      }
  }
  genSearchBar = () =>{
      if (this.state.showSearchBar === true){
          return <SearchBar blur = {this.onBlur} searchChange={this.onSearchChange}/>;
      }
      else{
          return '';
      }
  }
  componentWillMount(){
      document.addEventListener("keydown", this.handleSearchBar);
  }
  render() {
    const filteredSchedule = this.state.schedule_data.filter((subject) => {
        return subject.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className="App" tabIndex={0} >
          <Navbar />
          <TitleRegion />
          <Schedule sd = {filteredSchedule}/>
          {this.genSearchBar()}
      </div>
    );
  }
}

export default App;
