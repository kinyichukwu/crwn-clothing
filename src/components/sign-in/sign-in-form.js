import React, { useState } from "react";
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopUp,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input";
import "./sign-in-form.scss";
import "../button/button";
import Button from "../button/button";
const defaultFormFields = {
  email: "",
  password: "",
};

function SignInForm() {
  const [setForm, submitSetForm] = useState(defaultFormFields);
  const { email, password } = setForm;

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopUp(auth);
    await createUserDocumentFromAuth(user);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password)
      console.log(response)
    } catch (err) {
      console.log(err.code)
    }

    
  };

  const handelChange = (event) => {
    const { name, value } = event.target;

    submitSetForm({
      ...setForm,
      [name]: value,
    });
    console.log(setForm);
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span> Sign in with your email and password</span>

      <form onSubmit={handelSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handelChange}
          value={email}
          name="email"
        />
        <FormInput
          label="Password "
          type="password"
          required
          onChange={handelChange}
          value={password}
          name="password"
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType="google" click={signInWithGoogle}>
             Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
