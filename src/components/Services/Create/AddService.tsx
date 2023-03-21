import { UpdatePath } from "../../../utils/RUDPath";
import { ContentSpace, ContentTitle, QSCard, QSTypography, Asterisk, QsInput, QsButton, QsTextArea, QsCheckbox } from '../../Generals';
import { Row, Col, Form, Space } from 'antd'
import type { CheckboxValueType } from 'antd/es/checkbox/Group';

// Select
const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  // Checkbox Group
  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
  };

export const AddService = () => {
    const addServicePath = ['service', 'create']
    UpdatePath(addServicePath)

    return (
        <ContentSpace>
            <ContentTitle title='Quản lý dịch vụ' />
            <QSCard qscardtype='form' style={{ width: '100%', minHeight: 'auto' }}>
                <QSTypography.Title level={2}>Thông tin dịch vụ</QSTypography.Title>
                <Form layout='vertical' className='form-control'>
                    <Row gutter={[24,0]}>
                        <Col xs={24} lg={12} xl={12}>
                            <Form.Item
                                className='qs-form-item'
                                rules={[{ required: true, message: 'Vui lòng nhập mã dịch vụ' }]}
                                label="Mã dịch vụ:"
                                tooltip={{ title: 'This is a required field', icon: Asterisk }}
                            >
                                <QsInput placeholder='Nhập mã dịch vụ' value='' />
                            </Form.Item>

                            <Form.Item
                                className='qs-form-item'
                                rules={[{ required: true, message: 'Vui lòng nhập tên dịch vụ' }]}
                                label="Tên dịch vụ:"
                                tooltip={{ title: 'This is a required field', icon: Asterisk }}
                            >
                                <QsInput placeholder='Khám tim mạch' value='' />
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={12} xl={12}>
                            <Form.Item
                                className='qs-form-item'
                                label="Mô tả:"
                            >
                                <QsTextArea placeholder="Mô tả dịch vụ" value='' />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[24, 0]}>
                        <Col xs={24} lg={24} xl={24}>
                            <QSTypography.Title level={2}>Quy tắc cấp số</QSTypography.Title>
                            <QsCheckbox.Group 
                            options={[
                                { label: <QsCheckbox.Label text='Tăng tự động từ:' suffix={<QsCheckbox.Suffix type='double' values={
                                    [
                                        { placeholder: '0001', value: '0001' },
                                        { placeholder: '9999', value: '9999' },
                                    ]
                                } />} />, value: 0 },
                                { label: <QsCheckbox.Label text='Prefix:' suffix={<QsCheckbox.Suffix type='single' values={
                                    [
                                        { placeholder: '0001', value: '0001' },
                                    ]
                                } />} />, value: 1 },
                                { label: <QsCheckbox.Label text='Surfix:' suffix={<QsCheckbox.Suffix type='single' values={
                                    [
                                        { placeholder: '0001', value: '0001' },
                                    ]
                                } />} />, value: 2 },
                                { label: <QsCheckbox.Label text='Reset mỗi ngày:' suffix={<QsCheckbox.Suffix type='single' />} />, value: 3 },
                            ]}
                            onChange={onChange}
                            />
                        </Col>
                    </Row>

                    <Row gutter={[24, 0]}>
                        <Col xs={24} lg={24} xl={24}>
                            <Space size={4} align='center' className='form-space-desc' style={{ marginBottom: 'auto' }}>
                                {Asterisk}
                                <QSTypography.Text>Là trường thông tin bắt buộc</QSTypography.Text>
                            </Space>
                        </Col>
                    </Row>
                </Form>
            </QSCard>
            <Space className='form-actions-space'>
                <QsButton.Cancel><QSTypography.Button>Hủy bỏ</QSTypography.Button></QsButton.Cancel>
                <QsButton.Submit><QSTypography.Button>Thêm dịch vụ</QSTypography.Button></QsButton.Submit>
            </Space>
        </ContentSpace>
    );
}