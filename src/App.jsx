import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>Em construção.</h1>
      <p>Volte mais tarde!</p>

      <h2>Apenas para testar useState</h2>
      <p>Clicou: {count}</p>
      <button onClick={(e) => setCount(count + 1)}>Clique</button>
    </div>
  )
}

export default App
