import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './css/main.css';
import './lib/html-size-calculation';
import Main from './route/Main';
import store from './redux/store/store';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
const render = () => {
    ReactDOM.render((
        <Provider store={store}>
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        </Provider>
    ), document.getElementById('root'));
}
render()
store.subscribe(render);
registerServiceWorker();
