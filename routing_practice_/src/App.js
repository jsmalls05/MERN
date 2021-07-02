import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
import DBZ from './components/DBZ.jsx';
import Lebron from './components/Lebron.jsx';

function App() {
    return ( <
        div className = "App" >
        <
        Router >
        <
        DBZ path = "/home" / > 
        <
        Lebron path = "/:number" / >
        <
        /Router>         <
        /div>
    );
}

export default App;
