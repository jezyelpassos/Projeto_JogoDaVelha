import { useState } from "react"


export default function Square({value, onSquareClick}) {

    return (
        <>
          <button 
            className="square"
            onClick={onSquareClick}//propriedade dentro da chave e o onClick é manipulador de evento
          >
              {value}
          </button>
        </>
    )
}