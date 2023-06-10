import React from 'react'
// import { deleteUsers } from '../Store/Slices/UserSlices'
import { deleteUsers } from '../Store/actions'
import { useDispatch } from 'react-redux'


const DeleteAllUsers = () => {

    let dispatch = useDispatch()
    const deleteAllUsers = (payload) => {
        dispatch(deleteUsers(payload))
    }
    return (
        <>
            <div className='deleteAllUser'>
                <button onClick={() => deleteAllUsers()} style={{ marginTop: "20px" }} className='AddNewUser-btn'>Delete All</button>

            </div>
        </>
    )
}

export default DeleteAllUsers