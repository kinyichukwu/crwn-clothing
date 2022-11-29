import {
    auth, 
  signInWithGooglePopUp,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";


import SignUpForm from "../../components/sign-up/sign-up-form";
import { Fragment } from "react";

const SignIn = () => {
   
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp(auth); 

    const userDocRef = createUserDocumentFromAuth(user);
  };

  
  return (
    <Fragment>
    <div>
      <button onClick={logGoogleUser}>Sign in button</button>
      
    </div>
    <SignUpForm/>
    </Fragment>
  );
};

export default SignIn;
