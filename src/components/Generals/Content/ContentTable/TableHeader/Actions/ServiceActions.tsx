import { Row, Col, Typography } from "antd"
import { DefaultSelect, DateRangeSelect } from "../../../../DataEntry/Select"
import { SearchInput } from "../../../../DataEntry/Input";

// Select
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

// Search Input
const onSearch = (value: string) => console.log(value);

export const ServiceActions = () => {
  return (
    <Row gutter={8} className='table-header-row'>
      <Col className='table-header-col'>
        <Typography.Title level={3} className='table-header-title'>Trạng thái hoạt động</Typography.Title>
        <DefaultSelect
            defaultValue="all"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: 'all', label: 'Tất cả' },
              { value: 'active', label: 'Hoạt động' },
              { value: 'inactive', label: 'Ngưng hoạt động' },
            ]} 
            className='select-activities'
            getPopupContainer={() => document.querySelector('.select-activities')!}
        />
      </Col>
      <Col className='table-header-col'>
        <Typography.Title level={3} className='table-header-title'>Chọn thời gian</Typography.Title>
        <DateRangeSelect />
      </Col>
      <Col className='table-header-col margin-start-auto'>
        <Typography.Title level={3} className='table-header-title'>Từ khóa</Typography.Title>
        <SearchInput placeholder="Nhập từ khóa" onSearch={onSearch} style={{ width: 200 }} className='table-header-search-input' />
      </Col>
    </Row>
  )
}