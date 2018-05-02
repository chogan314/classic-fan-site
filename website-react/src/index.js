import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/routing/App';
import './style/style.css';

ReactDOM.render((
    <BrowserRouter onUpdate={ () => window.scrollTo(0, 0) }>
        <App />
    </BrowserRouter>
    ), document.getElementById('root'));