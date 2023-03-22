import { useParams } from "react-router-dom";
import { ContentSpace, ContentTitle, QsAsideActions, QSCard, QSTypography, EditSquareIcon, ReturnSquareIcon, QsCheckbox, TableBody } from '../../Generals'
import { UpdatePath } from '../../../utils/RUDPath';
import { QsUtilsRead } from '../../../utils/CRUD'
import { Row, Col, Space } from 'antd'
import { useNavigate } from "react-router-dom";
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import { ProgressionActionsLite } from "../../Generals/Content/ContentTable/TableHeader/Actions";
import { useSelector } from "react-redux";
import type { reducerTypes } from "../../../state/reducers";
import './styles/DetailsService.css'


// Checkbox Group
const onChange = (checkedValues: CheckboxValueType[]) => {
console.log('checked = ', checkedValues);
};

export const DetailsService = () => {
    const detailsServicePath = ['service', 'details']
    UpdatePath(detailsServicePath)

    // Params
    const { id } = useParams()

    // Service
    const service = QsUtilsRead.Service(id!)

    // Progressions
    const progressions = useSelector((state:reducerTypes) => state.progressions)

    // Aside Actions Event
    const navigate = useNavigate();

    const handleUpdateServiceClick = () => {
        navigate(`/service/update/${id}`)
    }

    const handleReturnServiceClick = () => {
        navigate(`/service`)
    }

    return service && (
        <ContentSpace>
            <ContentTitle title='Quản lý dịch vụ' />
            <Space size='large' className='service-card-space'>
                <QSCard qscardtype='default' className='qs-card-details'>
                    <Row className='service-row'>
                        <Col xs={24} className='service-col'>
                            <QSTypography.Title level={2}>Thông tin dịch vụ</QSTypography.Title>
                        </Col>
                        <Col xs={24} className='service-col'>
                            <QSTypography.Group direction='horizontal' title='Mã dịch vụ:'>{service?.id}</QSTypography.Group>
                            <QSTypography.Group direction='horizontal' title='Tên dịch vụ:'>{service?.name}</QSTypography.Group>
                            <QSTypography.Group direction='horizontal' title='Mô tả:'>{service?.desc}</QSTypography.Group>
                        </Col>
                        <Col xs={24} className='service-col'>
                            <QSTypography.Title level={2} className='mb-12'>Quy tắc cấp số</QSTypography.Title>
                        </Col>
                        <Col xs={24} className='service-col'>
                            {service.progression_rules.map((rule) => {
                                if (rule === 0)
                                {
                                    return (
                                        <QSTypography.Group direction='horizontal' title='Tăng tự động:' key={rule}>
                                            <QsCheckbox.Suffix type='double' values={
                                                [
                                                    { placeholder: '0001', value: '0001' },
                                                    { placeholder: '9999', value: '9999' },
                                                ]
                                            } />
                                        </QSTypography.Group>
                                    )
                                }
                                else if (rule === 1)
                                {
                                    return (
                                        <QSTypography.Group direction='horizontal' title='Prefix:' key={rule}>
                                            <QsCheckbox.Suffix type='single' values={
                                                [
                                                    { placeholder: '0001', value: '0001' },
                                                ]
                                            } />
                                        </QSTypography.Group>
                                    )
                                }

                                else if (rule === 2)
                                {
                                    return (
                                        <QSTypography.Group direction='horizontal' title='Reset mỗi ngày' key={rule}>
                                            <QsCheckbox.Suffix type='single' />
                                        </QSTypography.Group>
                                    )
                                }
                                return false;
                            })}
                        </Col>
                        <Col xs={24} className='service-col'>
                            <QSTypography.Text className='progression-rules'>Ví dụ: 201 - 2001</QSTypography.Text>
                        </Col>
                    </Row>
                </QSCard>
                <QSCard qscardtype='default' className='qs-card-details'>
                    <ProgressionActionsLite className='progression-actions-bar' />
                    <Row>
                        <Col xs={24}>
                            <TableBody type='Progression[]' data={progressions} isLite={true} />
                        </Col>
                    </Row>
                </QSCard>
            </Space>
            <QsAsideActions actions={
                [
                    {icon: EditSquareIcon, onClick: handleUpdateServiceClick, children: <><span>Cập nhật</span><br/><span>danh sách</span></> ,className:'qs-aside-btn-fixed-card'},
                    {icon: ReturnSquareIcon, onClick: handleReturnServiceClick, children: <><span>Quay lại</span></> ,className:'qs-aside-btn-fixed-card'},
                ]
            } />
        </ContentSpace>
    );
}