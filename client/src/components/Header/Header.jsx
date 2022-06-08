import React, { useEffect, useState } from "react"
import "./header.scss"
import logo from "../../assets/img/amazon_PNG1.png"
import basket from "../../assets/img/basket.png"
import search from "../../assets/img/search.svg"
import { useNavigate, Link } from "react-router-dom"
import { useSelector } from "react-redux"
import CompteModal from "../CompteModal/CompteModal"
import { GiHamburgerMenu } from "react-icons/gi"
import { FaRegUser } from "react-icons/fa"
const Header = () => {
  const navigate = useNavigate()

  //redux state
  const logged = useSelector((state) => state.user.userLoggedIn)
  const userLogged = useSelector((state) => state.user.informations[0])
  const basketItems = useSelector((state) => state.products.basketItems)
  //local state
  const [user, setUser] = useState("")
  const [compteModalClassName, setCompteModalClassName] = useState("none")

  const loggIn = () => {
    navigate("/")
  }
  useEffect(() => {
    userLogged && setUser(userLogged.name)
  }, [userLogged])

  const openModal = () => {
    setCompteModalClassName("visible")
  }
  const closeModal = () => {
    setCompteModalClassName("none")
  }
  return (
    <header className="header">
      <div className="leftOptions">
        <div className="hambAndLogo">
          <div className="hambContainer">
            <GiHamburgerMenu className="hambIcon" />
          </div>
          <Link to="/home">
            <img className="logo" src={logo} alt="amazon logo" />
          </Link>
        </div>
        <div className="search" onMouseEnter={closeModal}>
          <input type="search" />
          <div className="searchImgContainer">
            <img src={search} alt="search icone" className="magnifyingGlass" />
          </div>
        </div>
      </div>

      <nav className="rightOptions">
        {logged ? (
          <>
            <div
              className="rightOptions__option rightOptions__option--user"
              onMouseEnter={openModal}
            >
              <div className="userDescriptionContainer">
                <span className="bonjour">Bonjour </span>
                <span className="user">{user}</span>
                <span className="userIconContainer">
                  <FaRegUser className="userIcon" />
                </span>
              </div>
              <br />

              <strong className="compte">Compte et listes</strong>
            </div>
            <CompteModal
              className={compteModalClassName}
              closeModal={closeModal}
            />
          </>
        ) : (
          <>
            <div className="rightOptions__option " onClick={loggIn}>
              Hello Guest <br />
              <strong>Please LoggIn</strong>
            </div>
          </>
        )}

        <div
          className="rightOptions__option rightOptions__option--return"
          onMouseEnter={closeModal}
        >
          Retours
          <br />
          <strong>et Commandes</strong>
        </div>
        <div
          className="rightOptions__option rightOptions__option--basket"
          onClick={() => navigate("/basket")}
        >
          <div className="imgContainer">
            <img src={basket} alt="basket icone" />

            <span className="cartItems">{basketItems}</span>
          </div>
          <strong className="panier">Panier</strong>
        </div>
      </nav>
    </header>
  )
}

export default Header
