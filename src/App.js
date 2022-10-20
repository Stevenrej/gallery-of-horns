// import
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

import './App.css';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js';

// class component

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heart: '',
      showModal: false,
      selectBeast: '',
      image_url: '',
      data: data,
      selectedBeast: {}
    }
  }

  addHearts = () => {
    this.setState({
      heart: this.state.heart + '♥️'
    })
  }

  displayAsModal = (name) => {
    const selectedBeast = data.find(beast => beast.title === name);
    this.setState({ selectedBeast, showModal: true });
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  handleOpenModal = (title, image_url) => {

    this.setState({
      showModal: true,
      selectBeast: title,
      image_url: image_url,
    })
  }


  render() {
    return (
      <>
        <Header
          heart={this.state.heart}
        />
        <Main
          addHearts={this.addHearts}
          handleOpenModal={this.handleOpenModal}
          data={this.state.data}
        />
        <SelectedBeast
        handleOpenModal={this.handleOpenModal}
        handleCloseModal={this.handleCloseModal}
        selectBeast={this.state.selectBeast}
        image_url={this.state.image_url}
        selectedBeast={this.state.selectedBeast}
        showModal={this.state.showModal}

        />

        <Footer/>
      </>
    )
  }
};


// export

export default App;