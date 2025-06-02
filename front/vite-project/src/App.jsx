import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [tableText1, setTabletext1] = useState('') //первая строка текста
  const [tableText2, setTabletext2] = useState('') //вторая строка
  const [showText, setShowtext] = useState(false) //определяет, какой текст будет показан

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
      {/* показывается либо tableText1, либо tableText2 в зависимости от showText */}
      <p>{showText ? tableText2 : tableText1}</p> 
      {/* при клике состояние showText меняется на противоположное */}
      <button onClick={() => setShowtext(prev => !prev)}>click</button>
    </>
  )
}

export default App
