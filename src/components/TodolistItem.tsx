type TodolistItemProps = {
  title: string,
  tasks: TodolistTypeTask[]
}

export type TodolistTypeTask = {
  id: number | string,
  title: string,
  isDone: boolean,
}

export const TodolistItem = (props: TodolistItemProps) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input/>
        <button>+</button>
      </div>
      {props.tasks.length <= 0 ? (<span className={"block my-4"}>Задач нет</span>) : (
        <ul className={"my-4"}>
          {props.tasks.map((task: TodolistTypeTask, index: number) => {
            return (
              <li>
                <input key={index} id={`${task.id}`} type="checkbox" checked={task.isDone}/> <span>{task.title}</span>
              </li>
            )
          })}
        </ul>
      )}
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  )
}
