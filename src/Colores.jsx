import { useState,useEffect } from 'react'
import Item from './Item.jsx'
import Formulario from './Formulario.jsx'

function Colores(){

    let [colores,setColores] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000")
        .then(respuesta => respuesta.json())
        .then(coloresApi => {
            
            setColores(coloresApi.reverse())
        })
    }, [])

    function agregarColor(objetoColor){
        setColores([objetoColor,...colores])
    }

    function borrarColor(id){
        fetch(`http://localhost:3000/borrar/${id}`,{ method : "DELETE" })
        .then(respuesta => respuesta.json())
        .then(respuesta => {
            let {resultado} = respuesta

            if(resultado && resultado == "ok"){
                return setColores(colores.filter(color => color._id != id))
            }
            console.log("error al usuario")
        })
    }

    return (<>
            <Formulario agregarColor={agregarColor} />
            <ul>
                { colores.map((color,i) => <Item id={color._id} key={color._id} r={color.r} g={color.g} b={color.b} borrarColor={borrarColor} />)}
                
            </ul>
            </>)
}




export default Colores