import React from 'react'
import { useState} from 'react'

export default function SumaUno() {
    const [a,aSet] = useState(1)
    const sumar1=() => {
        aSet(a+1)
        console.log(a)}

  return (
    <>
    <h1>Sumador</h1>
    <div>{a}</div>
    <button onClick={sumar1}>Sumar de a 1</button>

    </>
  )
}
