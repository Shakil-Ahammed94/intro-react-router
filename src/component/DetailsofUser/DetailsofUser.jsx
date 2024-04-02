import { useLoaderData } from "react-router-dom";
import './Detailsofuser.css'


const DetailsofUser = () => {
    const user=useLoaderData();
    const {name,email,phone}=user;
    return (
        <div className="detailsoduser">
            <div>
            <h2>User Name:{name}</h2>
            <h3>Email:{email}</h3>
            <p>Phone no:{phone}</p>
        </div>

        </div>
    );
};

export default DetailsofUser;