"use client"

import { useEffect } from "react"

/**
 * Hook to animate elements when they enter the viewport
 * Adds the 'in-view' class to elements with the 'animate-on-scroll' class
 */
export function useAnimateOnScroll() {
  useEffect(() => {
    // Create an intersection observer to detect when elements enter the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
          }
        })
      },
      { threshold: 0.1 }, // Trigger when at least 10% of the element is visible
    )

    // Select all elements with the animate-on-scroll class
    const elements = document.querySelectorAll(".animate-on-scroll")

    // Observe each element
    elements.forEach((el) => observer.observe(el))

    // Clean up the observer when the component unmounts
    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])
}

