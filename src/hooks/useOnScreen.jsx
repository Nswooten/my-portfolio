import { useState, useEffect, useRef } from 'react'

const useOnScreen = () => {
  const [isVisible, setIsVisible] = useState(false)
  const intersectionRef = useRef()
  // console.dir(IntersectionObserver);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting), {
      root: null,
      rootMargin: "0px",
      threshold: .25
    })
    if (intersectionRef.current) {
      observer.observe(intersectionRef.current)
    }
    return () => {
      if (intersectionRef.current) observer.unobserve(intersectionRef.current)
    }
  }, [intersectionRef])
  return [intersectionRef, isVisible]
}

export default useOnScreen