import { useEffect, useRef } from 'react'

// Single element scroll reveal
export function useScrollReveal(options = {}) {
    const ref = useRef(null)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: options.threshold || 0.15, rootMargin: options.rootMargin || '0px' }
        )

        observer.observe(element)
        return () => observer.unobserve(element)
    }, [options.threshold, options.rootMargin])

    return ref
}

// Batch reveal for multiple children
export function useScrollRevealAll(selector, containerRef) {
    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const elements = container.querySelectorAll(selector)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.08 }
        )

        elements.forEach((el) => observer.observe(el))
        return () => elements.forEach((el) => observer.unobserve(el))
    }, [selector, containerRef])
}
