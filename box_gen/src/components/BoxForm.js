import React from 'react';
import { useState } from 'react';

// This function takes in the user's input
const BoxForm = (props) => {
    const [boxColor, setBoxColor] = useState("");
    const [boxHeight, setBoxHeight] = useState("");
    const [boxWidth, setBoxWidth] = useState("");

    const addNewBox = (e) => {
        e.preventDefault();
        props.generateBox({
            Color: boxColor,
            Height: boxHeight,
            Width: boxWidth
        })

        // This clears the form after the box is generated
        setBoxColor("");
        setBoxHeight("");
        setBoxWidth("");
    }

    return ( <
        >
        <
        div className = "container" >
        <
        h3 > Add a Box < /h3> <
        form onSubmit = { addNewBox } >
        <
        div class = "form-group" >
        <
        label > Box Color < /label> <
        input type = "text"
        class = "form-control"
        onChange = {
            (e) => setBoxColor(e.target.value) }
        value = { boxColor } > < /input> <
        /div>

        <
        div class = "form-group" >
        <
        label > Box Height in Pixels < /label> <
        input type = "number"
        class = "form-control"
        onChange = {
            (e) => setBoxHeight(e.target.value) }
        value = { boxHeight } > < /input> <
        /div>

        <
        div class = "form-group" >
        <
        label > Box Width in Pixels < /label> <
        input type = "number"
        class = "form-control"
        onChange = {
            (e) => setBoxWidth(e.target.value) }
        value = { boxWidth } > < /input> <
        /div>

        <
        div >
        <
        button className = "btn btn-success btn-md "
        type = "submit" > Generate My Box < /button> <
        /div>

        <
        /form> <
        /div> <
        />
    );
}

export default BoxForm;