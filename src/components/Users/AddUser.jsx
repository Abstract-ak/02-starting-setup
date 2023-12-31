import React, { useState } from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandle = (e) => {
    e.preventDefault();

    //trim method extra spaces ko htta dega.
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
        setError({
            title: 'Invalid Input',
            message:'Please enter valid username and age.'
        });
        //simply return
        return;
    }
    if(+enteredAge < 1){
        setError({
            title: 'Invalid age',
            message:'Please enter a valid age (> 0).'
        });
        return;
    }
    // console.log( enteredUsername, enteredAge);
    props.onAddUser(enteredUsername, enteredAge);

    //Reseting the form
    setEnteredUsername('');
    setEnteredAge('');
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const errorHandler = () =>{
        setError(null);
    }

  return (
    <>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className ={classes.input}>
    <form onSubmit={addUserHandle}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' value={enteredUsername} onChange={usernameChangeHandler}/>
        <label htmlFor='age'>Age (years)</label>
        <input id='username' type='number' value={enteredAge} onChange={ageChangeHandler}/>

        <Button type='submit'>Add User</Button>
    </form>
    </Card>
    </>
  )
}

export default AddUser