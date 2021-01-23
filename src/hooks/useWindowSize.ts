import { useLayoutEffect, useState } from 'react'

function useWindowSize() {
  const [size, setSize] = useState<[width: number, height: number]>([0, 0])

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return size
}

export default useWindowSize
