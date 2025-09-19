import { ApolloClient, gql, InMemoryCache, useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setPassword, setUserName } from '../Redux/Slice';
import toast, { Toaster } from 'react-hot-toast';

export const client=new ApolloClient({
    uri:"http://localhost:4000/graphql",
    cache:new InMemoryCache()
});

const Send_Otp=gql`
mutation SendOtp($email: String!) {
  sendOtp(email:$email)
}
`;

const CREATE_USER=gql`
mutation CreateUser($username: String!, $email: String!, $password: String!, $otp: String!) {
  createUser(username: $username, email: $email, password: $password, otp: $otp) {
    email
    password
    username
  }
}
`;

export default function Signup() {
    const username=useSelector((state)=>state.app.username);
    const email=useSelector((state)=>state.app.email);
    const password=useSelector((state)=>state.app.password);
    const [otp,setOtp]=useState('');
    const [setSendOtp,setSendOtpV]=useState(false);
    const dispatch=useDispatch();
    const [sendOtp]=useMutation(Send_Otp);
    const [createUser]=useMutation(CREATE_USER)


    const handleOtp=async()=>{
        try {
            const response=await  sendOtp({
                variables:{
                    email:email,      
                }
            });
            if(response?.data?.sendOtp){
                toast.success("Otp Sent to your mail");
                setSendOtpV(true);
            }
            } catch (error) {
            toast.error("Something Went Wrong");   
        }

    }

    const handleCreate=async()=>{
        try {
            const response=await createUser({
                variables:{
                    username:username,
                    email:email,
                    password:password,
                    otp:otp
                }
            });
            if(response?.data?.createUser){
                toast.success("Account Created Successfully");
                
            }
            
        } catch (error) {
            toast.success("Something went Wrong")
    
        }
    }
  return (
    <div>


        <div>
            <form onSubmit={(e)=>e.preventDefault()}>
                <input type="text" value={username} onChange={(e)=>dispatch(setUserName(e.target.value))} placeholder='Username'/> <br />
                <input type="email" value={email} onChange={(e)=>dispatch(setEmail(e.target.value))} placeholder='Email'/> <br />
                <button onClick={()=>handleOtp()}>Send Otp</button>

              {
                setSendOtp?
                <div>
                    <input type="text" value={otp} onChange={(e)=>setOtp(e.target.value)} /> <br />
                      <input type="password" value={password} onChange={(e)=>dispatch(setPassword(e.target.value))} placeholder='Password'/> <br />
                <button onClick={()=>handleCreate()}>Create Account</button>
                </div>:''
              }

            </form>
        </div>


        <Toaster
  position="top-center"
  reverseOrder={false}
/>


      
    </div>
  )
}
