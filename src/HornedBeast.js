import React from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
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

  render() {
    return (
      <div class='parent'>
        <Card id='cards' style={{ width: '12vw' }}>
          <Card.Img
            variant="top"
            src={this.props.imageurl}
            alt={this.props.alt}
            title={this.props.title}
          />
          <Card.Body>
            <article>
              <Card.Title>
                <h2>{this.props.title}</h2>
              </Card.Title>
              <Card.Text>
                <p>{this.props.description}</p>
                <p>{this.state.favorties} Favorites</p>
              </Card.Text>
              <Button onClick={this.handleHeart} variant="danger">❤️</Button>
            </article>
          </Card.Body>
        </Card>
      </div>

    )
  }
}

export default HornedBeast;