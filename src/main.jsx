import './index.css';

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx' 
import GlobalProvider from './context/GlobalProvider';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
        <GlobalProvider>
            <App />
        </GlobalProvider>
    </BrowserRouter>
)