import React from 'react';
import './App.css';

import PersonCard from './components/PersonCard';

function App() {
    return ( <
        div className = "App" >
        <
        PersonCard lastName = { " Doe " }
        PersonCard firstName = { " Jane " }
        PersonCard age = { " 45 " }
        PersonCard hairColor = { " Black " }
        / >   <
        PersonCard lastName = { " Smith " }
        PersonCard firstName = { " John " }
        PersonCard age = { " 88 " }
        PersonCard hairColor = { " Brown " }
        /> <
        PersonCard lastName = { " Filmore " }
        PersonCard firstName = { " Millard " }
        PersonCard age = { " 50 " }
        PersonCard hairColor = { " Brown " }
        /> <
        PersonCard lastName = { " Smith " }
        PersonCard firstName = { " Maria " }
        PersonCard age = { " 62 " }
        PersonCard hairColor = { " Brown " }
        />< /
        div >


    );
}

export default App;