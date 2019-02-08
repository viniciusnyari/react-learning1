import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
      persons: [
        {id: 'sdfsf1', name: 'Vinícius', age:'37', gender:'Male'},
        {id: 'sdfds2', name: 'Lilian', age:'41', gender:'Female'},
        {id: 'sfsdf3', name: 'Júlia', age:'4', gender:'Female'},
      ],
      showPersons:false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  //Método que reage por Evento
  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p=> {
      return p.id === id
    });

    const person = { ...this.state.persons[personIndex]};

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
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
                          key={person.id}
                          changed={(event) => this.nameChangeHandler(event,person.id)}/>
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
        
        {persons}
        
      </div>
    );
  }
}

export default App;
