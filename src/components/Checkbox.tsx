export function Checkbox({
  ...rest
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return (
    <input
      type="checkbox"
      {...rest}
      className="form-checkbox rounded-full text-purple-dark hover:text-purple bg-transparent ring-transparent outline-none border-blue hover:border-blue-dark border-2 focus:ring-transparent focus:ring-offset-transparent"
    />
  )
}
