import React from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const addUserHandle = (e) => {
    e.preventDefault();

    }

  return (
    <Card className ={classes.input}>
    <form onSubmit={addUserHandle}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text'/>
        <label htmlFor='age'>Age (years)</label>
        <input id='username' type='number'/>

        <button type='submit'>Add User</button>
    </form>
    </Card>
    
  )
}

export default AddUser