import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from '../App'
import Users from '../views/users/Users'
import ShowUser from '../views/users/ShowUser'
import CreateUser from '../views/users/CreateUser'
import EditUser from '../views/users/EditUser'
import Login from '../views/Login'


function MainRouter() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<App />}>
                    <Route path="/users" element={<Users />} />
                    <Route path="/user-create" element={<CreateUser />} />
                    <Route path="/user/:id" element={<ShowUser />} />
                    <Route path="/user/:id/edit" element={<EditUser />} />
                </Route>
            </Routes>
        </React.Fragment>
    )
}

export default MainRouter