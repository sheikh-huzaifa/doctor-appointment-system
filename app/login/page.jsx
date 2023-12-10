 "use client"
 import { signIn } from 'next-auth/react';
import { redirect } from 'next/navigation'; 
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';


 import PropTypes from 'prop-types'

const Login = props => {

  const { push } = useRouter();
     
    const [email,setemail]= useState('')
    const [password,setuserPass]= useState('')
  
    const handleLogin =  (e) => {
      e.preventDefault();
      console.log("email",email);
      console.log("password",password);
  
      const result =  signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      console.log(result);
  
      if (result.error) {
        // Handle login error (display error message, etc.)
        console.error('Login failed:', result.error);
         alert("Enter valid details")
      } else {
        console.log("fuck yeah done");        push("/PatientPage ");
        
      }
    };
  
    return (
      <div className='loginPage container-fluid'>
        
        
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                            <div className="card p2- p-md-3 p-lg-4 cardCustom">
                                <form className=" text-center" onSubmit={handleLogin}>
                                    <div className="text-center">
                                    <h2>Login</h2>
                                    </div>
                                    <div className="row mb-3">
                                    <input type="username" placeholder='Enter Your Username' className='form-control'  onChange={(e)=>{setemail(e.target.value); console.log("email:",e.target.value);}}/>
                                    </div>
                                    <div className="row">
                                    <input type="password" placeholder='Enter Your Password' className='form-control' onChange={(e)=>{setuserPass(e.target.value); console.log("password:",e.target.value)}}/>
                                    </div>
                                    <button className='btn btn-outline-success w-50 my-4'>Summit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    </div>
    );
}

Login.propTypes = {}

export default Login

