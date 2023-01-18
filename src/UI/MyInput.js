import React from 'react';
import classes from './MyInput.module.css'

const Button = (props) => {
    return (
        <input className={classes.myInput} {...props}  />
            
    );
};

export default Button;