import { useCounter } from "../hooks/useCounter.js";
export const ContadorComponent = () => {

    const {
        counter,
        increment,
        decrement,
        reset
    } = useCounter()

    return (
        <>
            <h1>Contador: {counter}</h1>
            <button className="btn btn-primary" onClick={() => increment(10)}>+1</button>
            <button className="btn btn-danger" onClick={() => reset()}>reset</button>
            <button className="btn btn-primary" onClick={() => decrement(3, false)}>-1</button>
        </>
    )
}
