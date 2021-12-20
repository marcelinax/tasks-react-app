import './styles/index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomeView } from './views/HomeView';
import React from 'react';
import ReactDOM from 'react-dom';
import { TaskFilterProvider } from './context/taskFilter/TaskFilterContext';
import { TasksProvider } from './context/tasks/TasksContext';

ReactDOM.render(
    <React.StrictMode>
        <TaskFilterProvider>
            <TasksProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<HomeView/>} />
                    </Routes>
                </BrowserRouter>
            </TasksProvider>
        </TaskFilterProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

