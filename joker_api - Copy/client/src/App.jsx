import React from 'react';
import Main from './views/Main';
import Create from './views/Create';
import { Router } from '@reach/router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return ( 
    <div className = "App">
        <Router>
            <Main path = "/" />
            <Create path = "/create" />
        </Router>  
    </div>
    );
}

export default App;