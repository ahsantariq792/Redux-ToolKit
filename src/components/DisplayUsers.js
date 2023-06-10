import React from 'react'
import { useSelector } from "react-redux"
import { MdDeleteForever } from "react-icons/md"
import { useDispatch } from 'react-redux'
import { removeUser } from '../Store/Slices/UserSlices'

function DisplayUsers() {

    const dispatch = useDispatch()

    const data = useSelector((state) => {
        return state.user
        //jo naam store me dia ha wo aye ga state.<> k sath
    })

    console.log("data", data)

    const deleteUser = (id) => {

        dispatch(removeUser(id))
        console.log(id)

    }
    return (
        <>
            <div className='display-users'>
                <h3>List of users</h3>
                {data.map((item, id) => {
                    return (
                        <li key={id} className='userList'>
                            {item}
                            <MdDeleteForever className='delete-btn' onClick={() => deleteUser(id)} />
                        </li>
                    )
                })}
            </div>
        </>)
}

export default DisplayUsers