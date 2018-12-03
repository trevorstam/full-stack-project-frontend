import React from 'react';

import superagent from 'superagent';

import Page from './pages/pages.js';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      content: []
    }
  }
  componentDidMount() {
    superagent.get('https://fullstack-backend-trevor.herokuapp.com/content')
    .then((data)=>{
      this.setState({content: data.body})
      .catch(console.error);
    });

  }
  render() {
    return (
      <Page content = {this.state.content}/>
    );
  }
}

export default App;
