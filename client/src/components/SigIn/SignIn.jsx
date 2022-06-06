import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { signInAuth } from "../../firebase/apiDbFirebase"
import { fetchDbUser, logIn } from "../../utils/Redux-toolkit/user"
import "./signIn.scss"

const SignIn = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  //local state
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState(" ")
  const [errorMessage, setErrorMessage] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  if (localStorage.userSignUp) {
  }
  const user = {
    email,
    password,
  }

  const rememberMeToggle = (e) => {
    e.target.checked ? setRememberMe(true) : setRememberMe(false)
  }

  useEffect(() => {
    //si on revient de signUp on prérempli les champs avec l'utilisateur créée
    if (localStorage.userPrefilledField) {
      const backFromSignUp =
        localStorage.userPrefilledField &&
        JSON.parse(localStorage.getItem("userPrefilledField"))
      setEmail(backFromSignUp.email)
      setPassword(backFromSignUp.password)
    }
    //si on est sur login et que remember me a été coché on prérempli les champs
    else if (localStorage.userRememberMe) {
      const rememberMeValue =
        localStorage.userRememberMe &&
        JSON.parse(localStorage.getItem("userRememberMe"))
      setEmail(rememberMeValue.email)
      setPassword(rememberMeValue.password)
    } else return
  }, [])

  /**
   * prevent the refresh and launch getAuth function
   * @param {event} e
   */
  const loggIn = async (e) => {
    e.preventDefault()
    console.log(email)
    const auth = await signInAuth(email, password)
    //remember me si
    if (auth.email === email) {
      //on stock l'utilisateur dans le localStorage si remember me coché
      rememberMe && localStorage.setItem("userRememberMe", JSON.stringify(user))
      dispatch(fetchDbUser(email))
      dispatch(logIn())
      localStorage.removeItem("userPrefilledField")
      navigate("/home")
    } else {
      setErrorMessage(auth.split("/")[1])
    }
  }

  return (
    <div className="signInContainer">
      <form className="signInForm" onSubmit={loggIn}>
        <p className="loginTitle">Login</p>
        <label className="emailLabel" htmlFor="userMail">
          Email
        </label>
        <input
          type="text"
          name="userMail"
          id="userMail"
          value={email}
          onChange={(e) => setEmail(e.target.value.trim())}
          autoFocus
        />

        <label className="passwordLabel" htmlFor="password">
          Password
          <NavLink to="/forgotPassword">Forgot Password</NavLink>
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password.trim()}
          onChange={(e) => setPassword(e.target.value.trim())}
        />
        <span className="errorMessage">{errorMessage}</span>
        <input className="submitBtn" type="submit" value="Sign-In" />
        <div className="rememberMe">
          <input id="check" type="checkbox" onChange={rememberMeToggle} />
          <label htmlFor="check">Keep me signed in.</label>
        </div>
        <p className="newOnAmazon">New to Amazon ?</p>
        <div
          className="createYourAccount"
          onClick={() => props.setSignIn(false)}
        >
          Create your Amazon account
        </div>
      </form>
    </div>
  )
}

export default SignIn
