import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Main = (props) => {
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/jokes")
            .then(res => setJokes(res.data.joke))
    }, [])

    return ( 
        <div >
            <h1 className = "jumbotron"> Product Manager </h1> 
            <ul>
                {
                    jokes.map(function(jokes, i) {
                    return <li key = { i } > { jokes.setup } </li>
                })
                } 
            </ul> 
        </div >
    )
}

export default Main;