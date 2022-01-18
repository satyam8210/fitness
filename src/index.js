import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Home from './components/Home';
import store from './store';
import { Provider } from "react-redux"
function App() {
    return (
        <div className='App'>
            <Provider store={store}>
                <Home />
            </Provider>
        </div>
    );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

