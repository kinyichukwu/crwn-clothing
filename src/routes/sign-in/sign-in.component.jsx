import { Fragment } from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase.utils";



function SignIn() {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    createUserDocumentFromAuth(user)
    
  };
  return (
    <Fragment>
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}>SibjjgnIn</button>
    </Fragment>
  );
}

export default SignIn;
