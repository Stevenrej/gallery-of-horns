import React from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './HBeast.css';



class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorties: 0,
    };
  };

  handleHeart = (event) => {
    this.setState({
      favorties: this.state.favorties + 1
    });
  }

  handleNameClick = () => {
    this.props.handleOpenModal(this.props.title, this.props.imageurl)


  }

  render() {
    return (
      <Col>

        <Card
          style={{ width: '12vw' }}>
          <Card.Img
            variant="top"
            src={this.props.imageurl}
            alt={this.props.alt}
            onClick={this.props.addHearts}
          />
          <Card.Body>
            <Card.Title onClick={this.handleNameClick}> {this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text>
              {this.props.horns} Horn(s)
            </Card.Text>
            <Card.Text>
              {this.state.favorties} Hearts
            </Card.Text>
            <Button onClick={this.handleHeart} variant="danger">❤️</Button>
          </Card.Body>
        </Card>

      </Col>

    )
  }
}

export default HornedBeast;