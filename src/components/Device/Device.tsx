import { useSelector } from 'react-redux'
import { reducerTypes } from '../../state/reducers';
import { DeviceActivityStatus } from './Status/DeviceActivityStatus';
import { DeviceConnectionStatus } from './Status/DeviceConnectionStatus';
import { Link } from 'react-router-dom';

export const Device = () => {
    const devices = useSelector((state:reducerTypes) => state.devices)
    

    return (
        <div>
            <h1>Danh sách thiết bị</h1>
            <table style={{ width: '100%', border: '1px solid black' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black' }}>Mã thiết bị</th>
                        <th style={{ border: '1px solid black' }}>Tên thiết bị</th>
                        <th style={{ border: '1px solid black' }}>Địa chỉ IP</th>
                        <th style={{ border: '1px solid black' }}>Trạng thái hoạt động</th>
                        <th style={{ border: '1px solid black' }}>Trạng thái kết nối</th>
                        <th style={{ border: '1px solid black' }}>Dịch vụ sử dụng</th>
                        <th style={{ border: '1px solid black' }}></th>
                        <th style={{ border: '1px solid black' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {devices.map((device) => {
                        return (
                            <tr key={device.id}>
                                <td style={{ border: '1px solid black' }}>{device.name}</td>
                                <td style={{ border: '1px solid black' }}>{device.type}</td>
                                <td style={{ border: '1px solid black' }}>{device.ip}</td>
                                <td style={{ border: '1px solid black' }}>
                                    {<DeviceActivityStatus status={device.activity_status} />}
                                </td>
                                <td style={{ border: '1px solid black' }}>{<DeviceConnectionStatus status={device.connection_status} />}</td>
                                <td style={{ border: '1px solid black' }}>
                                    {device?.customServices!.map((customService, index) => {
                                        if(index < device.customServices?.length! -1)
                                        {
                                            return `${customService.name}, `
                                        }
                                        return customService.name
                                    })}
                                </td>
                                <td style={{ border: '1px solid black' }}>
                                    <Link to='#'>Chi tiết</Link>
                                </td>
                                <td style={{ border: '1px solid black' }}>
                                    <Link to='#'>Cập nhật</Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}