import { useSelector } from "react-redux";
import { reducerTypes } from "../../state/reducers";
import { DateAndTimeFormatter } from "../../utils/FormatDate";
import { ProgressionStatus } from "./Status/ProgressionStatus";
import { Link } from "react-router-dom";

export const Progression = () => {
    const progressions = useSelector((state:reducerTypes) => state.progressions)

    return (
        <div>
            <h1>Quản lý cấp số</h1>
            <table style={{ width: '100%', border: '1px solid black' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black' }}>STT</th>
                        <th style={{ border: '1px solid black' }}>Tên khách hàng</th>
                        <th style={{ border: '1px solid black' }}>Tên dịch vụ</th>
                        <th style={{ border: '1px solid black' }}>Thời gian cấp</th>
                        <th style={{ border: '1px solid black' }}>Hạn sử dụng</th>
                        <th style={{ border: '1px solid black' }}>Trạng thái</th>
                        <th style={{ border: '1px solid black' }}>Nguồn cấp</th>
                        <th style={{ border: '1px solid black' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {progressions.map((progression) => {
                        // console.log(exp_time)
                        return (
                            <tr key={progression.id}>
                                <td style={{ border: '1px solid black' }}>{progression.id}</td>
                                <td style={{ border: '1px solid black' }}>{progression.customer_name}</td>
                                <td style={{ border: '1px solid black' }}>{progression.custom_Service!.name}</td>
                                <td style={{ border: '1px solid black' }}>{DateAndTimeFormatter('-', 'time', progression.grant_time!)}</td>
                                <td style={{ border: '1px solid black' }}>{DateAndTimeFormatter('-', 'time', progression.expire_time!)}</td>
                                <td style={{ border: '1px solid black' }}>{<ProgressionStatus status={progression.status} />}</td>
                                <td style={{ border: '1px solid black' }}>{progression.custom_Device?.type}</td>
                                <td style={{ border: '1px solid black' }}>
                                    <Link to='#'>Chi tiết</Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}