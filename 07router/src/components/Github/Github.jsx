// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";

// function GitHub(){
//     const [data , setData] = useState([])
//     useEffect(()=>{

//         fetch("https://api.github.com/users/garimajain3")
//         .then(response=>response.json())
//         .then(data =>{
//             console.log(data)
//             setData(data)
//         })
//     },[])
//     return(
//         // git hub pr followers naal ki key h
//         <div className="text-center text-3xl m-4 p-4 bg-gray-600 text-white">Github Followers: {data.followers}
//         < img src={data.avatar_url}/>
//         </div>
     
//     )
// }
// export default GitHub

// 2 menthod from loader in route

import React from "react";
import { useLoaderData } from "react-router-dom";
function GitHub(){
    const data = useLoaderData()
    return(
        // git hub pr followers naal ki key h
        <div className="text-center text-3xl m-4 p-4 bg-gray-600 text-white">Github Followers: {data.followers}
        < img src={data.avatar_url}/>
        </div>
     
    )
}
export default GitHub

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/garimajain3')
    return response.json()
}


