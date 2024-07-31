import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const EditUser = () => {
    const { id } = useParams();
    const [fname, setFname] = useState('');
    const [lname, setlname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const fnameHandleChange = (event) => {
        setFname(event.target.value);
    };

    const lnameHandleChange = (event) => {
        setlname(event.target.value);
    };

    const emailHandleChange = (event) => {
        setEmail(event.target.value);
    };

    const usernameHandleChange = (event) => {
        setUsername(event.target.value);
    };

    const passwordHandleChange = (event) => {
        setPassword(event.target.value);
    };

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`http://localhost:3001/user/${id}`);
                setFname(res.data.firstName);
                setlname(res.data.lastName);
                setEmail(res.data.email);
                setUsername(res.data.username);
                setPassword(res.data.password);
            } catch (e) {
                console.log(e);
            }
        }
        fetchUser();
    }, [id]);

    const updateUser = async () => {
        const formData = {
            firstName: fname,
            lastName: lname,
            email: email,
            username: username,
            password: password
        }

        await axios.put(`http://localhost:3001/user/${id}/update`, formData,
            {
                'Content-Type': 'application/json',
            }
        )
    }

    return (
        <div className='w-full flex justify-start'>
        <div className='w-3/4 flex flex-col items-center border shadow-md m-10 p-10'>
            <div className='mb-10  flex flex-col text-center w-1/2'>
                <h1 className='font-bold text-4xl tracking-wide'>Edit User Account</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            <form className='w-11/12' onSubmit={() => {updateUser();}} >
                <div className='flex mb-6 w-full gap-5'>
                <div className='w-full'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor="fname">First Name:</label>
                    <input className='border p-2 rounded-md border-gray-500 focus:outline-none focus:ring-2 w-full' id='fname' type="text" value={fname} onChange={(event) => {fnameHandleChange(event);}} />
                </div>
                <div className='w-full'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor="lname">Last Name:</label>
                    <input className='border p-2 rounded-md border-gray-500 focus:outline-none focus:ring-2 w-full' id='lname' type="text" value={lname} onChange={(event) => {lnameHandleChange(event);}} />
                </div>
                </div>
                <div className='mb-6'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor="email">Email:</label>
                    <input className='border p-2 rounded-md border-gray-500 focus:outline-none focus:ring-2 w-full' id='email' type="text" value={email} onChange={(event) => {emailHandleChange(event);}} /></div>
                <div className='mb-6'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor="username">Username: </label>
                    <input className='border p-2 rounded-md border-gray-500 focus:outline-none focus:ring-2 w-full' id='username' type="text" value={username} onChange={(event) => {usernameHandleChange(event);}} /></div>
                <div className='mb-6'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor="password">Password:</label>
                    <input className='border p-2 rounded-md border-gray-500 focus:outline-none focus:ring-2 w-full' id='password' type="password" value={password} onChange={(event) => {passwordHandleChange(event);}} /></div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>Submit</button>
            </form>
        </div>
        </div>
    )
}

export default EditUser