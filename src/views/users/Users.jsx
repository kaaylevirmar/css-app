import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [deletedUser, setDeletedUser] = useState([]);
    const PORT = import.meta.env.VITE_PORT;
    const baseUrl = import.meta.env.VITE_APP_URL;

    useEffect(() => {
        axios.get(`${baseUrl}:${PORT}/users`)
            .then((res) => {
                setUsers(res.data);
            })
            .catch((e) => {
                console.log(e);
            })
    }, [deletedUser])

    const deleteUser = async (id) => {
        await axios.delete(`${baseUrl}:${PORT}/user/${id}/delete`)
            .then((res) => {
                setDeletedUser(res.data);
            })
    }

    return (
        <div className='w-11/12 m-10 h-auto flex i flex-col relative overflow-x-auto shadow-md sm:rounded-lg'>
            <div className='flex justify-between p-5'>
                <div>
                    <h1><b>User</b></h1>
                    <p>A list of all the users in your account including their name, title, email and role.</p>
                </div>
                <div><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'><Link to='/user-create'>Add User</Link></button></div>

            </div>
            <table className="w-full h-4/5 text-md text-left rtl:text-right mx-5">
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
                                <td className='py-5 flex gap-1'>
                                    <div><button className='bg-blue-500 hover:bg-blue-800 text-white py-1 px-2 rounded'><Link to={`/user/${user._id}`}>View</Link></button></div>
                                    <div><button className='bg-blue-500 hover:bg-blue-800 text-white py-1 px-2 rounded'><Link to={`/user/${user._id}/edit`}>Edit</Link></button></div>
                                    <div><button className='bg-red-500 hover:bg-red-800 text-white py-1 px-2 rounded' onClick={() => {
                                        deleteUser(user._id)
                                    }}>Delete</button></div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Users