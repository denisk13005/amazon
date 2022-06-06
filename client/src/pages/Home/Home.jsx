import React, { useState } from "react"
import { useSelector } from "react-redux"
import "./home.scss"
import PleaseLogin from "../../components/PleaseLoggin/PleaseLogin"
import Product from "../../components/Product/Product"
import Header from "../../components/Header/Header"
import Slider from "../../components/Slider/Slider"

const Home = () => {
  const userLoggedIn = useSelector((state) => state.user.userLoggedIn)
  // const [userLoggedIn, setUserLoggedIn] = useState(true)
  return (
    <>
      <Header />
      <main className="homeMainContainer">
        {userLoggedIn ? (
          <>
            <Slider />
            <section className="productsContainer">
              <div className="productRow">
                <Product
                  id={1}
                  description={"mmmmmmh c'est super "}
                  price={12}
                  smallPrice={2}
                  stars={3}
                  img={
                    "https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/gateway/placement/launch/RolandGarros/RG_2022_V2HUD_Reactive_XSite_379x304_PV_fr-FR._SY304_CB636920623_.jpg"
                  }
                />
                <Product
                  id={2}
                  description={"test"}
                  price={12}
                  smallPrice={1}
                  stars={3}
                  img={
                    "https://m.media-amazon.com/images/I/81vkislowDL._AC_SX352_SY330_.jpg"
                  }
                />
                <Product
                  id={3}
                  description={"test"}
                  price={655}
                  smallPrice={8}
                  stars={3}
                  img={
                    "https://m.media-amazon.com/images/I/71Qd4S8SbtL._AC_SX352_SY330_.jpg"
                  }
                />
              </div>
              <div className="productRow">
                <Product
                  id={4}
                  description={"test"}
                  price={300}
                  smallPrice={5}
                  stars={3}
                  img={
                    "https://images-na.ssl-images-amazon.com/images/I/41LcAKXQyJL._AC_SR400,600_.jpg"
                  }
                />

                <Product
                  id={5}
                  description={"test"}
                  price={239}
                  smallPrice={5}
                  stars={3}
                  img={
                    "https://images-na.ssl-images-amazon.com/images/I/41aCosV70jL._AC_SR400,600_.jpg"
                  }
                />
              </div>
              <div className="productRow">
                <Product
                  id={6}
                  description={"test"}
                  price={29}
                  smallPrice={5}
                  stars={3}
                  img={
                    "https://images-eu.ssl-images-amazon.com/images/I/71g8a2BcgRL._AC_UL160_SR160,160_.jpg"
                  }
                />
              </div>
            </section>
          </>
        ) : (
          <PleaseLogin />
        )}
      </main>
    </>
  )
}

export default Home
