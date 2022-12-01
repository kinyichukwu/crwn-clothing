import { async } from "@firebase/util";
import React, { useContext, useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input";
import './sign-up-form.scss'
import '../button/button'
import Button from "../button/button";
import { UserContext } from "../../context/user";
const defaultFormFields = {
  displayvalue: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {
  const [setForm, submitSetForm] = useState(defaultFormFields);
  const { displayvalue, email, password, confirmPassword } = setForm;

  const {setCurrentUser} = useContext(UserContext)

  const restetFormFields = () => {
    submitSetForm(defaultFormFields)
  }

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Your password does not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      setCurrentUser(user)

      await createUserDocumentFromAuth(user, { displayvalue });
    } catch (err) {
      console.log(err);
    }
    restetFormFields()
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
    <div className='sign-up-container'>
    <h2>Do not have an account?</h2>
      <span> Sign in with your email and password</span>

      <form onSubmit={handelSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handelChange}
          value={displayvalue}
          name="displayvalue"
        />
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
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handelChange}
          value={confirmPassword}
          name="confirmPassword"
        />


        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default SignUpForm;
