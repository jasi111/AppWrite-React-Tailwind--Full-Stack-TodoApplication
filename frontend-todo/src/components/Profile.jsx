import React, { useState, useEffect } from "react";
import { account } from "../appwriteAuth/appwriteConfig";
import { useNavigate, Link } from "react-router-dom";
import TodoForm from "./TodoForm";
import DisplayTask from './DisplayTodos';

function Profile() {
   
  const navigate = useNavigate()
  const [userDetails, setUserDetails] = useState()

  useEffect(() => {
    const getData = account.get()
    getData.then(
      function(response){
          setUserDetails(response)
          //console.log(userDetails);
      },
      function(error){
          console.log(error);
      }
    )
  }, [])
  
const handleLogout = async () => {
  try {
      await account.deleteSession("current")
      navigate("/")
  } catch (error) {
      console.log(error);
  }
}
  return (
    <>
      <div className="h-screen bg-secondBg pt-1">

    {userDetails ? (
      <>
        <div className="bg-mybg  max-w-7xl mx-auto shadow-md  flex justify-between text-right py-2 px-3  rounded-md">
   
          <div>
            <p className="text-xl text-mainText">Hello {userDetails.name}</p>
          </div>
          <div >
            <button
              className="bg-red-400 text-mainText p-1 rounded-md"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
       <TodoForm/>
       <DisplayTask/>
      </>
    ) : (
      <p className="mt-4">
        Please Login To see Profile{" "}
        <Link to="/">
          <span className="bg-blue-300 p-2 cursor-pointer text-white rounded-md">
            Login
          </span>
        </Link>
      </p>
    )}
    </div>

  </>
  )
}

export default Profile