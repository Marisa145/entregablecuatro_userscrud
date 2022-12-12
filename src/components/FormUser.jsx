import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/formUser.css'


const FormUser = ({createNewUser, updateInfo,updateUserById,setUpdateInfo,  setcloseForm}) => {

    useEffect(()=>{
        reset(updateInfo)
    },[updateInfo])

    const{register, handleSubmit, reset}=useForm()
    const submit= (data)=>{
        if(updateInfo){
            updateUserById(updateInfo.id, data)
            setUpdateInfo()
        }else{
            createNewUser(data)
        }
        

        reset({
            email:"",
            password:"",
            first_name:"",
            last_name:"",
            birthday:""
        })
    }


  return (
    <form className='form 'onSubmit={handleSubmit(submit)}>
        <div onClick={()=> setcloseForm(true)} className='form__x'>X</div>
        <h2 className='form__title'>{updateInfo ? 'Update' : 'Create'}</h2>
        <div className='form__div'>
            <label htmlFor="email" className='form__label'>Email </label>
            <input className='form__input' type="text" id="email" {...register("email")}/>
        </div>
        <div className='form__div'>
            <label htmlFor="password" className='form__label'>Password</label>
            <input className='form__input' type="password" id="password" {...register("password")}/>
        </div>
        <div className='form__div'>
            <label htmlFor="first_name" className='form__label'>First Name</label>
            <input className='form__input' type="text" id="first_name" {...register("first_name")}/>
        </div>
        <div className='form__div'>
            <label htmlFor="last_name" className='form__label'>Last Name</label>
            <input className='form__input' type="text" id="last_name" {...register("last_name")}/>
        </div>
        <div className='form__div'>
            <label htmlFor="birthday" className='form__label'>Birthday </label>
            <input className='form__input' type='date' id="birthday" {...register("birthday")}/>
        </div>
        <button className='form__btn'>{updateInfo ? 'Update' : 'Create'}</button>
    </form>
  )
}

export default FormUser