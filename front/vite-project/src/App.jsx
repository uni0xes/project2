import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [tableText1, setTabletext1] = useState('') 
  const [tableText2, setTabletext2] = useState('')
  const [showText, setShowtext] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:5000/api/adress')
    .then(res => {
      setTabletext1(res.data.tableText1)
      setTabletext2(res.data.tableText2)
      setShowtext(res.data.showText)
    })
    .catch(err => {
      console.error(err)
    })
  }, [])

  return (
    <>
      <p>{showText ? tableText2 : tableText1}</p>
      <button onClick={() => setShowtext(prev => !prev)}>click</button>
    </>
  )
}

export default App
