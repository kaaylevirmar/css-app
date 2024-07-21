import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ShowUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            await axios.get(`http://localhost:3001/user/${id}`)
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