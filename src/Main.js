import React from 'react';
import HornedBeast from './HornedBeast.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './Main.css'


class Main extends React.Component {
  render() {


    let beast = this.props.data.map((thing) => {

      return <HornedBeast
        key={thing._id}
        imageurl={thing.image_url}
        title={thing.title}
        description={thing.description}
        horns={thing.horns}
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

              <Form onSubmit={this.props.handleSelect}>



<Form.Group>
  <Form.Select name="selected" id="" onChange={this.handleSelect}>
    <option value="">All</option>
    <option value="1 Horn">1</option>
    <option value="2 Horns">2</option>
    <option value="3 Horns">3</option>
    <option value="100 Horns">100</option>

  </Form.Select>
</Form.Group>
<Button type="submit">Submit</Button>
</Form>
            </Row>
          </Container>
        </main>
      </>
    )
  }
}

export default Main;