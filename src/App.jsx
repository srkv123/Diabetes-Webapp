import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-5xl m-4'>
     <Header/>
      hellooo
     </h1>
    </>
  )
}

export default App
