import './styles/index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import { HomeView } from './views/HomeView';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <React.StrictMode>
        <App />
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeView/>} />
            </Routes>
        </BrowserRouter>
    

    </React.StrictMode>,
    document.getElementById('root')
);

