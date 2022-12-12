
import { useEffect, useState } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import UserCars from './components/UserCars'
import userCrud from './hooks/useCrud'

function App() {

  const [closeForm, setcloseForm] = useState(true)
  const {users,createNewUser,deleteUserById, updateUserById, getAllUsers} = userCrud()
 
 const [updateInfo, setUpdateInfo] = useState()



 useEffect(()=>{
  getAllUsers()
 },[])
 console.log(users)
 

  return (
    <div className="App">
      <h1>Users</h1>
      <button onClick={()=> setcloseForm(false)}className='App__btn'>Open Formulary</button> 
      <div className={`form__container ${closeForm && 'close__form'}`}>
      <FormUser 
      createNewUser={createNewUser}
      updateInfo={updateInfo}
      updateUserById={updateUserById}
      setUpdateInfo={setUpdateInfo}
      setcloseForm={ setcloseForm}
      />
     </div>
      <div className='user_container'>
      
        {
          users?.map(user=>(
           <UserCars 
           key={user.id}
           user ={user}
           deleteUserById={deleteUserById}
           setUpdateInfo={setUpdateInfo}
           />
          ))
        }
        
        
      </div>
    </div>
  )
}

export default App

