import {TodolistItem, type TodolistTypeTask} from "./components/TodolistItem.tsx";

function App() {
  const tasks1: TodolistTypeTask[] = [
    {id: 1, title: 'HTML&CSS', isDone: true},
    {id: 2, title: 'JS', isDone: true},
    {id: 3, title: 'ReactJS', isDone: false},
  ]

  const tasks2: TodolistTypeTask[] = []

  return (
    <div className="app flex gap-5 p-5">
      <TodolistItem title="What to learn" tasks={tasks1}/>
      <TodolistItem title="Songs" tasks={tasks2}/>
    </div>
  )
}

export default App
