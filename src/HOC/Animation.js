import React, { useRef, useEffect } from 'react'
import { gsap, Power4 } from "gsap";

const animation = BaseComponet => ({ duration = .2, animation = Power4.easeInOut, ...properties }) => {
  let reference = useRef(null)
  let gsapi
  useEffect(() => {
    gsapi = gsap.from(reference, { duration: duration, ...properties, ease: animation })
      .play();

    return () => {
      gsapi.reverse()
      reference = null
    }
  }, [])

  const setReference = (ref) => {
    reference = ref
  }

  return (
    <BaseComponet reference={setReference} gsap={gsapi} />
  )
}

export default animation
