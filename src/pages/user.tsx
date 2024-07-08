import { useState, useEffect } from "react"
import axios from "axios"

interface Users{
    login: string,
    icon: string,
}

interface DataUsersProps {
    name: string;
}

export function DataUsers({name}: DataUsersProps){  

const url = "https://api.github.com/users";
const [user, setUser] = useState<Users|null>(null);


useEffect(() => {
    const getDataUser = async () => {
        try {
            const response = await axios.get(`${url}/${name}`)
            const userData: Users = {
                login: response.data.login,
                icon: response.data.avatar_url,
            }
        setUser(userData);
        } catch (error) {
        console.error(error);
        }
    };

if (name) {
  getDataUser()
}
}, [name])


return(
    <div id="userStyle">
        {user && (
            <div>
                <p id="login">Login: {user.login}</p>
                <p><img src={user.icon} alt="User Avatar" /></p>
            </div>
        )}
    </div>
)
}