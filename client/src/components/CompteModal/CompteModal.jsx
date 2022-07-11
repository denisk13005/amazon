import React from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logOut } from "../../utils/Redux-toolkit/user"
import { reset } from "../../utils/Redux-toolkit/products"
import PropTypes from "prop-types"
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
    dispatch(reset())
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

CompteModal.propTypes = {
  className: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
}

export default CompteModal
