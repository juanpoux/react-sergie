import { useState } from "react"

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    return {
        formState, // se envía el ojeto completo
        ...formState, // se envían los campos del ojeto desestructurado
        onInputChange
    }
}
