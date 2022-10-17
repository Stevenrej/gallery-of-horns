import React from 'react';
import Person from './Person.js';


class Main extends React.Component {
  render() {
    return (
      <>
      <main className='main-component'>
       <Person 
       name="Zoe" 
       course="301"
       />
       <Person 
       name="John"
       />
       <Person 
       name="Pork"
       />
       
      </main>
      </>
    )
  }
}

export default Main;