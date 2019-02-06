import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
      persons: [
        {id: '1', name: 'Vinícius', age:'37', gender:'Male'},
        {id: '2', name: 'Lilian', age:'41', gender:'Female'},
        {id: '3', name: 'Júlia', age:'4', gender:'Female'},
      ],
      showPersons:false
  }

  //Método que reage por onClick 
  // switchNameHandler = (newName) => {
  //   // console.log('Was Clicked!');
  //   this.setState({
  //     persons: [
  //       // {name: 'Vinícius Nyari', age:'37', gender:'Male'},
  //       {name: newName, age:'37', gender:'Male'},
  //       {name: 'Lilian Cassia de Godoy Nyari', age:'41', gender:'Female'},
  //       {name: 'Júlia de Godoy Nyari', age:'4', gender:'Female'},
  //     ]
  //   })
  // }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }

  render() {

    const style = {
        backgroudColor:'white',
        font:'inherit',
        border : '1px solid black',
        paddind: '8px',
        cursor:'pointer'
    } ; 

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
                return <Person 
                          name={person.name}
                          age={person.age} 
                          click={()=> this.deletePersonHandler(index)}
                          key={person.id}/>
              })
            }
        </div>  
      );
    }

    return (
      <div className="App">
        <h1>Primeiro código em React.</h1>
        <p>Veja! Isso funciona!</p>

        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        
        {/* OLD Sample
        {this.state.showPersons ? DIVHTL : Null} */}

        {persons}

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
