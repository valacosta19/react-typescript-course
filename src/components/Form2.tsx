import { useForm } from '../hooks/useForm'

interface FormData {
  postal: string;
  city: string;
}

export const Form2 = () => {

  const { form, handleChange } = useForm<FormData>({
    postal: '',
    city: ''
  })

  return (
    <form autoComplete='off'>

      <div className="mb-3">
        <label className='form-label'>Código Postal:</label>
        <input type="postal" className='form-control' name='postal' onChange={ handleChange } />
      </div>
      
      <div className="mb-3">
        <label className='form-label'>Ciudad:</label>
        <input type="text" className='form-control' name='city' onChange={ handleChange } />
      </div>

      <pre>{JSON.stringify(form)}</pre>

    </form>
  )
}
