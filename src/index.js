import './styles/index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomeView } from './views/HomeView';
import React from 'react';
import ReactDOM from 'react-dom';
import { TasksProvider } from './context/tasks/TasksContext';

ReactDOM.render(
    <React.StrictMode>
        <TasksProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomeView/>} />
                </Routes>
            </BrowserRouter>
        </TasksProvider>

    </React.StrictMode>,
    document.getElementById('root')
);

