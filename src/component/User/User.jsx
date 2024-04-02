import './User.css'
import { Link, NavLink } from 'react-router-dom';

const User = ({user}) => {
   const {id,name,email,phone}=user;
    return (
        <div className="user">
            <h2>{name}</h2>
            <p>Email:{email}</p>
            <p>Phone:{phone}</p>
            
           
            <NavLink to={`/user/${id}`}><button>Show details</button></NavLink>
           
           
        </div>
    );
};

export default User;