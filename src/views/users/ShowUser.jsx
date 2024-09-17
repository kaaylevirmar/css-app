import React, { useEffect, useState } from 'react'
import { useParams, useOutletContext } from 'react-router-dom'
import axios from 'axios'


const ShowUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]);
    const PORT = import.meta.env.VITE_PORT;
    const baseUrl = import.meta.env.VITE_APP_URL;
    const { token } = useOutletContext();

    useEffect(() => {
        const fetchUser = async () => {
            await axios.get(`${baseUrl}:${PORT}/user/${id}`, 
                {
                    headers: {
                        Authorization: token,
                    }
                },
            )
                .then((res) => {
                    setUser(res.data);
                })
                .catch((e) => {
                    console.log(e);
                })
        }
        fetchUser();
    }, [id])

    return (
        <div>
            <div>ID: {user._id}</div>
            <div>FirstName: {user.firstName}</div>
            <div>Last Name: {user.lastName}</div>
            <div>Password: {user.password}</div>
        </div>
    )
}

export default ShowUser