import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import HeaderSection from './components/header-section';
import FlatList from './components/flats_list';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

class Flatbuddies extends Component {
  constructor(props) {
    super(props);

    this.state = { flats: {} };
  }

  render() {
    return (
      <div className="flat-buddies">
        <HeaderSection />
        <FlatList />
      </div>
    );
  }
}

ReactDOM.render(<Flatbuddies />, document.getElementById('root'));
registerServiceWorker();
