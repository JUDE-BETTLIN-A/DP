import { useEffect, useRef } from 'react'

export function useTilt3D(intensity = 8) {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const handleMove = (e) => {
            const rect = el.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            const centerX = rect.width / 2
            const centerY = rect.height / 2
            const rotateX = ((y - centerY) / centerY) * -intensity
            const rotateY = ((x - centerX) / centerX) * intensity
            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
        }

        const handleLeave = () => {
            el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
        }

        el.addEventListener('mousemove', handleMove)
        el.addEventListener('mouseleave', handleLeave)
        return () => {
            el.removeEventListener('mousemove', handleMove)
            el.removeEventListener('mouseleave', handleLeave)
        }
    }, [intensity])

    return ref
}
