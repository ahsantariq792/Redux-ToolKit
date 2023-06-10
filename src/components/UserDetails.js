import React from 'react'
import DeleteAllUsers from './DeleteAllUsers'
import fakeUserData from '../api'
import { useDispatch } from 'react-redux'
import { addUser } from '../Store/Slices/UserSlices'
import DisplayUsers from './DisplayUsers'


function UserDetails() {
    const dispatch = useDispatch()


    const AddNewUser = (payload) => {
        console.log(payload)
        dispatch(addUser(payload))
    }

    return (
        <>
            <div className='container'>
                <h1 className='heading'>LIST OF USERS</h1>
                <button className='AddNewUser-btn' onClick={() => AddNewUser(fakeUserData())}>Add New User</button>
                <hr />  
                <DisplayUsers />

                <hr />

                <DeleteAllUsers />
            </div>
        </>
    )
}

export default UserDetails