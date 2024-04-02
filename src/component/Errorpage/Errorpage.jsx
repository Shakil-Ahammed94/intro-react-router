import { Link, useRouteError } from "react-router-dom";


const Errorpage = () => {
    const error=useRouteError();
    console.log(error);
    return (
        <div>
            <h2>Oppps!! </h2>
            <p>{error.statusText|| error.message}</p>
            {
                error.status=== 404 && <div>

                    <h3>Page not Found</h3>
                    <Link to='/'><button>Home</button></Link>
                </div>
                 
            }
            
        </div>
    );
};

export default Errorpage;