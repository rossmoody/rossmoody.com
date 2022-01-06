import { useEffect, useState } from 'react'

function useOnScreen(ref: Element) {
  const [isIntersecting, setIntersecting] = useState(false)

  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: [1],
  }

  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting),
    options
  )

  useEffect(() => {
    observer.observe(ref)

    return () => {
      observer.disconnect()
    }
  })

  return isIntersecting
}

export { useOnScreen }
