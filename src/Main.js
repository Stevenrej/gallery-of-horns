import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data.json';
import './Main.css'


class Main extends React.Component {
  render() {
    let beast = []

    data.forEach((thing) => {
      beast.push(
        <HornedBeast
          id={thing._id}
          imageurl={thing.image_url}
          title={thing.title}
          description={thing.description}
          keyword={thing.keyword}
          horns={thing.horns}
         /> )
    });

    return (
      <>
        <main >
          {beast}
        </main>
      </>
    )
  }
}

export default Main;