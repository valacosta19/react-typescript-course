import { ChangeEvent, useState } from "react"

// T es lo que sea que nos venga de initialState
export const useForm = <T extends Object>( initState: T ) => {
  
  const [form, setForm] = useState(initState)

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = target

    setForm({
      ...form,
      [ name ]: value
    })
  }

  return {
    form,
    handleChange,
    ...form
  }
  
}