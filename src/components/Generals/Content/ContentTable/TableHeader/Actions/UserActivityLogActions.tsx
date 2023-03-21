import { Row, Col, Typography } from "antd"
import { DefaultSelect, DateRangeSelect } from "../../../../DataEntry/Select"
import { SearchInput } from "../../../../DataEntry/Input";

// Select
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

// Search Input
const onSearch = (value: string) => console.log(value);

export const UserActivityLogActions = () => {
  return (
    <Row gutter={8} className='table-header-row'>
      <Col className='table-header-col'>
        <Typography.Title level={3}>Chọn thời gian</Typography.Title>
        <DateRangeSelect />
      </Col>
      <Col className='table-header-col'>
        <Typography.Title level={3}>Từ khóa</Typography.Title>
        <SearchInput placeholder="Nhập từ khóa" onSearch={onSearch} style={{ width: 200 }} />
      </Col>
    </Row>
  )
}