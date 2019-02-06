import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
      persons: [
        {name: 'Vinícius', age:'37', gender:'Male'},
        {name: 'Lilian', age:'41', gender:'Female'},
        {name: 'Júlia', age:'4', gender:'Female'},
      ]
  }

  //Método que reage por onClick 
  switchNameHandler = (newName) => {
    // console.log('Was Clicked!');
    this.setState({
      persons: [
        // {name: 'Vinícius Nyari', age:'37', gender:'Male'},
        {name: newName, age:'37', gender:'Male'},
        {name: 'Lilian Cassia de Godoy Nyari', age:'41', gender:'Female'},
        {name: 'Júlia de Godoy Nyari', age:'4', gender:'Female'},
      ]
    })
  }

  //Método que reage por Evento
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Vinicius', age:'37', gender:'Male'},
        {name: event.target.value, age:'41', gender:'Female'},
        {name: 'Júlia', age:'4', gender:'Female'},
      ]
    })
  }

  render() {

    const style = {
        backgroudColor:'white',
        font:'inherit',
        border : '1px solid black',
        paddind: '8px',
        cursor:'pointer'
    } ; 

    return (
      <div className="App">
        <h1>Primeiro código em React.</h1>
        <p>Veja! Isso funciona!</p>

        <button style={style} onClick={this.switchNameHandler.bind(this,'Vnscs')}>Switch Name</button>
        
        <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} 
            gender={this.state.persons[0].gender}>My hobbies: Soccer </Person>

          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age} 
            gender={this.state.persons[1].gender}
            click={this.switchNameHandler.bind(this,'VnscsLabs')}
            changed = {this.nameChangeHandler}>My hobbies: Racing </Person>

          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} 
            gender={this.state.persons[2].gender}>My hobbies: Naná </Person> 

        </div>

        {/*
        First Code...
        <Person name="Vinícius" age="37" gender="Male">My hobbies: Soccer </Person>
        <Person name="Lili" age="41" gender="Female">My hobbies: Racing </Person>
        <Person name="Julia" age="4" gender="Female">My hobbies: Naná </Person>
        */}
      </div>
    );
  }
}

export default App;
