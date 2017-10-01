import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Flatbuddies from './Flatbuddies';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Flatbuddies />, document.getElementById('root'));
registerServiceWorker();
