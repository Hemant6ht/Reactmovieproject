import React from 'react';
import Nav from './components/Nav';
import Movielist from './components/Movielist';
import Mlist from './list';
class App extends React.Component {
  constructor(){
    super()
    this.state={
      searchfield:""
    }
  }
  filterrobot=(event)=>{
    this.setState({searchfield:event.target.value});
    
  }
  render(){
    const fillrob = Mlist.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    });
  return (
    <>
    <Nav filterrobot={this.filterrobot}/>
    <Movielist movies={fillrob}/>
    </>
  );
  }
}

export default App;
