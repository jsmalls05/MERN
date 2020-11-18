import React, { useState } from 'react';

const Form = (props) => {
        const [form, setForm] = useState({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        });

        const onChangeHandler = (e) => {
            setForm({
                ...form,
                [e.target.name]: e.target.value
            });
        }

        const firstValid = (firstInput) => {
            if (firstInput.length >= 2)
                return true;
            return false;
        }

        const lastValid = (lastInput) => {
            if (lastInput.length >= 2)
                return true;
            return false;
        }

        const emailValid = (emailInput) => {
            if (emailInput.length >= 5)
                return true;
            return false;
        }

        const passwordValid = (passwordInput) => {
            if (passwordInput.length >= 8)
                return true;
            return false;
        }

        const confirmValid = (confirmInput) => {
            if (confirmInput.length >= 8)
                return true;
            return false;
        }

        return ( <
                div >
                <
                h1 > Complete form < /h1>

                <
                form >
                <
                div className = "form-group" >
                <
                label htmlFor = "firstName" > First Name < /label>             <
                input onChange = { onChangeHandler }
                type = "text"
                name = "firstName" / > {!firstValid(form.firstName) && < p className = "alert alert-danger" > must be at least 2 characters < /p>} < /div >
                    <
                    div className = "form-group" >
                    <
                    label htmlFor = "lastName" > Last Name < /label>             <
                    input onChange = { onChangeHandler }
                    type = "text"
                    name = "lastName" / > {!lastValid(form.lastName) && < p className = "alert alert-danger" > must be at least 2 characters < /p>}  < /
                        div > <
                        div className = "form-group" >
                        <
                        label htmlFor = "email" > Email < /label>             <
                        input onChange = { onChangeHandler }
                        type = "text"
                        name = "email" / > {!emailValid(form.email) && < p className = "alert alert-danger" > must be at least 5 characters < /p>} < /
                            div > <
                            div className = "form-group" >
                            <
                            label htmlFor = "password" > Password < /label>             <
                            input onChange = { onChangeHandler }
                            type = "password"
                            name = "password" / > {!passwordValid(form.password) && < p className = "alert alert-danger" > must be at least 8 characters < /p>} < /
                                div > <
                                div className = "form-group" >
                                <
                                label htmlFor = "confirmPassword" > Confirm Password < /label>             <
                                input onChange = { onChangeHandler }
                                type = "password"
                                name = "confirmPassword" / > {!confirmValid(form.confirmPassword) && < p className = "alert alert-danger" > must be at least 8 characters < /p>} <
                                    /div>    < /
                                    form >

                                    <
                                    div >
                                    <
                                    h2 > Results < /h2> <
                                    p > First Name: { form.firstName } < /p> <
                                    p > Last Name: { form.lastName } < /p> <
                                    p > Email: { form.email } < /p> <
                                    p > Pasword: { form.password } < /p> <
                                    p > Confirm Password: { form.confirmPassword } < /p> < /
                                    div >

                                    <
                                    /
                                    div >
                                )
                            }

                            export default Form;