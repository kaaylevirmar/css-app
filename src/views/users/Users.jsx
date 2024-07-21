import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';

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
        <div>
            <Button><Link to="/user-create">Create User</Link></Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        return (
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td><Button>
                                    <Link to={`/user/${user._id}`}>View</Link>
                                </Button>
                                    <Button onClick={() => {
                                        deleteUser(user._id)
                                    }}>
                                        Delete
                                    </Button>
                                    <Button><Link to={`/user/${user._id}/update`}>Edit</Link></Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default Users