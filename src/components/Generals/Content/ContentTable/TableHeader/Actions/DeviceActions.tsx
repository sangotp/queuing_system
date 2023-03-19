import { Row, Col, Typography } from "antd"
import { DefaultSelect } from "../../../../DataEntry/Select"
import { SearchInput } from "../../../../DataEntry/Input";

// Select
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

// // Date Select
// const onChange: DatePickerProps['onChange'] = (date, dateString) => {
//   console.log(date, dateString);
// };

// Search Input
const onSearch = (value: string) => console.log(value);

export const DeviceActions = () => {
  return (
    <Row gutter={8} className='table-header-row'>
      <Col className='table-header-col'>
        <Typography.Title level={3} className='table-header-title'>Trạng thái hoạt động</Typography.Title>
        <DefaultSelect
            defaultValue="all"
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
        {/* <DateRangeSelect onChange={onChange} /> */}
        <Typography.Title level={3} className='table-header-title'>Trạng thái kết nối</Typography.Title>
        <DefaultSelect
            defaultValue="all"
            onChange={handleChange}
            options={[
              { value: 'all', label: 'Tất cả' },
              { value: 'connected', label: 'Kết nối' },
              { value: 'disconnected', label: 'Mất kết nối' },
            ]} 
            className='select-connection'
            getPopupContainer={() => document.querySelector('.select-connection')!}
        />
      </Col>
      <Col className='table-header-col margin-start-auto'>
        <Typography.Title level={3} className='table-header-title'>Từ khóa</Typography.Title>
        <SearchInput placeholder="Nhập từ khóa" onSearch={onSearch} style={{ width: 200 }} className='table-header-search-input' />
      </Col>
    </Row>
  )
}