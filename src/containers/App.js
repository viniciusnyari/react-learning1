import React, { Component } from 'react';
import logo from '../img/logo.svg';
import classes from '../containers/App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    console.log('[App.js] constructor...');
    super(props);
  }

  state = {
      persons: [
        {id: 'sdfsf1', name: 'Vinícius', age:'37', gender:'Male'},
        {id: 'sdfds2', name: 'Lilian', age:'41', gender:'Female'},
        {id: 'sfsdf3', name: 'Júlia', age:'4', gender:'Female'},
      ],
      showPersons:false
  }

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps',props);
    return state;
  }

  // componentWillMount(){
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
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

    console.log('[App.js] render');
  
    let persons = null;

    if (this.state.showPersons){
      persons = 
            <Persons 
            persons={this.state.persons}  
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}/>;        
    }

    return (
      <div className={classes.App}>
      <Cockpit
        title={this.props.appTitle} 
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}/> 
      {persons}
        
      </div>
    );
  }
}

export default App;
