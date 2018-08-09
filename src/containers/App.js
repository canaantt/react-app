import React, { Component } from 'react';
import './App.css';
import SearchBox from '../components/SearchBox';
// import { robots } from './robots';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import 'tachyons';


class App extends Component {
  constructor() {
    super();
    this.state  = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({robots: users}));
  } 

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  }

  render() {
    const selectedRobots = this.state.robots.filter(r => r.name.toLocaleLowerCase().includes(this.state.searchfield));
    if(this.state.robots.length === 0){
      return (
        <h1>Loading...</h1>
      )
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={ selectedRobots }/>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
