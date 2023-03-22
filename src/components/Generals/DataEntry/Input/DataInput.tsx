import { Input, InputProps } from "antd"
import type { TextAreaProps } from 'antd/es/input/TextArea'
import { EyeIcon, EyeSlashIcon } from "./InputIcons"
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

export const QsInputPassword = (props: InputProps) => {
  return (
    <Input.Password {...props} iconRender={(visible) => (visible ? EyeIcon : EyeSlashIcon)} className={props.className ? `${props.className} qs-input-password` : 'qs-input-password'} />
  )
}

export const QsTextArea = (props: TextAreaProps) => {
  const { TextArea } = Input

  return (
    <TextArea
      {...props} className={props.className ? `${props.className} qs-textarea` : 'qs-textarea'}
    />
  )
}