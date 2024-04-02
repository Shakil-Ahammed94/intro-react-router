import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './User.css'


const Users = () => {
    const users=useLoaderData();
    return (
        <div >
            <h2>hello user</h2>
            <h2>Our User:{users.length}</h2>
            <div className="userp">
            {
                users.map(user=><User user={user}></User>)
            }
            </div>
            
        </div>
    );
};

export default Users;