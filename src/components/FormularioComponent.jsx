import { useEffect, useRef, useState } from "react"
import { useForm } from "../hooks/useForm"

export const FormularioComponent = () => {

    const focusRef = useRef()
    console.log(focusRef)

    const initialForm = {
        userName: '',
        email: '',
        password: ''
    }

    // const { formState, onInputChange } = useForm(initialForm)
    // const { userName, email, password } = formState

    const { formState, userName, email, password, onInputChange } = useForm(initialForm)

    const onSubmit = (event) => {
        event.preventDefault()
    }

    useEffect(() => {
        focusRef.current.focus()
    }, [])

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="userName">Username</label>
                <input
                    ref={focusRef}
                    type="text"
                    className="form-control"
                    name="userName"
                    placeholder="Enter Username"
                    value={userName}
                    onChange={onInputChange}
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={onInputChange}
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    name="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
