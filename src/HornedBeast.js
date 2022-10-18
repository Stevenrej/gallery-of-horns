import React from 'react';
import Button from 'react-bootstrap/Button'



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

      <article>
        <h2>{this.props.title}</h2>
        <img
          src={this.props.imageurl}
          alt={this.props.alt}
          title={this.props.title}
        >
        </img>
        <p>{this.props.description}</p>
        <p>{this.state.favorties} Favorites</p>

        <Button onClick={this.handleHeart} variant="danger">❤️</Button>
      </article>

    )
  }
}

export default HornedBeast;