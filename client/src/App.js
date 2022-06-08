import "./App.scss"
import Router from "./utils/Router/Router"
import { useDispatch } from "react-redux"
import { mobile, desktop } from "./utils/Redux-toolkit/user"

function App() {
  const dispatch = useDispatch()
  const observer = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      const { width } = entry.contentRect

      if (width < 900) {
        dispatch(mobile())
      }
      if (width > 900) {
        dispatch(desktop())
      }
    })
  })

  observer.observe(document.querySelector("#root"))

  return (
    <div className="App">
      <Router />
    </div>
  )
}

export default App
