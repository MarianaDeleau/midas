import React from 'react'
import SignupForm from '../components/forms/SignupForm'
import { WithAuth } from '../hoc/withAuth'

const Signup = (props) => {

    const { style } = props
   
    return (
       <div style={style} className={"login-container"}>
           <h2>Signup</h2>
           <SignupForm/>
       </div>
    )
 }
 
 export const SignUpPage = WithAuth(Signup)
 