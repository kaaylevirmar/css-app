import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import App from '../App'
import Users from '../views/users/Users'
import ShowUser from '../views/users/ShowUser'
import CreateUser from '../views/users/CreateUser'
import EditUser from '../views/users/EditUser'
import Login from '../views/Login'
import Dashboard from '../views/Dashboard'


function MainRouter() {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    return (
        <React.Fragment>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<App />}>
                    <Route path="/users" element={<AdminRoute token={token} role={role} component={Users} />} />
                    <Route path="/user-create" element={<AdminRoute token={token} role={role} component={CreateUser} />} />
                    <Route path="/user/:id" element={<AdminRoute token={token} role={role} component={ShowUser} />} />
                    <Route path="/user/:id/edit" element={<EditUser />} />

                    <Route path="/dashboard" element={<PrivateRoute token={token} component={Dashboard}/>}/>
                </Route>
            </Routes>
        </React.Fragment>
    )
}

// Private route component to protect normal user pages
function PrivateRoute({ token, component: Component }) {
    return token ? <Component /> : <Navigate to="/login" />;
}

  // Admin route component to protect admin pages
function AdminRoute({ token, role, component: Component }) {
    return token && role === 'admin' ? <Component /> : <Navigate to="/login" />;
}

export default MainRouter   