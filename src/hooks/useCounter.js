import { useState } from "react"

export const useCounter = (valorInicial = 0) => {

    const [counter, setCounter] = useState(valorInicial)

    const increment = (value = 1) => {
        setCounter(counter + value)
    }

    const decrement = (value = 1, negative) => {
        // if (!negative && counter < 1) return
        if (!negative && counter - value < 0) {
            setCounter(0)
            return
        }
        setCounter(counter - value)
    }

    const reset = () => {
        setCounter(0)
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
