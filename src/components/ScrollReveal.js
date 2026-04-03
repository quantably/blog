import React from "react"
import { useScrollReveal } from "../hooks/useScrollReveal"

const ScrollReveal = ({
  children,
  className = "",
  as: Tag = "div",
  delay,
  staggerChildren = false,
  ...rest
}) => {
  const { ref, isVisible } = useScrollReveal()

  const classes = [
    "scroll-reveal",
    isVisible && "visible",
    staggerChildren && "stagger-children",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  const style = delay ? { transitionDelay: `${delay}ms` } : undefined

  return (
    <Tag ref={ref} className={classes} style={style} {...rest}>
      {children}
    </Tag>
  )
}

export default ScrollReveal
