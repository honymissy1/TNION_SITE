import { Outlet } from "react-router-dom";

export default function AdminLayout({roles}){
    console.log(roles);

    const user = ['Admin']
    return(
            user.find(role => roles.includes(role)) 
             ? <Outlet /> : <h1>Not Authorized</h1>
         )
}