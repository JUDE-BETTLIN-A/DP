import { useState, useEffect, useRef, useCallback } from 'react'

/**
 * TypeWriter component – renders text with a character-by-character typing animation.
 * Typing begins when the element enters the viewport (IntersectionObserver).
 *
 * Props:
 *  - text        (string)  The text to type out
 *  - speed       (number)  ms per character, default 30
 *  - delay       (number)  ms before typing starts after becoming visible, default 0
 *  - tag         (string)  HTML tag / component to render, default 'span'
 *  - className   (string)  Extra class names
 *  - cursor      (bool)    Show blinking cursor, default true
 *  - onDone      (fn)      Callback when typing finishes
 *  - ...rest              Forwarded to the wrapper element
 */
export default function TypeWriter({
    text = '',
    speed = 30,
    delay = 0,
    tag: Tag = 'span',
    className = '',
    cursor = true,
    onDone,
    ...rest
}) {
    const [displayed, setDisplayed] = useState('')
    const [started, setStarted] = useState(false)
    const [done, setDone] = useState(false)
    const ref = useRef(null)

    // Start typing when element scrolls into view
    useEffect(() => {
        const el = ref.current
        if (!el) return
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setStarted(true), delay)
                    obs.disconnect()
                }
            },
            { threshold: 0.15 }
        )
        obs.observe(el)
        return () => obs.disconnect()
    }, [delay])

    // Type characters one by one
    useEffect(() => {
        if (!started) return
        if (displayed.length >= text.length) {
            setDone(true)
            onDone?.()
            return
        }
        const t = setTimeout(() => {
            setDisplayed(text.slice(0, displayed.length + 1))
        }, speed)
        return () => clearTimeout(t)
    }, [started, displayed, text, speed, onDone])

    // Reset when text prop changes
    useEffect(() => {
        setDisplayed('')
        setDone(false)
        setStarted(false)
    }, [text])

    return (
        <Tag ref={ref} className={`typewriter-wrap ${className}`} {...rest}>
            {displayed}
            {cursor && !done && started && <span className="tw-cursor">|</span>}
            {/* invisible full text for layout sizing */}
            <span className="tw-sizer">{text}</span>
        </Tag>
    )
}
