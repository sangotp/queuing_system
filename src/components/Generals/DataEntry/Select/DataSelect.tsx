import { Select, SelectProps, DatePicker, DatePickerProps, Space } from "antd"

export const DefaultSelect = (props: SelectProps) => {
  return (
    <Select
      {...props}
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