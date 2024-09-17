import React from "react";
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import axios from 'axios';  
import { UserLoginValidation } from "../middlewares/validation";

const Login = () => {
  const PORT = import.meta.env.VITE_PORT;
  const baseUrl = import.meta.env.VITE_APP_URL;
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: UserLoginValidation,
    onSubmit: (values) => {
      axios.post(`${baseUrl}:${PORT}/login`, values,
        {   
            'Content-Type': 'application/json',
        }
    ).then((res)=>{ 
        const { token, role } = res.data; 
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
        
        if(token){
          navigate('/dashboard');
        }
        
    }).catch((err)=>{
      console.log(err);
    })
    }
  });

  return ( 
    <div className="w-full flex justify-center h-screen bg-slate-700">
      <div className=" border w-2/6 p-10 m-32 h-2/4 shadow-lg bg-white rounded ">
        <div className="w-full flex flex-col justify-center items-center text-center mb-10 gap-2">
          <h1 className="font-bold text-4xl">Login</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col px-2 w-full justify-center ">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input value={formik.values.username} onChange={formik.handleChange} className="shadow appearance-none border rounded w-full h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="username" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input value={formik.values.password} onChange={formik.handleChange} className="shadow appearance-none border rounded w-full h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" id="password" />
            </div>
            <div>
              <button type="submit" className="uppercase bg-blue-700 font-light text-2xl py-2 rounded  text-white w-full">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
