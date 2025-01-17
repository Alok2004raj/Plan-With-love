import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data'
import Tours from './Components/Tours'

function App() {
  const [tours, settours] = useState(data)
  function removeTour(id){
    const newTours=tours.filter(tour=>tour.id!=id)
    settours(newTours)
  }

  if(tours.length===0){
    return (
      <div className='refresh'>
        <h2>No Tours Left</h2>
        <button className='btn-white' onClick={()=>settours(data)}>Refresh</button>
      </div>
    )
  }
  return (
    <>
     
     <div className='App'>
     
      <Tours tours={tours} removeTour={removeTour}></Tours>
     </div>
    </>
  )
}

export default App
