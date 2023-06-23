import { useState, useCallback, useEffect } from "react"

const useNavigation = () => {
  const [y, setY] = useState(window.scrollY)
  const [scrollDir, setScrollDir] = useState("")

  const handleNavigation = useCallback(
    e => {
      const window = e.currentTarget
      if (y > window.scrollY) {
        setScrollDir("up")
      } else if (y < window.scrollY) {
        setScrollDir("down")
      }
      setY(window.scrollY)
    }, [y]
  )

  useEffect(() => {
    setY(window.scrollY)
    window.addEventListener("scroll", handleNavigation)
    return () =>{
      window.removeEventListener("scroll", handleNavigation)
    }
  }, [handleNavigation])

  return [y, scrollDir]
}

export default useNavigation