import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Output from './components/output';
import Paragraphs from './components/controls/paragraphs';
import HTML from './components/controls/html';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paragraphs: 4,
      html: true,
      text: ''
    }
  }

  componentWillMount() {
    this.getSampleText();
  }

  getSampleText() {
    axios.get(`http://hipsterjesus.com/api?paras=${this.state.paragraphs}&html=${this.state.html}`)
      .then((response) => {
        this.setState({ text: response.data.text });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleChangeParagraphs(value) {
    this.setState({ paragraphs: value }, () => {
      this.getSampleText();
    });
  }

  handleChangeHTML(value) {
    this.setState({ html: value }, () => {
      this.getSampleText();
    });
  }

  render() {
    return (
      <div className="container">
        <div className="container">
          <h1>React Sample Text Generator</h1>
          <form className="form-inline">
            <Paragraphs paragraphs={this.state.paragraphs} value={this.handleChangeParagraphs.bind(this)}/>
            <HTML html={this.state.html} value={this.handleChangeHTML.bind(this)}/>
          </form>
        </div>
        <Output value={this.state.text}/>
      </div>
    );
  }
}

export default App;
