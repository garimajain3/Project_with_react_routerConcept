import React from "react";
import { useParams } from "react-router-dom";



function User (){
    // from this when we enter url on chrome like this we will get values http://localhost:5173/user/garima http://localhost:5173/user/111
    const {id} = useParams()
    return (
        <div className="bg-gray-600 p-4 text-white text-center">ID : {id}</div>
    )
}

export default User