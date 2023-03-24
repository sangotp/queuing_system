import { Row, Col, Typography } from "antd"
import { DefaultSelect, DateRangeSelect } from "../../../../DataEntry/Select"
import { SearchInput } from "../../../../DataEntry/Input";
import { useSelector } from "react-redux";
import { reducerTypes } from "../../../../../../state/reducers";
import { DefaultOptionType } from "antd/es/select";

// Select
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

// Search Input
const onSearch = (value: string) => console.log(value);

type ProgressionActionsProps = {
  className?: string
}

export const ProgressionActions = (props: ProgressionActionsProps) => {
  const { className } = props

  const services = useSelector((state: reducerTypes) => state.services)
  const devices = useSelector((state:reducerTypes) => state.devices)


  const serviceOptions = [] as DefaultOptionType[]
  services.map((service) => {
    return serviceOptions.push({value: service.id, label: service.name})
  })

  const deviceOptions = [] as DefaultOptionType[]
  devices.map((device) => {
    return deviceOptions.push({value: device.id, label: device.name})
  })

  return (
    <Row gutter={[0,12]} className={className ? `table-header-row progression-row-control ${className}` : 'table-header-row progression-row-control'}>
      <Col xs={8} xl={3} className='table-header-col'>
        <Typography.Title level={3} className='table-header-title'>Tên dịch vụ</Typography.Title>
        <DefaultSelect
            defaultValue="all"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: 'all', label: 'Tất cả' },
              ...serviceOptions
            ]} 
            className='select-services'
            getPopupContainer={() => document.querySelector('.select-services')!}
        />
      </Col>
      <Col xs={8} xl={3} className='table-header-col'>
        <Typography.Title level={3} className='table-header-title'>Tình trạng</Typography.Title>
        <DefaultSelect
            defaultValue="all"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: 'all', label: 'Tất cả' },
              { value: 'wait', label: 'Đang chờ' },
              { value: 'used', label: 'Đã sử dụng' },
              { value: 'skipped', label: 'Bỏ qua' },
            ]}
            className='select-progression-status'
            getPopupContainer={() => document.querySelector('.select-progression-status')!}
        />
      </Col>
      <Col xs={8} xl={3} className='table-header-col'>
        <Typography.Title level={3} className='table-header-title'>Nguồn cấp</Typography.Title>
        <DefaultSelect
            defaultValue="all"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: 'all', label: 'Tất cả' },
              ...deviceOptions
            ]} 
            className='select-devices'
            getPopupContainer={() => document.querySelector('.select-devices')!}
        />
      </Col>
      <Col xs={12} xl={7} className='table-header-col'>
        <Typography.Title level={3} className='table-header-title'>Chọn thời gian</Typography.Title>
        <DateRangeSelect />
      </Col>
      <Col xs={12} xl={6} className='table-header-col margin-start-auto'>
        <Typography.Title level={3} className='table-header-title'>Từ khóa</Typography.Title>
        <SearchInput placeholder="Nhập từ khóa" onSearch={onSearch} style={{ width: 200 }} className='table-header-search-input' />
      </Col>
    </Row>
  )
}

export const ProgressionActionsLite = (props: ProgressionActionsProps) => {
  const { className } = props

  const services = useSelector((state: reducerTypes) => state.services)
  const devices = useSelector((state:reducerTypes) => state.devices)


  const serviceOptions = [] as DefaultOptionType[]
  services.map((service) => {
    return serviceOptions.push({value: service.id, label: service.name})
  })

  const deviceOptions = [] as DefaultOptionType[]
  devices.map((device) => {
    return deviceOptions.push({value: device.id, label: device.name})
  })

  return (
    <Row gutter={12} className={className}>
      <Col xs={24} md={12} lg={7}>
        <Typography.Title level={3}>Tình trạng</Typography.Title>
        <DefaultSelect
            defaultValue="all"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: 'all', label: 'Tất cả' },
              { value: 'wait', label: 'Đang chờ' },
              { value: 'used', label: 'Đã sử dụng' },
              { value: 'skipped', label: 'Bỏ qua' },
            ]} 
        />
      </Col>
      <Col xs={24} md={12} lg={8}>
        <Typography.Title level={3}>Chọn thời gian</Typography.Title>
        <DateRangeSelect />
      </Col>
      <Col xs={24} md={24} lg={9}>
        <Typography.Title level={3}>Từ khóa</Typography.Title>
        <SearchInput placeholder="Nhập từ khóa" onSearch={onSearch} style={{ width: 200 }} className='search-input-lite' />
      </Col>
    </Row>
  )
}