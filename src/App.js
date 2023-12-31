import React, { useState } from 'react'
import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UserList'

function App() {
  const [usersList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList(prevState=>[...prevState,{name:uName , age : uAge, id: Math.random().toString()}])
  }

  return (
    <div>

      {/* add the user form */}
      <AddUser onAddUser={addUserHandler} />
      {/* shows the user list */}
      <UserList users={usersList} />
    </div>
  )
}

export default App