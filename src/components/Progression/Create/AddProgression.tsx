import { ContentSpace, ContentTitle, QSCard, QSTypography, QsButton, DefaultSelect } from '../../Generals';
import { Row, Col, Form, Space } from 'antd'
import { useSelector } from "react-redux";
import { NewProgressionModal } from "../Modal";
import type { reducerTypes } from "../../../state/reducers";
import type { DefaultOptionType } from 'antd/es/select';
import { useState } from 'react';
import './styles/AddProgression.css'

// Select
const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};

export const AddProgression = () => {
    // Services
    const services = useSelector((state: reducerTypes) => state.services)

    // Modal
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <ContentSpace>
            <ContentTitle title='Quản lý cấp số' />
            <QSCard qscardtype='form' className='progression-card'>
                <QSTypography.Title level={2} className='progression-main-title'>Cấp số mới</QSTypography.Title>
                <Form layout='vertical' className='form-control'>
                    <Row gutter={[24,0]}>
                    <Col xs={24}>
                            <Form.Item
                                className='qs-form-item progression-form-item'
                                rules={[{ required: true, message: 'Vui lòng chọn loại thiết bị' }]}
                                label="Dịch vụ khách hàng lựa chọn"
                            >
                                <DefaultSelect 
                                    // defaultValue="deviceSelect"
                                    placeholder='Chọn dịch vụ'
                                    onChange={handleChange}
                                    options={
                                        services.map((service) => {
                                            return {
                                                value: service.id, label: service.name
                                            } as DefaultOptionType
                                        })
                                    } 
                                    className='select-device-type'
                                    getPopupContainer={() => document.querySelector('.select-device-type')!}
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={[24, 0]}>
                        <Col xs={24} lg={24} xl={24}>
                            <Space className='form-actions-space form-actions-space-progression'>
                                <QsButton.Cancel>
                                    <QSTypography.Button>Hủy bỏ</QSTypography.Button>
                                </QsButton.Cancel>
                                <QsButton.Submit onClick={() => setModalOpen(true)}>
                                    <QSTypography.Button>In số</QSTypography.Button>
                                </QsButton.Submit>
                            </Space>
                            <NewProgressionModal isModalOpen={modalOpen} setModalOpen={setModalOpen} />
                        </Col>
                    </Row>
                </Form>
            </QSCard>
        </ContentSpace>
    );
}