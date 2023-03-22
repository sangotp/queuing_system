import { Row, Col, Typography } from "antd"
import { DefaultSelect, DateRangeSelect } from "../../../../DataEntry/Select"
import { SearchInput } from "../../../../DataEntry/Input";

// // Select
// const handleChange = (value: string) => {
//   console.log(`selected ${value}`);
// };


// // Search Input
// const onSearch = (value: string) => console.log(value);

export const ReportActions = () => {
  return (
    <Row gutter={8} className='table-header-row'>
      <Col className='table-header-col'>
        <Typography.Title level={3} className='table-header-title'>Chọn thời gian</Typography.Title>
        <DateRangeSelect />
      </Col>
    </Row>
  )
}