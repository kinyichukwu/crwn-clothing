import React, { Fragment, useState } from "react";
const defaultFormFields = {
  displayvalue: '',
  email: '',
  password: '',
  confirmPassword: ''
}

function SignUpForm() {
  const [setForm, submitSetForm] = useState(defaultFormFields)
  const {  displayvalue,
  email,
  password,
  confirmPassword} = setForm

  const handelChange = (event) => {
    const {name, value} = event.target

    submitSetForm({
      ...setForm,
      [name]: value
    })
    console.log(setForm)
  }

  return (
    <Fragment>
      <h1> Sign in with your email and password</h1>

      <form
        onSubmit={() => {
          console.log("submited");
        }}
      >
        <label>Display Name</label>
        <input type="text" required onChange={handelChange} value={displayvalue} name='displayvalue'/>
        <label>Email</label>
        <input type="email" required onChange={handelChange} value={email} name='email'/>
        <label>Password</label>
        <input type="password" required onChange={handelChange} value={password} name='password'/>
        <label>Confirm Password</label>
        <input type="password" required onChange={handelChange} value={confirmPassword} name='confirmPassword'/>
        <button type="submit">Submit</button>
      </form>
    </Fragment>
  );
}

export default SignUpForm;
