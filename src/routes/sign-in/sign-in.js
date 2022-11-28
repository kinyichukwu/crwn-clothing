import {
    auth, 
  signInWithGooglePopUp,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";




const SignIn = () => {
   
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp(auth); 

    const userDocRef = createUserDocumentFromAuth(user);
  };

  
  return (
    <div>
      <button onClick={logGoogleUser}>Sign in button</button>
      
    </div>
  );
};

export default SignIn;
