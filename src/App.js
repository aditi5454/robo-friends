import React, { Component } from "react";
import CardList from './CardList.jsx';
// import { robots } from './robots.js';
import SearchBar from './SearchBar.jsx';
import "./app.css"
import Scroll from './Scroll.js'


class App extends Component {
    constructor() {
        super();
        this.state = {
            // robots: robots,
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=>this.setState({robots:users}))
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });
        return (
            <div className="app">
                <h1>RoboFriends</h1>
                <SearchBar searchChange={this.onSearchChange} />
                <Scroll>
                <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        )
    }
}

export default App;