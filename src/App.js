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
      selectedVal: '',
      sortedData: data,

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



  handleSelect = (event) => {
    event.preventDefault()
    let selected = event.target.selected.value;
    console.log(selected);
    console.log(event.target)
    if (selected === '1 Horn') {
      let newData = data.filter(beast => beast.horns === 1);
      this.setState({
        data: newData
      })
    } else if (selected === '2 Horns') {
      let newData = data.filter(beast => beast.horns === 2);
      this.setState({
        data: newData
      })
    } else if (selected === '3 Horns') {
      let newData = data.filter(beast => beast.horns === 3);
      this.setState({
        data: newData
      })
    } else if (selected === '100 Horns') {
      let newData = data.filter(beast => beast.horns === 100);
      this.setState({
        data: newData
      })
    } else {

      this.setState({
        data: data
      })
    }
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
          handleSelect={this.handleSelect}
        />


        <SelectedBeast
          handleOpenModal={this.handleOpenModal}
          handleCloseModal={this.handleCloseModal}
          selectBeast={this.state.selectBeast}
          image_url={this.state.image_url}
          selectedBeast={this.state.selectedBeast}
          showModal={this.state.showModal}

        />

        <Footer />
      </>
    )
  }
};


// export

export default App;