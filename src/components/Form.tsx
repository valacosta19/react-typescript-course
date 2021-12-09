import { useForm } from '../hooks/useForm'

interface FormData {
  email: string;
  name: string;
}

export const Form = () => {

  // Pasamos todo esto a un customHook
  // const [form, setForm] = useState({
  //   email: '',
  //   name: ''
  // })

  // const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
  //   const {name, value} = target

  //   setForm({
  //     ...form,
  //     [ name ]: value
  //   })
  // }

  const { name, email, form, handleChange } = useForm<FormData>({
    email: '',
    name: ''
  })

  return (
    <form autoComplete='off'>

      <div className="mb-3">
        <label className='form-label'>Email:</label>
        <input type="email" className='form-control' name='email' onChange={ handleChange } value={email} />
      </div>
      
      <div className="mb-3">
        <label className='form-label'>Nombre:</label>
        <input type="text" className='form-control' name='name' onChange={ handleChange } value={name} />
      </div>

      <pre>{JSON.stringify(form)}</pre>

    </form>
  )
}
