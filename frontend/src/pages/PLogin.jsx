import {useReducer, } from "react";


export const PLogin = ()=> {
    // const [isValid,setValid] = useState({
    //     isEmail:false,
    //     isPassword:false
    // });
   const initialState = {
       email:"",
       password:"",

   }
   //reducer function
   function  reducer(state,action)  {

       switch(action.type){
           case"SET_VALUE":
               return {...state,[action.field]:action.value}
           case "RESET":
               return initialState;
           default : throw new Error("Unknown action type");
    }
    }







    const [state,dispatch] = useReducer(reducer,initialState)




    const handleSubmit = (e) =>{
       e.preventDefault();
       dispatch({
           type:"RESET"
       })
    }



//handleChange function is here
    const handleChange = (e)=> {
       dispatch({
           type:"SET_VALUE",
           field:e.target.name,
           value:e.target.value
       })
    }
    //validation starts here
    // if (!state.email  ){
    //     console.log("email must be valid")
    // } else {
    //     setValid(prevValid=>({
    //         ...prevValid,email:true
    //     }))
    // }
    //                       !!!!!::: we will do it with useEffect when we need will handle this with backend more effectively
    // if (!state.password || state.password.length < 8 ){
    //     console.log("password must be valid")
    // } else {
    //     setValid(prevValid=>({
    //         ...prevValid,password:true
    //     }))
    // }

    return (
        <>
            <div className="register-container-main">
                <div className="header-register register-container">
                    <h1>Principle Login</h1>
                </div>
                <div className="form-container">
                    <p style={{margin:"3rem",fontSize:"22px"}}>Fill all the field correctly then click on Login button</p>
                    <form onSubmit={handleSubmit} noValidate>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter Email Address"
                            value={state.email}
                            onChange={handleChange}
                        />



                        <input
                            type="password"
                            name="password"
                            id="passoword"
                            placeholder="Enter Password"
                            value={state.password}
                            onChange={handleChange}
                        />
                       {/*// {isValid.isPassword ? "password must be 8 char long":""}*/}
                       <button type="submit">Login</button>
                        <a style={{color:"blue" ,}} href={"/change-password"} > forgot password?</a>
                    </form>
                </div>
            </div>

                    </>
    );
}
