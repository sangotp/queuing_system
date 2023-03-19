import { Input, InputProps } from "antd"
import './styles/DataInput.css'

type SearchInputProps = {
  onSearch: (value: string, event?: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLElement, MouseEvent> | React.KeyboardEvent<HTMLInputElement> | undefined) => void
} & InputProps

export const SearchInput = (props: SearchInputProps) => {
  const { Search } = Input

  return (
    <Search {...props} />
  )
}

export const QsInput = (props: InputProps) => {
  return (
    <Input {...props} className={props.className ? `${props.className} qs-input` : 'qs-input'} />
  )
}