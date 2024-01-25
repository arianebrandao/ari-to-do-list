interface Props {
  totalOfTasks: number
  checkedTasksCounter: number
}

export function ListHeader({ totalOfTasks, checkedTasksCounter }: Props) {
  return (
    <div className="flex justify-between mb-6">
      <p className="text-sm text-blue font-bold">
        Tarefas criadas{' '}
        <span className="ml-2 bg-gray-400 py-[2px] px-2 rounded-full text-xs text-gray-200">
          {totalOfTasks}
        </span>
      </p>

      <p className="text-sm text-purple font-bold">
        Concluídas{' '}
        <span className="ml-2 bg-gray-400 py-[2px] px-2 rounded-full text-xs text-gray-200">
          {totalOfTasks === 0
            ? '0'
            : `${checkedTasksCounter} de ${totalOfTasks}`}
        </span>
      </p>
    </div>
  )
}
