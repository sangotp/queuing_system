import { useSelector } from "react-redux";
import { reducerTypes } from "../../../state/reducers";
import { DateAndTimeFormatter } from "../../../utils/FormatDate";

export const ActivityHistory = () => {
    const userActivityLogs = useSelector((state:reducerTypes) => state.userActivityLogs)

    return (
        <div>
            <h1>Nhật ký hoạt động</h1>
            <table style={{ width: '100%', border: '1px solid black' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black' }}>Tên đăng nhập</th>
                        <th style={{ border: '1px solid black' }}>Thời gian tác động</th>
                        <th style={{ border: '1px solid black' }}>IP thực hiện</th>
                        <th style={{ border: '1px solid black' }}>Thao tác thực hiện</th>
                    </tr>
                </thead>
                <tbody>
                    {userActivityLogs.map((log, index) => {
                        return (
                            <tr key={index}>
                                <td style={{ border: '1px solid black' }}>{log.custom_user?.username}</td>
                                <td style={{ border: '1px solid black' }}>
                                    {DateAndTimeFormatter('', 'date', log.current_activity_time!, 'showFullTime')}
                                </td>
                                <td style={{ border: '1px solid black' }}>{log.ip}</td>
                                <td style={{ border: '1px solid black' }}>{log.action}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}