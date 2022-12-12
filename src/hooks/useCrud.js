import { useState } from "react"
import axios from "axios"

const userCrud=()=>{
    const [users, setUsers] = useState()
    const getAllUsers = ()=>{
        const URL='http://users-crud.academlo.tech/users/'
        axios.get(URL)
        .then(res=> setUsers(res.data))
        .catch(err=> console.log(err))
       }
       const createNewUser =(data)=>{
        const URL='http://users-crud.academlo.tech/users/'
        axios.post(URL,data)
        .then(res=> {console.log(res.data)
           getAllUsers()})
        .catch(err=> console.log(err))
       }
      
       const deleteUserById = (id)=>{
        const URL=`http://users-crud.academlo.tech/users/${id}/`
        axios.delete(URL)
        .then(() => getAllUsers())
        .catch(err=> console.log(err))
       }
      
       const updateUserById=(id, data)=>{
        const URL = `http://users-crud.academlo.tech/users/${id}/`
        axios.put(URL, data)
        .then(() => getAllUsers())
        .catch(err=> console.log(err))
       }
       return {users,createNewUser,deleteUserById, updateUserById, getAllUsers}

}
export default userCrud