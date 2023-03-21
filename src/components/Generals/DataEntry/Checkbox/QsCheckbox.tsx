import { Checkbox, Space } from 'antd'
import type { CheckboxGroupProps } from 'antd/es/checkbox/Group'
import { QSTypography } from '../../Typography'
import { QsInput } from '../Input'
import './styles/Checkbox.css'

type LabelProps = {
  text: string
  suffix?: React.ReactNode
}

type SuffixProps = {
  type: 'single' | 'double'
  values?: {placeholder: string, value: string | number | readonly string[]}[]
  className?: string
}


export const Group = (props: CheckboxGroupProps) => {
  return (
    <Checkbox.Group {...props} className='qs-checkbox-group' />
  )
}

export const Label = (props: LabelProps) => {
  const { text, suffix } = props

  return (
    <Space className='qs-checkbox-group-space'>
      <div className='qs-checkbox-group-text'>
        <QSTypography.Text className='qs-checkbox-group-suffix-text'>{text}</QSTypography.Text>
      </div>
      <div className='qs-checkbox-group-suffix'>
        {suffix}
      </div>
    </Space>
  )
}

export const Suffix = (props: SuffixProps) => {
  const { className, type, values } = props

  return type === 'double' ? (
    <div className={className ? `qs-checkbox-group-suffix-space ${className}`: 'qs-checkbox-group-suffix-space'}>
      {values?.map((value, index) => {
        if(index === 0)
        {
          return (
            <div className='qs-checkbox-group-suffix-wrapper' key={index}>
              <QsInput placeholder={value.placeholder} value={value.value} className='qs-checkbox-group-suffix-input' readOnly />
              <QSTypography.Text className='qs-checkbox-group-suffix-text'>đến</QSTypography.Text>
            </div>
          )
          
        }
        else {
          return (
            <div className='qs-checkbox-group-suffix-wrapper' key={index}>
              <QsInput placeholder={value.placeholder} value={value.value} className='qs-checkbox-group-suffix-input' readOnly />
            </div>
          )
        }
      })}
    </div>
  ) : (
    <div className={className ? `qs-checkbox-group-suffix-space ${className}`: 'qs-checkbox-group-suffix-space'}>
      {values?.map((value, index) => {
        return (
          <div className='qs-checkbox-group-suffix-wrapper' key={index}>
            <QsInput placeholder={value.placeholder} value={value.value} className='qs-checkbox-group-suffix-input' readOnly />
          </div>
        )
      })}
    </div>
  )
}