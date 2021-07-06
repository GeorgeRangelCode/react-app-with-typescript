import { useState, useReducer } from "react"
import { Sub } from "../types"

interface FormState {
  inputValues: Sub
}

interface FormProps {
  onNewSub: (newSub: Sub) => void
}

const INITIAL_STATE = { 
  nick: '',
  subMonths: 0,
  avatar: '',
  description: ''
}

const formReducer = (state, action) => {
  switch (action.type) {
    case "change_value":
      const {inputName, inputValue} = action.payload
      return {
        ...state,
        [inputName]: inputValue
      }
   
    default:
      break;
  }
}

const Form = ({onNewSub}: FormProps) => {
  // const [inputValues, setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE)

  const [inputValues, dispatch] = useReducer(formReducer, INITIAL_STATE)

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    onNewSub(inputValues)
    handleClear()
  }

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValues({
      ...inputValues,
      [evt.target.name]: evt.target.value
    })
  }
  const handleClear = () => {
    setInputValues(INITIAL_STATE)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={inputValues.nick} type="text" name="nick" placeholder="Nick" />
        <input onChange={handleChange} value={inputValues.subMonths} type="text" name="subMonths" placeholder="SubMonths" />
        <input onChange={handleChange} value={inputValues.avatar} type="text" name="avatar" placeholder="avatar" />
        <textarea onChange={handleChange} value={inputValues.description} name="description" placeholder="Description" />
        <button type="button" onClick={handleClear}>Clear the form</button>
        <button type="submit">Save new sub!</button>
      </form>
    </div>
  )
}

export default Form