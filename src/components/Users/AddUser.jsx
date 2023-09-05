import React, { useState } from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandle = (e) => {
    e.preventDefault();

    //trim method extra spaces ko htta dega.
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
        //simply return
        return;
    }
    if(+enteredAge < 1){
        return;
    }
    console.log( enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

  return (
    <Card className ={classes.input}>
    <form onSubmit={addUserHandle}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' value={enteredUsername} onChange={usernameChangeHandler}/>
        <label htmlFor='age'>Age (years)</label>
        <input id='username' type='number' value={enteredAge} onChange={ageChangeHandler}/>

        <Button type='submit'>Add User</Button>
    </form>
    </Card>
    
  )
}

export default AddUser