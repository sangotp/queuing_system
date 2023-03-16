import { useSelector } from 'react-redux'
import { reducerTypes } from '../../state/reducers';
import { ContentSpace, ContentTitle, TableHeader, TableBody, TableAside } from '../Generals';
import { CreateActionIcon } from '../Generals';
import { useNavigate } from "react-router-dom";

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
            <TableAside actions={
                [
                    {icon: CreateActionIcon, onClick: handleCreateDeviceClick, children: <><span>Thêm</span><br/><span>thiết bị</span></>},
                ]
            } />
        </ContentSpace>
    );
}