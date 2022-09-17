import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


const SignOut = (props) => {
    const  { context } = props;
    const authenticatedUser = context.authenticateUser;
    console.log("SignOut Context: ", context);
    let navigate = useNavigate();
    context.actions.signOut();
    useEffect(() => {
        if (!authenticatedUser) {
          navigate("/");
        }
      }, [authenticatedUser, navigate]);

    return (
        <h1>SignOut</h1>
        )
}

export default SignOut;