import { useState } from "react"

export default function Formulario(){


    let [error,setError] = useState(false)
    let [textoInput,setTextoInput] = useState("")

    return (<form onSubmit={ evento => {
                        evento.preventDefault()
                        console.log(textoInput)
                    } }>

                <input 
                        type="text" 
                        placeholder="rrr,ggg,bbb" 
                        value={ textoInput }
                        onChange={ evento => {
                            setTextoInput(evento.target.value)
                        } }
                    />
                <p className={ `error ${ error ? "visible" : "" }` }>x error</p>
                <input type="submit" value="crear color" />

            </form>)
}