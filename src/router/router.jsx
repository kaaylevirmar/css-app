import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from '../App'
import Users from '../views/users/Users'
import ShowUser from '../views/users/ShowUser'
import CreateUser from '../views/users/CreateUser'
import EditUser from '../views/users/EditUser'


function MainRouter() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index path="/users" element={<Users />} />
                    <Route index path="/user-create" element={<CreateUser />} />
                    <Route index path="/user/:id" element={<ShowUser />} />
                    <Route index path="/user/:id/edit" element={<EditUser />} />
                </Route>
            </Routes>
        </React.Fragment>
    )
}

export default MainRouter