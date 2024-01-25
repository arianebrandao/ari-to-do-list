export function Input({
  ...rest
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return (
    <input
      required
      minLength={4}
      type="text"
      placeholder="Adicione uma nova tarefa"
      className="max-w-[638px] w-full p-4 rounded-lg border border-gray-700 bg-gray-500 placeholder:text-gray-300 focus:outline-none text-gray-100 focus:border-purple-dark"
      {...rest}
    />
  )
}
