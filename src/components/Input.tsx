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
      {...rest}
    />
  )
}
