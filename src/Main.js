import React from 'react';
import HornedBeast from './HornedBeast.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import './Main.css'


class Main extends React.Component {
  render() {


    let beast = this.props.data.map((thing) => {

      return <HornedBeast
        key={thing._id}
        imageurl={thing.image_url}
        title={thing.title}
        description={thing.description}
        addHearts={this.props.addHearts}
        handleOpenModal={this.props.handleOpenModal}
      />
    });

    return (
      <>
        <main>
          <Container>
            <Row xs={1} s={2} md={4} lg={6}>

              {beast}


            </Row>
          </Container>
        </main>
      </>
    )
  }
}

export default Main;