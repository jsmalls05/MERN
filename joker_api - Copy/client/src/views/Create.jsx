import React, { useState } from 'react';

const Create = (props) => {
    const [form, setForm] = useState({
        setup: "",
        punchline: "",
    });

    const onChangeHandler = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("submitted");
    }

    return ( 
        <div>        
            <h1 > Product Manager </h1>
            <br/>
            <form onSubmit = { onSubmitHandler }>
            <label> Title </label>
            <input name="setup" onChange={onChangeHandler} type="text"></input><br/>

            <label> Price </label>
            <input name="punchline" onChange={onChangeHandler} type="text"></input><br/>

            <label> Description </label>
            <input name="description" onChange={onChangeHandler} type="text"></input><br/><br/>

            <input type="submit" value="Create"></input>
            </form > 
        </div>
    )
}

export default Create;