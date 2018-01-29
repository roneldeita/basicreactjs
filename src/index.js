import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';
import Store from './store';
import registerServiceWorker from './registerServiceWorker';

//create an instance of the store
const store = Store();

ReactDOM.render(<Routes store={store} />, document.getElementById('root'));
registerServiceWorker();
