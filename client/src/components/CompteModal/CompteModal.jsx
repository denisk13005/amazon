import React from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logOut } from "../../utils/Redux-toolkit/user"
import "./compteModal.scss"
/**
 * modal to display user informations and logout when hover on the user icon
 *@param {string} className className of the modal
 *@param {function} closeModal function to close the modal
 * @returns {JSX.Element} JSX element of the modal
 */
const CompteModal = ({ className, closeModal }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const disconnect = () => {
    console.log("disconnect")
    dispatch(logOut())
    navigate("/")
  }
  return (
    <div className={className} onMouseLeave={closeModal}>
      <div className="modalContainer">
        <p onClick={disconnect}>Disconnect</p>
      </div>
    </div>
  )
}

export default CompteModal
