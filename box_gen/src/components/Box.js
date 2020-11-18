import React from 'react';


const boxStyle = {
    display: 'inline-block',
    padding: '10px'
}

const Box = (props) => {
    return ( <
        div style = { boxStyle } >
        <
        hr / >
        <
        h5 > { props.myBox.Color } < /h5> <
        h5 > { props.myBox.Hieght } < /h5> <
        h5 > { props.myBox.Width } < /h5> <
        hr / >
        <
        /div>
    );
}

export default Box;