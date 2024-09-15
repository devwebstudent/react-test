import './App.css'

// Ícones
import { MdOutlineAdsClick } from "react-icons/md";
import { RxReset } from "react-icons/rx";

import { useState, useEffect } from 'react'

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>Em construção.</h1>
      <p>Volte mais tarde!</p>

      <h2>Apenas para testar useState</h2>
      <p>
        Clicou: {count}
      </p>

      <div className="control">
        <button onClick={(e) => setCount(count + 1)}>          
          <MdOutlineAdsClick className='click'/>
        </button>

        <button onClick={(e) => setCount(0)}>          
          <RxReset className='reset'/>
        </button>
      </div>
    </div>
  )
}

export default App
