import { useEffect } from "react";

const useOutsideClick = (ref, handler) => {
  useEffect(() => {
    const evt = e => {
      if (!ref.current) return
      if (!ref.current.contains(e.target)) {
        handler && handler()
      }
    }
    window.addEventListener('mousedown', evt)
    return () => {
      window.removeEventListener('mousedown', evt)
    }
  }, [ref, handler])
}

export default useOutsideClick;