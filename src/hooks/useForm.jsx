import { useState } from "react"




export const useForm = (initValue, submit) => {
    const [formData, setFormData] = useState(initValue)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData( prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const resetForm = () => {
        setFormData(initValue)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        submit(formData)
        resetForm()
    }

    return {
        formData,
        handleChange,
        handleSubmit,
        resetForm
    }
}