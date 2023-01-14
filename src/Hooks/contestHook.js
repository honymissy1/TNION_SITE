import { useContext } from "react";
import UserContext from "../context/userContext";

const  useContextHook =() =>{
    const username = useContext(UserContext);
    const {userLogin, userLogout } = useContext(UserContext);

    return {  username, userLogin, userLogout }
}

export default useContextHook;