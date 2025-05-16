import { useNavigate } from "react-router-dom";


export const ErrorPage = () => {

    const navigate = useNavigate();
    const goHome = () => {
        navigate('/home');
    }

    const back = () => {
        navigate(-1);
    }
    return (
        
        <>
       <h1>Oh! No we do not contain this Page</h1>
       <div className="buttons">
        <button onClick={goHome}>Go Home</button>
        <button onClick={back}>Go Back</button>
       </div>
        </>
    );
}