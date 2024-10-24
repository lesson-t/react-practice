import * as React from "react"

type Props = {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  type: "text" | "date"
}

export const TextField = ({ id, label, value, onChange, type }: Props) => {
  console.log("TextFieldコンポーネントのレンダー")

  return (
    <div className="flex gap-1 items-center">
      <label htmlFor={id}>{label}</label>
      <input
        className="border rounded p-1"
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
