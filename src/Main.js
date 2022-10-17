import React from 'react';
import HornedBeast from './HornedBeast.js';


class Main extends React.Component {
  render() {
    return (
      <>
      <main className='main-component'>
       <HornedBeast 
       title="Big" 
       alt="Big Pic"
       imageUrl="https://images.unsplash.com/photo-1541793647037-86afaddc1cf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
       description="My boy Big looking great"
       />
       <HornedBeast 
       title="Gary"
       alt="Pic of Gary"
       imageUrl="https://images.unsplash.com/photo-1603298517316-fe01810dc990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
       description="Gary looking quite majestic"
       />

       
      </main>
      </>
    )
  }
}

export default Main;