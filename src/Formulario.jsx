import { useState } from "react"

export default function Formulario({agregarColor}){


    let [error,setError] = useState(false)
    let [textoInput,setTextoInput] = useState("")

    return (<form onSubmit={ evento => {
                        evento.preventDefault()
                        
                        setError(false)

                        let valido = /^(\d{1,3},){2}\d{1,3}$/.test(textoInput)

                        if(valido){

                            let [r,g,b] = textoInput.split(",").map(n => +n);// explicaria el uso de punto y coma

                            [r,g,b].forEach( n => valido = valido && n >= 0 && n <= 255)

                           if(valido){

                            return fetch("http://colores-back.onrender.com/nuevo", {
                                method : "POST",
                                body : JSON.stringify({r,g,b}),
                                headers : {
                                    "Content-type" : "application/json"
                                }
                            })
                            .then(respuesta => respuesta.json())
                            .then(respuesta => {
                                let {resultado,_id} = respuesta

                                if(_id){
                                    setTextoInput("")
                                    return agregarColor({_id,r,g,b})
                                }

                                console.log("mostrar error al usuario")
                            })
                           }
                           
                        }

                        setError(true)

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