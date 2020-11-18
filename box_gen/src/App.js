import './App.css';
import BoxForm from './components/BoxForm';
import Box from './components/Box';
import { useState } from 'react';

function App() {

    const [boxList, setBoxList] = useState([]);
    const generateBox = (newBox) => {
        setBoxList([...boxList, newBox])
    };

    return ( <
        div className = "App" >
        <
        h1 className = "jumbotron" > Welcome to the Box Generator < /h1> <
        div > < BoxForm generateBox = { generateBox }
        /></div >
        <
        div className = "box" > {
            boxList.map((item, i) => < Box myBox = { item }
                />)
            } <
            /div>

            <
            /div>
        );
    }

    export default App;