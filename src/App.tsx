import { FormEvent, useState, ChangeEvent, useEffect, MouseEvent } from 'react'
import { EmptyTasksList } from './components/EmptyTasksList'
import { Input } from './components/Input'
import { Checkbox } from './components/Checkbox'
import { Button } from './components/Button'
import { ListHeader } from './components/ListHeader'
import { DeleteIcon } from './components/DeleteIcon'
import { Logo } from './components/Logo'

interface TaskProps {
  id: number
  content: string
  isChecked: boolean
}

export interface TasksListProps {
  task: TaskProps
}

const tasksDefault = [
  {
    id: 1,
    content:
      'Internacionalização: adicionar suporte para outros idiomas no app',
    isChecked: false,
  },
]

export function App() {
  const [taskList, setTaskList] = useState<TaskProps[]>(tasksDefault)
  const [newTaskText, setNewTaskText] = useState('')
  const [totalOfTasks, setTotalOfTasks] = useState(0)

  useEffect(() => {
    setTotalOfTasks(() => taskList.length)
  }, [taskList])

  function handleNewTaskText(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value)
  }

  function createNewTask(event: FormEvent | Event) {
    event.preventDefault()

    const newTaskId = taskList.length + 1
    setTaskList([
      {
        id: newTaskId,
        content: newTaskText,
        isChecked: false,
      },
      ...taskList,
    ])
    setNewTaskText('')
  }

  function handleTaskToggle(
    event: MouseEvent<HTMLInputElement>,
    taskId: number,
  ) {
    const isChecked = event.currentTarget.checked
    const updatedTaskListWithTaskChecked = taskList.map((task) => {
      if (task.id === taskId) {
        return { ...task, isChecked }
      }
      return task
    })
    setTaskList(updatedTaskListWithTaskChecked)
  }

  const checkedTasksCounter = taskList.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1
    }
    return prevValue
  }, 0)

  function handleDeleteTask(taskId: number) {
    const updatedTaskListWithDeletedTask = taskList.filter(
      (task) => task.id !== taskId,
    )
    setTaskList(updatedTaskListWithDeletedTask)
  }

  return (
    <main className="antialiased mb-10">
      <div className="bg-gray-700 mx-auto">
        <div className="flex flex-col items-center justify-center pt-20">
          <Logo />
          <form
            onSubmit={createNewTask}
            className="mt-14 -mb-7 w-[736px] max-w-full flex gap-x-2 px-2"
          >
            <Input onChange={handleNewTaskText} value={newTaskText} />
            <Button>Criar</Button>
          </form>
        </div>
      </div>
      <div className="mt-[92px] px-2 w-[736px] max-w-full mx-auto">
        <ListHeader
          totalOfTasks={totalOfTasks}
          checkedTasksCounter={checkedTasksCounter}
        />

        {totalOfTasks === 0 ? (
          <EmptyTasksList />
        ) : (
          <div className="flex flex-col gap-3">
            {taskList?.map((task) => {
              const isParagraphChecked = task.isChecked ? 'line-through' : ''
              return (
                <div
                  key={task.id}
                  className="gap-3 p-4 border bg-gray-500 border-gray-400 rounded-lg justify-between items-start inline-flex"
                >
                  <div className="inline-flex gap-3">
                    <Checkbox
                      onClick={(event) =>
                        handleTaskToggle(
                          event as MouseEvent<HTMLInputElement>,
                          task.id,
                        )
                      }
                    />
                    <p
                      className={`${isParagraphChecked} text-gray-100 text-sm leading-14`}
                    >
                      {task.content}
                    </p>
                  </div>
                  <DeleteIcon onClick={() => handleDeleteTask(task.id)} />
                </div>
              )
            })}
          </div>
        )}
      </div>
    </main>
  )
}
