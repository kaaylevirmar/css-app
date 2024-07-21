import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CreateUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]);
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
                setUser(res.data);
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

    const addUser = async () => {
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
        <div>
            <form onSubmit={() => {
                addUser();
            }} >
                <div>
                    <label htmlFor="fname">First Name:</label>
                    <input id='fname' type="text" value={fname} onChange={(event) => {
                        fnameHandleChange(event);
                    }} /></div>
                <div>
                    <label htmlFor="lname">Last Name:</label>
                    <input id='lname' type="text" value={lname} onChange={(event) => {
                        lnameHandleChange(event);
                    }} /></div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input id='email' type="text" value={email} onChange={(event) => {
                        emailHandleChange(event);
                    }} /></div>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input id='username' type="text" value={username} onChange={(event) => {
                        usernameHandleChange(event);
                    }} /></div>
                <div>
                    <label htmlFor="fname">Password:</label>
                    <input id='fname' type="text" value={password} onChange={(event) => {
                        passwordHandleChange(event);
                    }} /></div>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default CreateUser