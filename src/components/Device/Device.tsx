import { useSelector } from 'react-redux'
import { reducerTypes } from '../../state/reducers';
import { ContentSpace, ContentTitle, TableHeader, TableBody, QsAsideActions } from '../Generals';
import { AddSquareIcon } from '../Generals';
import { useNavigate } from "react-router-dom";
import './styles/Device.css'

export const Device = () => {
    const devices = useSelector((state:reducerTypes) => state.devices)

    const navigate = useNavigate();

    const handleCreateDeviceClick = () => {
        navigate('/device/create')
    }

    return (
        <ContentSpace>
            <ContentTitle title='Danh sách thiết bị' />
            <TableHeader />
            <TableBody type='Device[]' data={devices} />
            <QsAsideActions actions={
                [
                    {icon: AddSquareIcon, onClick: handleCreateDeviceClick, children: <><span>Thêm</span><br/><span>thiết bị</span></> ,className:'qs-aside-btn-fixed-table'},
                ]
            } />
        </ContentSpace>
    );
}