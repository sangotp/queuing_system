import { Select, SelectProps, DatePicker } from "antd"
import { ArrowDown, ArrowRight } from "./SelectIcons"
import type { RangePickerProps } from 'antd/es/date-picker/index'
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

export const DateRangeSelect = (props: RangePickerProps) => {
  const { RangePicker } = DatePicker

  return (
    <RangePicker {...props} placeholder={['2023-03-19', '2023-03-25']} separator={ArrowRight} suffixIcon={false} getPopupContainer={() => document.querySelector('.qs-range-select')!} className={props.className ? `qs-range-select ${props.className}` : 'qs-range-select'} /> 
  )
}