import { Select, SelectProps, DatePicker, DatePickerProps, Space } from "antd"
import { ArrowDown } from "./SelectIcons"
import './styles/DataSelect.css'

export const DefaultSelect = (props: SelectProps) => {
  return (
    <Select
      {...props}
      suffixIcon={props.suffixIcon ? props.suffixIcon : ArrowDown}
      className={props.className ? `qs-default-select ${props.className}` : 'qs-default-select'}
    />
  )
}

export const DateRangeSelect = (props: DatePickerProps) => {
  return (
    <Space>
      <DatePicker {...props} />
      <span>&gt;</span>
      <DatePicker {...props} />
    </Space>
  )
}