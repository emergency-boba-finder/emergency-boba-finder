import React from 'react'
import ReactDOM from 'react-dom'
import EmergencyBobaFinder from "./components/EmergencyBobaFinder"
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <EmergencyBobaFinder />
    </BrowserRouter>,
    document.querySelector('#root')
);