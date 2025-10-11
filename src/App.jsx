import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-white py-12 px-5 w-110'>
       <div class="container" className='flex flex-col gap-3 items-center justify-center'>
        <h1 id="main-title" className='text-blue-900 font-bold text-3xl'>TO DO LIST</h1>
        <input id="input-head" placeholder="search..." className='bg-blue-100 px-2 py-1 rounded-4xl w-full mb-4'/>
        <ul className='flex flex-col gap-3.5 mb-3'>
            <h3>Your list</h3>
            <li class="li">
                <span>clean up your room </span>
                <button class="btn">delete</button>
            </li>
            <li class="li">
                <span>find a motivational book foe reading</span>
                <button class="btn">delete</button>
            </li>
            <li class="li">
                <span>go to the gym</span> 
                <button class="btn">delete</button>
            </li>
            <li class="li">
                <span>focus on your goals</span> 
                <button class="btn">delete</button>
            </li>
        </ul>
        <form>
            <input id="input-button" className='bg-blue-100 px-2 py-1 rounded-4xl mr-2'/>
            <button className='bg-blue-800 px-2.5 py-1.5 text-white rounded-xl'>add</button>
        </form>
      </div>
    </div>
  )
}

export default App
