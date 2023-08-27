import React from 'react'
import { useState} from 'react'

export default function Anidador() {
    const [palabra1,setPalabra] = useState('Hola')
    const anidarPalabras = () => {
        setPalabra(palabra1+' die peso')
        console.log(palabra1)
    }
  return (
    <>
    <h1>Anidador de palabras</h1>
    <h2>{palabra1}</h2>
    <button onClick={anidarPalabras}>Agregar "die peso"</button>

    </>
   
  )
}
