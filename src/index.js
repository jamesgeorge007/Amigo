import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Amigo from './Amigo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Amigo />, document.getElementById('root'));
registerServiceWorker();
