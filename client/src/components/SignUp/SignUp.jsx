import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { createUserAuth, createUserDb } from "../../firebase/apiDbFirebase"
import "./signUp.scss"
import { sign } from "../../utils/Redux-toolkit/user"

const SignUp = (props) => {
  //local state
  const [name, setName] = useState("test")
  const [email, setEmail] = useState("testx@test.com")
  const [password, setPassword] = useState("password")
  const [confirmPassword, setConfirmPassword] = useState("password")
  const [errorMessage, setErrorMessage] = useState("  ")

  const signUp = (e) => {
    e.preventDefault()
    if (password === confirmPassword) {
      console.log("signup")
      localStorage.setItem(
        "userPrefilledField",
        JSON.stringify({ email, password })
      )
      createUserAuth(email, password)
      createUserDb({ name, email })

      setErrorMessage("")
      props.setSignIn(true)
    } else {
      setErrorMessage("Les mots de passe doivent être identiques")
    }
  }
  useEffect(() => {
    localStorage.removeItem("userRememberMe")
  }, [])
  return (
    <div className="signUpContainer">
      <form className="signInForm" onSubmit={signUp}>
        <p className="signUpTitle">Create Account</p>
        <label className="name" htmlFor="userName">
          Your name
        </label>
        <input
          type="text"
          name="userName"
          id="userName"
          value={name}
          onChange={(e) => setName(e.target.value.trim())}
          autoFocus
          required
        />

        <label className="emailLabel" htmlFor="userMail">
          Email
        </label>
        <input
          type="email"
          name="userMail"
          id="userMail"
          value={email}
          onChange={(e) => setEmail(e.target.value.trim())}
          autoFocus
          required
        />

        <label className="passwordLabel" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password.trim()}
          onChange={(e) => setPassword(e.target.value.trim())}
          minLength={8}
        />
        <label
          className="passwordLabel"
          htmlFor="confirm
        Password"
        >
          Re-enter password
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword.trim()}
          onChange={(e) => setConfirmPassword(e.target.value.trim())}
        />
        <span className="errorMessage">{errorMessage}</span>
        <input className="submitBtn" type="submit" value="Sign-Up" />

        <p className="line"></p>
        <div className="haveAccount">
          Already have an account?
          <span to="/connection" onClick={() => props.setSignIn(true)}>
            LoggIn
          </span>
        </div>
      </form>
    </div>
  )
}

export default SignUp
