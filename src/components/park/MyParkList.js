import React, { Component } from 'react';
import MyParkListItem from './MyParkListItem';

class MyParkList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parks: [
        {name:'State Park 1', hasVisited: false, location: 'Maryland', showInfo: false},
        {name:'State Park 2', hasVisited: false, location: 'Pennsylvania', showInfo: false},
        {name:'State Park 3', hasVisited: false, location: 'Massachusetts', showInfo: false}
      ]
    }
    this.handleHasVisitedChange = this.handleHasVisitedChange.bind(this)
    this.handleParkItemClick = this.handleParkItemClick.bind(this)
  }


  handleHasVisitedChange(index) {
    //creates a copy of parks array
    const parksCopy = this.state.parks.slice()
    //creates a copy of parksCopy at that index
    parksCopy[index] = Object.assign({}, parksCopy[index])
    //modifies the hasVisited value
    parksCopy[index].hasVisited = !parksCopy[index].hasVisited
    //updates the state of parks
    this.setState({parks: parksCopy})
  }

  handleParkItemClick(index) {
    console.log(this.state.parks[index].location)
    const parksCopy = this.state.parks.slice()
    parksCopy[index] = Object.assign({}, parksCopy[index])
    parksCopy[index].showInfo = !parksCopy[index].showInfo
    this.setState({parks: parksCopy})
  }

  render() {
    return (
      <div className="MyParkList">
        <h3>My Park List</h3>
        <ul>
          <MyParkListItem
            parks={this.state.parks}
            onHasVisitedChange={this.handleHasVisitedChange}
            onParkItemClick={this.handleParkItemClick}
          />
        </ul>
      </div>
    );
  }
}

export default MyParkList;
