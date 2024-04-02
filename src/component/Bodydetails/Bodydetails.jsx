import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './Bodydetails.css'

const Bodydetails = () => {
    const post=useLoaderData();
    const {id,title,body}=post;
    const navigate=useNavigate();

    const handleGoBack=()=>{
        navigate(-1);
    }
    return (
        <div className='Bodystyle'>
            <p>body of details:{id}</p>
            <h3>title:{title}</h3>
            <p>{body}</p>
            <button onClick={handleGoBack}> Go back</button>
        </div>
    );
};

export default Bodydetails;