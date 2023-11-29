import { useState,useEffect } from 'react'
import Item from './Item.jsx'
import Formulario from './Formulario.jsx'

function Colores(){

    let [colores,setColores] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000")
        .then(respuesta => respuesta.json())
        .then(coloresApi => {
            setColores(coloresApi)
        })
    }, [])

    return (<>
            <Formulario />
            <ul>
                { colores.map((color,i) => <Item key={i} r={color.r} g={color.g} b={color.b} />)}
                
            </ul>
            </>)
}


export default Colores