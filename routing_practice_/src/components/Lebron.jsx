import React from 'react';

const Lebron = (props) => {
    return(
        <div>
            <h1>Yeah the G.O.A.T is here!</h1>
            {
                isNaN(props.number) ? <p>The word is: {props.number}</p> :
                <p>The number is : {props.number}</p>
            }
            
            <img src="https://i.ytimg.com/vi/gUePid0FXiM/maxresdefault.jpg" alt="Lebron James 2k21"/>
        </div>
    )
}

export default Lebron;