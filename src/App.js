import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import Counter from './Counter';
import FilteredList from './FilteredList';



// TODO (FilteredList): create a produce list using the 'const' variable keyword
const produceList = [
    { name: "Apple", type: "Fruit" },
    { name: "Banana", type: "Fruit" },
    { name: "Lettuce", type: "Vegetable" },
    { name: "Carrot", type: "Vegetable" },
    { name: "Broccoli", type: "Vegetable" },
    { name: "Orange", type: "Fruit" },
    { name: "Tomato", type: "Vegetable" },
    { name: "Grapes", type: "Fruit" },
    { name: "Spinach", type: "Vegetable" },
    { name: "Strawberry", type: "Fruit" },
];

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* TODO (HelloWorld): create an instance of the HelloWorld Component */}
                <HelloWorld name={'Sarah'} />

                {/* TODO (Counter): create an instance of the Counter Component */}
                <Counter />

                {/* TODO (FilteredList): create an instance of the FilteredList Component with a variable named items that takes in your produce list */}
                <FilteredList items={produceList} />

            </div>
        );
    }
}

export default App;
