import { Faculty } from "../components/Faculty";


export const FacultyPage = () => {
    return (

        <>
        <div className="faculty-page-container" 
        style=
        {{ position:"relative",width:"80%",top:"3rem", margin:"auto",backgroundColor:"#df2531",
        borderRadius:"1rem",display:"flex",justifyContent:"center",alignItems:"center", minHeight:"7rem"}}>
            
            <h1 style={{color:"#fff"}}>Faculty Information</h1>
        </div>
        <Faculty />
        </>
    );
}