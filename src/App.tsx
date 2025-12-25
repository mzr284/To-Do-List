import ToDo from './components/Todo.js'
import AppDateProvider from "./contect.js";

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
