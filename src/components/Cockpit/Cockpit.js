import React, { useEffect } from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    useEffect(()=> {
        console.log('[Cockpit.js] useEffect');
        setTimeout(()=> {
            alert('Saved data to cloud!');
        },1000);

        return ()=> {
            console.log('[Cockpit.js] clean up work in useEffect');
        };
    //},[props.persons]); //Aqui ele emite esse alerta a cada vez que for alterada essa props.persons
    },[]); //executa somente uma vez e no começo, depois não mostra mais
// }); //emite a cada 1 sergundo

useEffect(()=> {
    console.log('[Cockpit.js] 2nd useEffect');
    return ()=> {
        console.log('[Cockpit.js] clean up work in 2nd useEffect');
    };
});

    const assignedClasses = [];
    let btnClass = '';
    
    if(props.showPersons){
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2){
      assignedClasses.push(classes.red);
    }

    if (props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>Veja! Isso funciona!</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
        );
};

export default cockpit;