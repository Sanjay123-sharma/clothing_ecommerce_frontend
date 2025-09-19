import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setEmail, setLogin, setPassword } from '../Redux/Slice';
import { gql, useMutation } from '@apollo/client';
import toast, { Toaster } from 'react-hot-toast';

const LoginUser=gql`
mutation LoginUser($email: String!, $password: String!) {
  loginUser(email: $email, password: $password) {
    token
    username
  }
}
`;

export default function Signin() {
  const email=useSelector((state)=>state.app.email);
  const password=useSelector((state)=>state.app.password);
  const dispatch=useDispatch();
  const [loginUser]=useMutation(LoginUser)

  const handleClick=async()=>{
    try {
      const response=await loginUser({
        variables:{
          email:email,
          password:password
        }
      });

      const token=response?.data?.loginUser?.token;
      const UserName=response?.data?.loginUser?.username
    localStorage.setItem("token",token);
    localStorage.setItem("UserName",UserName);


      if(response?.data?.loginUser){
        dispatch(setLogin())
        toast.success("Login Successfully");
        console.log(token,UserName);
            document.cookie=`token=${token}`;
            document.cookie=`username=${UserName}`
        setTimeout(() => {
          window.location.href='/'
        }, 500);
      }
      
    } catch (error) {
      toast.error("Something went Wrong");
      
    }

  }

  return (
    <div>

      <form onSubmit={(e)=>e.preventDefault()}>
        <input type="email" value={email} onChange={(e)=>dispatch(setEmail(e.target.value))} placeholder='Enter email'/> <br />
        <input type="password" value={password} onChange={(e)=>dispatch(setPassword(e.target.value))} placeholder='Enter Password' /> <br />
        <button onClick={()=>handleClick()}>Sign In</button>
      </form>


      <div>
            <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </div>

      
    </div>
  )
}
