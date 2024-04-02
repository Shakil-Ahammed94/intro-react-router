
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'
const Post = ({post}) => {
    const{id,title}=post;
    const navigate=useNavigate();

    const handleShowDetails=()=>{
        navigate(`/post/${id}`);

    }

    return (
        <div className='poststyle'>
            <h4>Post of Id:{id}</h4>
            <h3>Title:{title}</h3>
            <Link to={`/post/${id}`}><button className='buttonstyle'>Post details</button></Link>
            <button className='buttonstyle' onClick={handleShowDetails}>Click here</button>
            
        </div>
    );
};

export default Post;