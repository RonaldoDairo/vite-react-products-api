import { useState } from 'react'
import ProductList from './componets/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className='App'>
        <h1 className='title'>Vite + React</h1>
        <ProductList/>
      </div>
     
   
  )
}

export default App
