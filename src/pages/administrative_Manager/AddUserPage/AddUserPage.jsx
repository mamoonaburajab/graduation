import React from 'react'
import AddUser from '../../../component/AddUser/AddUser'
import Navbar_Manager from '../../../component/Narbar_Manager/Navbar_Manager'

const AddUserPage = () => {
  return (
    <div>
        <div>
            <Navbar_Manager/>   
        </div>
    <div><AddUser/></div>
    </div>
  )
}

export default AddUserPage