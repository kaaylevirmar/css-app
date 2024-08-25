import React, { useState } from 'react';
import axios from 'axios';
import {useOutletContext} from 'react-router-dom';
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
    const PORT = import.meta.env.VITE_PORT;
    const baseUrl = import.meta.env.VITE_APP_URL;
    const navigate = useNavigate();
    const [errorMessages, setErrorMessage] = useState([]);
    const { showFlashMessage }  = useOutletContext();

    const roles = [
        { value: 'staff', option: 'Staff'},
        { value: 'admin', option: 'Admin'},
        { value: 'priest', option: 'Priest'}
    ]

    const formik = useFormik({
        initialValues:{
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
            role: ''
        },
        onSubmit: (values) => {
            axios.post(`${baseUrl}:${PORT}/user-create`, values,
                {
                    'Content-Type': 'application/json',
                }
            ).then((res)=>{
                const { message, type } = res.data;
                showFlashMessage(message,type);
                navigate('/users');
    
            }).catch((err)=>{
                console.log(err);
                setErrorMessage(err.response.data.errors);
            })
        }
        
    });

    const getErrorMessage = (value) => {
        const error = errorMessages.filter((error)=>{
            return error.path[0] === value;
        })
        return error;
    } 

    return (
        <div className='w-full flex justify-start'>
        <div className='w-3/4 flex flex-col items-center border shadow-md m-10 p-10'>
            <div className='mb-10  flex flex-col text-center w-1/2'>
                <h1 className='font-bold text-4xl tracking-wide'>Create User Account</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            <form className='w-11/12' onSubmit={formik.handleSubmit}>
                <div className='flex mb-6 w-full gap-5'>
                <div className='w-full'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor="firstName">First Name:</label>
                    <input className='border p-2 rounded-md border-gray-500 focus:outline-none focus:ring-2 w-full' id='firstName' type="text" value={formik.values.firstName} onChange={formik.handleChange} />
                    {errorMessages && getErrorMessage('firstName').map((value,key)=>{
                        return(<div key={key} className='text-red-600 text-sm'>{ value.message }</div>);
                    })}
                </div>
                <div className='w-full'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor="lastName">Last Name:</label>
                    <input className='border p-2 rounded-md border-gray-500 focus:outline-none focus:ring-2 w-full' id='lastName' type="text" value={formik.values.lastName} onChange={formik.handleChange} />
                    {errorMessages && getErrorMessage('lastName').map((value,key)=>{
                        return(<div key={key} className='text-red-600 text-sm'>{ value.message }</div>);
                    })}
                </div>
                </div>
                <div className='mb-6'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor="email">Email:</label>
                    <input className='border p-2 rounded-md border-gray-500 focus:outline-none focus:ring-2 w-full' id='email' type="email" value={formik.values.email} onChange={formik.handleChange} />
                    {errorMessages && getErrorMessage('email').map((value,key)=>{
                        return(<div key={key} className='text-red-600 text-sm'>{ value.message }</div>);
                    })}
                </div>
                <div className='mb-6'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor="username">Username: </label>
                    <input className='border p-2 rounded-md border-gray-500 focus:outline-none focus:ring-2 w-full' id='username' type="text" value={formik.values.username} onChange={formik.handleChange} />
                    {errorMessages && getErrorMessage('username').map((value,key)=>{
                        return(<div key={key} className='text-red-600 text-sm'>{ value.message }</div>);
                    })}    
                </div>
                <div className='mb-6'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor="password">Password:</label>
                    <input className='border p-2 rounded-md border-gray-500 focus:outline-none focus:ring-2 w-full' id='password' type="password" value={formik.values.password} onChange={formik.handleChange} />
                    {errorMessages && getErrorMessage('password').map((value,key)=>{
                        return(<div key={key} className='text-red-600 text-sm'>{ value.message }</div>);
                    })}
                </div>
                <div className='mb-6'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor="role">Role:</label>
                    <select className='w-1/2 p-2 rounded border  border-gray-700' name="role" id="role" value={formik.values.role} onChange={formik.handleChange}>
                        <option selected={true} value="" disabled>-</option>
                    {roles.map((role,index)=>{
                        return <option key={index} value={role.value}>{role.option}</option>
                    })}
                    </select>
                    {errorMessages && getErrorMessage('password').map((value,key)=>{
                        return(<div key={key} className='text-red-600 text-sm'>{ value.message }</div>);
                    })}
                </div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>Submit</button>
            </form>
        </div>
        </div>
    )
}

export default CreateUser