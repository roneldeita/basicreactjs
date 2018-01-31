import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';
import Store from './store';
import registerServiceWorker from './registerServiceWorker';
import { loadCourses } from './actions/courseAction';
import { loadAuthors } from './actions/authorAction';

//create an instance of the store
const store = Store();
// load courses from here
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

ReactDOM.render(<Routes store={store} />, document.getElementById('root'));
registerServiceWorker();
