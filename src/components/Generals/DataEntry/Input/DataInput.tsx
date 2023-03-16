import { Input, InputProps } from "antd"

type SearchInputProps = {
  onSearch: (value: string, event?: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLElement, MouseEvent> | React.KeyboardEvent<HTMLInputElement> | undefined) => void
} & InputProps

export const SearchInput = (props: SearchInputProps) => {
  const { Search } = Input

  return (
    <Search {...props} />
  )
}