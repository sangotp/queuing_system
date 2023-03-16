import { Row, Col, Typography } from "antd"
import { DefaultSelect, DateRangeSelect } from "../../../../DataEntry/Select"
import { DatePickerProps } from "antd";
import { SearchInput } from "../../../../DataEntry/Input";
import { useSelector } from "react-redux";
import { reducerTypes } from "../../../../../../state/reducers";
import { DefaultOptionType } from "antd/es/select";

// Select
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

// Date Select
const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

// Search Input
const onSearch = (value: string) => console.log(value);

export const ProgressionActions = () => {
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
    <Row gutter={8} className='table-header-row'>
      <Col className='table-header-col'>
        <Typography.Title level={3}>Tên dịch vụ</Typography.Title>
        <DefaultSelect
            defaultValue="all"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: 'all', label: 'Tất cả' },
              ...serviceOptions
            ]} 
        />
      </Col>
      <Col className='table-header-col'>
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
      <Col className='table-header-col'>
        <Typography.Title level={3}>Nguồn cấp</Typography.Title>
        <DefaultSelect
            defaultValue="all"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: 'all', label: 'Tất cả' },
              ...deviceOptions
            ]} 
        />
      </Col>
      <Col className='table-header-col'>
        <Typography.Title level={3}>Chọn thời gian</Typography.Title>
        <DateRangeSelect onChange={onChange} />
      </Col>
      <Col className='table-header-col'>
        <Typography.Title level={3}>Từ khóa</Typography.Title>
        <SearchInput placeholder="Nhập từ khóa" onSearch={onSearch} style={{ width: 200 }} />
      </Col>
    </Row>
  )
}