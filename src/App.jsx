import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ToDo from './components/Todo'
import AppDateProvider from "./contect";

function App() {
  return (
    <>
    <AppDateProvider>
      <ToDo/>
    </AppDateProvider>
    </>
  )
}

export default App
