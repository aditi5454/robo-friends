import React, { Component } from "react";
import CardList from './CardList.jsx';
import { robots } from './robots.js';
import SearchBar from './SearchBar.jsx';
import "./app.css"


class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: '',
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });
        return (
            <div className="app">
                <h1>RoboFriends</h1>
                <SearchBar searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
        )
    }
}

export default App;