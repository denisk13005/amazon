import React, { useState } from "react"
import { imgs } from "../../assets/backgroundSlide.js"
import "./carroussel.css"
import { useEffect } from "react"

const Carroussel = (props) => {
  const [translateValue, setTranslateValue] = useState(-100)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [carrousselClassname, setCarrousselClassname] = useState("carroussel")
  const normalTransition = props.transition
  const fastTransition = "0"
  const toBegin = () => {
    setTimeout(() => {
      setCarrousselClassname("endAndBeginTransition")
      setCurrentSlide(0)
      setTranslateValue(-100)
      console.log("currentSlide = -1")
    }, normalTransition * 1000)
    setTimeout(() => {
      setCarrousselClassname("carroussel")
    }, normalTransition * 1000 + 50)
  }
  const toEnd = () => {
    setTimeout(() => {
      setCarrousselClassname("endAndBeginTransition")
      setCurrentSlide(imgs.length - 1)
      setTranslateValue(imgs.length * -100)
      console.log("currentSlide = imgs.length +1")
    }, normalTransition * 1000)
    setTimeout(() => {
      setCarrousselClassname("carroussel")
    }, normalTransition * 1000 + 50)
  }

  useEffect(() => {
    currentSlide === -1 && toEnd()
    currentSlide === imgs.length && toBegin()
  }, [currentSlide])

  const previousSlide = () => {
    setCurrentSlide(currentSlide - 1)
    setTranslateValue(translateValue + 100)
  }

  const nextSlide = () => {
    setCurrentSlide(currentSlide + 1)
    setTranslateValue(translateValue - 100)
  }
  console.log("currentSlide", currentSlide, "translateValue", translateValue)

  return (
    <section className="carrousselContainer">
      <div
        className="arrowContainer leftArrowContainer"
        onClick={previousSlide}
      ></div>
      <span className="arrow leftArrow" onClick={previousSlide}></span>
      <div
        className={carrousselClassname}
        style={{
          transform: `translate(${translateValue}%)`,
          transition: `transform ${
            carrousselClassname === "carroussel"
              ? normalTransition + "s"
              : fastTransition + "s"
          } ease-in-out`,
        }}
      >
        <div className="carroussel__item--begin ">
          <img src={imgs[imgs.length - 1].src} alt="" />
        </div>
        {imgs.map((img) => (
          <div className="carroussel__item" key={img.id}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
        <div className="carroussel__item">
          <img src={imgs[0].src} alt="" />
        </div>
      </div>
      <div
        className="arrowContainer rightArrowContainer"
        onClick={nextSlide}
      ></div>
      <span className="arrow rightArrow" onClick={nextSlide}></span>
    </section>
  )
}

export default Carroussel
