import { useState } from 'react';
import './App.css';
import TabHeader from './components/TabHeader.js'

function App() {
    const [tabs, setTabs] = useState([{
            selected: false,
            title: "",
            content: "Tab 1 content is showing here."
        },
        {
            selected: true,
            title: "",
            content: "Tab 2 content is showing here."
        },
        {
            selected: false,
            title: "",
            content: "Tab 3 content is showing here."
        }
    ])

    const handleClick = (clickedIndex) => {
        console.log("you clicked tab # ${clickedIndex}");
        tabs.map((tab, i) => {
            let t = tab;
            if (clickedIndex === i) {
                t.selected = true;
            } else {
                t.selected = false;
            }

            setTabs([...tabs.slice(0, i),
                t,
            ].concat(tabs.slice(i + 1)))
        })
    }

    return ( <
        div className = "App" > {
            tabs.map((tab, i) => {
                return <TabHeader selected = { tab.selected }
                index = { i }
                title = { tab.title }
                handleClick = { handleClick }
                />
            })
        }

        {
            tabs.map((tab, i) => {
                return tab.selected ? < p > { tab.content } < /p> : ""
            })
        } <
        /div>
    );
}

export default App;