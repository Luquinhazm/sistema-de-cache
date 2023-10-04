'use client'

import { useState } from "react"

export default function ComponenteDeTeste() {
    const [age, setAge] = useState(0)


    return (
        <>
            <input 
            type="text" 
            onChange={e => setAge(e.target.value)}
            />
            <h1>Minha idade é: {age}</h1>
        </>
    )
}