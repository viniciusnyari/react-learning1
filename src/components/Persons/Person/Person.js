import React, {Component} from 'react';
import classes from './Person.css';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');

        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I´m <strong>{this.props.name}</strong> and I am <strong>{this.props.age}</strong> years old and a <strong>{this.props.gender}</strong>!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        )
    }
}

export default Person;