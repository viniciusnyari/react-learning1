import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {   
    
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps')
    //     return state;
    // }

    // componentWillReceiveProps(props){
    //     console.log('[Persons.js] componentWillReceiveProps')
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Persons.js] shouldComponentUpdate...')
        if(nextProps.persons !== this.props.persons){
            console.log('[Persons.js] shouldComponentUpdate changed...' + nextProps.persons);
            return true;
        }
        else {
            console.log('[Persons.js] shouldComponentUpdate not changed...' + nextProps.persons);
            return false;
        }
        // return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');        
        return {message:'Snapshot!'};
    }

    // componentWillUpdate() {

    // }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Persons.js componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering...');

        return this.props.persons.map((person, index) => {
            return (<Person 
                    name={person.name}
                    age={person.age} 
                    click={()=> this.props.clicked(index)}
                    key={person.id}
                    changed={(event) => this.props.changed(event,person.id)}/>
            );            
      });        
    }
};
export default Persons;