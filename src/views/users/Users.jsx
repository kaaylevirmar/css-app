import React, { useEffect, useState } from 'react'
import axios from "axios"
import {useOutletContext} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [deletedUser, setDeletedUser] = useState([]);
    const PORT = import.meta.env.VITE_PORT;
    const baseUrl = import.meta.env.VITE_APP_URL;
    const { showFlashMessage, token }  = useOutletContext();

    const roles = [
        { value: 'staff', option: 'Staff'},
        { value: 'admin', option: 'Admin'},
        { value: 'priest', option: 'Priest'}
    ]

    const formik = useFormik({
        initialValues: {
            name: '', 
            role: ''
        }
    })

    useEffect(() => {
        axios.get(`${baseUrl}:${PORT}/users`,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                name: formik.values.name,
                role: formik.values.role
            },
        })
            .then((res) => {
                setUsers(res.data);
            })
            .catch((e) => {
                console.log(e);
            })
    }, [deletedUser, formik.values.name, formik.values.role])

    const deleteUser = async (id) => {
        await axios.delete(`${baseUrl}:${PORT}/user/${id}/delete`)
            .then((res) => {
                setDeletedUser(res.data);
            })
    }

    return ( 
        <div className='w-11/12 m-10 h-auto flex i flex-col relative overflow-x-auto shadow-md sm:rounded-lg'>
            <div className=' justify-between p-5'>
                <h1><b>User</b></h1>
                <p>A list of all the users in your account including their name, title, email and role.</p>
            </div>
            <div className='w-full flex justify-between items-center p-2'>
                <div className='flex gap-3 w-9/12'>                
                    <div className='w-1/4' >
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor="name">Search:</label>
                    <input className='border p-2 rounded-md border-gray-500 focus:outline-none focus:ring-2 w-full' id='name' type="text" value={formik.values.name} onChange={formik.handleChange} />
                </div>
                <div className='w-1/4'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor="role">Role:</label>
                    <select className='p-2 rounded border  border-gray-700' name="role" id="role" value={formik.values.role} onChange={formik.handleChange}>
                        <option value="">-</option>
                    {roles.map((role,index)=>{
                        return <option key={index} value={role.value}>{role.option}</option>
                    })}
                    </select>
                </div></div>
                <div>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'><Link to='/user-create'>Add User</Link></button>
                </div>
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
                                <td className='py-5'>{user.role}</td>
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