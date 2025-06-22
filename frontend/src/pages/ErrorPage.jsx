import { useNavigate } from "react-router-dom";
import "./errorPage.css"


export const ErrorPage = () => {

    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    }

    const back = () => {
        navigate(-1);
    }
    return (
        
        <div className={"error-container"}>
       <h1>Oh! No we do not contain this Page</h1>
       <div className="buttons">
        <button onClick={goHome} className={"error-button"}>Go Home</button>
        <button onClick={back} className={"error-button"}>Go Back</button>
       </div>
        </div>
    );
}