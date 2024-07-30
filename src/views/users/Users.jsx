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
        <div className='w-4/5 m-10 flex i relative overflow-x-auto shadow-md sm:rounded-lg'>
            <table className="w-full text-md text-left rtl:text-right m-5">
                <thead>
                    <tr className='border-b-2 border-slate-500'>
                        <th className='py-5 w-72'>
                            Name
                        </th >
                        <th className='py-5 w-72'>
                            Email
                        </th>
                        <th className='py-5 w-72'>
                            Role
                        </th>
                        <th className='py-5 w-72'>
                            Username
                        </th>
                        <th className='py-5 w-72'>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) => {
                        return (
                            <tr key={key} className='border-b border-slate-300'>
                                <td className='py-5'>{user.firstName} {user.lastName}</td>
                                <td className='py-5'>{user.email}</td>
                                <td className='py-5'>Admin</td>
                                <td className='py-5'>{user.username}</td>
                                <td className='py-5'>1961</td>
                            </tr>

                        );
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default Users