import { useParams } from "react-router-dom";
import { ContentSpace, ContentTitle, QSCard, QSTypography, Asterisk, QsInput, QsButton, QsTextArea, QsCheckbox } from '../../../Generals';
import { Row, Col, Form, Space } from 'antd'
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import { QsUtilsRead } from "../../../../utils/CRUD";
import './styles/UpdateRole.css'

// Checkbox Group
const onChangeGroupA = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
    };
    const onChangeGroupB = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
    };

export const UpdateRole = () => {
    const { roleId } = useParams()

    // Role
    const role = QsUtilsRead.Role(roleId!)

    return role && (
        <ContentSpace>
            <ContentTitle title='Danh sách vai trò' />
            <QSCard qscardtype='form' style={{ width: '100%', minHeight: 'auto' }}>
                <QSTypography.Title level={2}>Thông tin vai trò</QSTypography.Title>
                <Form layout='vertical' className='form-control'>
                    <Row gutter={[24,0]} className='role-row'>
                        <Col xs={24} lg={12} xl={12} className='role-col'>
                            <Form.Item
                                className='qs-form-item'
                                rules={[{ required: true, message: 'Vui lòng nhập tên vai trò' }]}
                                label="Tên vai trò:"
                                tooltip={{ title: 'This is a required field', icon: Asterisk }}
                            >
                                <QsInput placeholder='Nhập tên vai trò' value={role.name} />
                            </Form.Item>

                            <Form.Item
                                className='qs-form-item'
                                label="Mô tả:"
                            >
                                <QsTextArea placeholder="Nhập mô tả" value={role.desc} />
                            </Form.Item>

                            <Space size={4} align='center' className='form-space-desc' style={{ marginBottom: 'auto' }}>
                                {Asterisk}
                                <QSTypography.Text>Là trường thông tin bắt buộc</QSTypography.Text>
                            </Space>
                        </Col>
                        <Col xs={24} lg={12} xl={12} className='role-col'>
                            <Form.Item
                                className='qs-form-item'
                                rules={[{ required: true, message: 'Vui lòng chọn nhóm chức năng phân quyền' }]}
                                label="Phân quyền chức năng:"
                                tooltip={{ title: 'This is a required field', icon: Asterisk }}
                            >
                                <Space direction='vertical' className='role-authorization-space'>
                                    <QSTypography.Title level={2}>Nhóm chức năng A</QSTypography.Title>
                                    <QsCheckbox.Group 
                                        defaultValue={ role.features_authorization.map((author) => {
                                            return author
                                        }) }
                                        options={[
                                            { label: <QsCheckbox.Label text='Tất cả' suffix={<QsCheckbox.Suffix type='single' />} />, value: 'Tất cả' },
                                            { label: <QsCheckbox.Label text='Chức năng X' suffix={<QsCheckbox.Suffix type='single' />} />, value: 'Chức năng X' },
                                            { label: <QsCheckbox.Label text='Chức năng Y' suffix={<QsCheckbox.Suffix type='single' />} />, value: 'Chức năng Y' },
                                            { label: <QsCheckbox.Label text='Chức năng Z' suffix={<QsCheckbox.Suffix type='single' />} />, value: 'Chức năng Z' },
                                        ]}
                                        onChange={onChangeGroupA}
                                    />
                                    <QSTypography.Title level={2}>Nhóm chức năng B</QSTypography.Title>
                                    <QsCheckbox.Group 
                                        options={[
                                            { label: <QsCheckbox.Label text='Tất cả' suffix={<QsCheckbox.Suffix type='single' />} />, value: 'Tất cả' },
                                            { label: <QsCheckbox.Label text='Chức năng A' suffix={<QsCheckbox.Suffix type='single' />} />, value: 'Chức năng A' },
                                            { label: <QsCheckbox.Label text='Chức năng B' suffix={<QsCheckbox.Suffix type='single' />} />, value: 'Chức năng B' },
                                            { label: <QsCheckbox.Label text='Chức năng C' suffix={<QsCheckbox.Suffix type='single' />} />, value: 'Chức năng C' },
                                        ]}
                                        onChange={onChangeGroupB}
                                    />
                                </Space>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </QSCard>
            <Space className='form-actions-space'>
                <QsButton.Cancel><QSTypography.Button>Hủy bỏ</QSTypography.Button></QsButton.Cancel>
                <QsButton.Submit><QSTypography.Button>Cập nhật vai trò</QSTypography.Button></QsButton.Submit>
            </Space>
        </ContentSpace>
    );
}