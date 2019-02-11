import React, { Component } from 'react';
import logo from '../img/logo.svg';
import classes from '../containers/App.css';
import Persons from '../components/Persons/Persons'

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
  
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons){
      persons = (
        <div>
            <Persons 
            persons={this.state.persons}  
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}/>
        </div>  
      );
      btnClass = classes.Red;
    }


    // let classes = ['red','bold'].join(' ');
    const assignedClasses = [];
    if (this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Primeiro código em React.</h1>
        <p className={assignedClasses.join(' ')}>Veja! Isso funciona!</p>

        <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        
        {persons}
        
      </div>
    );
  }
}

export default App;
