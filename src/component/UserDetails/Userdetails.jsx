import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user=useLoaderData();
    const {name}=user;
    return (
        <div>
            <h2>hello user</h2>
        </div>
    );
};

export default UserDetails;