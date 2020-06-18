import { useState, useEffect } from 'react'

const useMousePosition = () => { // CUSTOM HOOK
    const [position, setPosition] = useState({ x: 0, y: 0 }) // placing these together in an object is ok because I'm always changin x and y together.
    // deconstruct the array that comes back from x and y as position 

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({
                x: e.pageX,
                y: e.pageY
            })
        }

        console.log('set event');
        document.addEventListener('mousemove', handleMouseMove)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }

    }, []) // this stops the component from mounting 1000's of times

    return position
}

export { useMousePosition as default }