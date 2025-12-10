import { useState, useEffect } from 'react'
import RandomDog from './RandomDog'


function App() {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh);
  }
  return (
    <>
      <div>
        <RandomDog key={`${refresh}1`}/>
        <RandomDog key={`${refresh}2`}/>
        <RandomDog key={`${refresh}3`}/>
      </div>
      <button onClick={handleRefresh}>Refresh Dogs</button>
    </>
  )
}

export default App
