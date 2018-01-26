import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';
import Store from './store';
import registerServiceWorker from './registerServiceWorker';

const store = Store();

ReactDOM.render(<Routes store={store} />, document.getElementById('root'));
registerServiceWorker();
