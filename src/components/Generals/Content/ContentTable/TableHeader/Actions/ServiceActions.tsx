import { Row, Col, Typography } from "antd"
import { DefaultSelect, DateRangeSelect } from "../../../../DataEntry/Select"
import { DatePickerProps } from "antd";
import { SearchInput } from "../../../../DataEntry/Input";

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

export const ServiceActions = () => {
  return (
    <Row gutter={8} className='table-header-row'>
      <Col className='table-header-col'>
        <Typography.Title level={3}>Trạng thái hoạt động</Typography.Title>
        <DefaultSelect
            defaultValue="all"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: 'all', label: 'Tất cả' },
              { value: 'active', label: 'Hoạt động' },
              { value: 'inactive', label: 'Ngưng hoạt động' },
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