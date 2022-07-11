import React from 'react'
import Button from '../../components/mini/Button'
import CreateUserForm from '../../components/create-user/CreateUserForm'
import UserPassword from '../../components/create-user/UserPassword'
import './css/CreateUser.css'


function CreateUser() {
  return (
    <div className='CreateUser'>
      <CreateUserForm />
      <UserPassword />
   
      <div className='buttons-main'>
        <div className='left'>
        </div>
        <div className='right'>
          <Button className='cancel' label={"Cancel"} color={"#868686"} borderColor={"#868686"} />
          <Button className='submit' margin={"0px 0px 0px 20px"} color={"var(--white)"} background={"var(--blue)"} label={"Create"} />
        </div>
      </div>
    </div>
  )
}

export default CreateUser