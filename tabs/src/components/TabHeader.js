import React from 'react';

const TabHeader = (props) => {
    const selectedStyle = {
        backgroundColor: "red",
        display: "inline-block",
        width: "200px"
    }

    const notSelectedStyle = {
        backgorundColor: "blue",
        display: "inline-block",
        width: "200px"
    }

    return ( <
        div style = { props.selected ? selectedStyle : notSelectedStyle }
        onClick = {
            () => props.handleClick(props.index)
        } >
        Tab { props.index + 1 } { props.title } <
        /div>
    )
}

export default TabHeader;