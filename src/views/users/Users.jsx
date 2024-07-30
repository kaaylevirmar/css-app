import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [deletedUser, setDeletedUser] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/users')
            .then((res) => {
                setUsers(res.data);
            })
            .catch((e) => {
                console.log(e);
            })
    }, [deletedUser])

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:3001/user/${id}/delete`)
            .then((res) => {
                console.log(res.data);
                setDeletedUser(res.data);
            })
    }

    return (
        <div className='text-3xl font-bold underline'>
            Hello World
        </div>
    )
}

export default Users