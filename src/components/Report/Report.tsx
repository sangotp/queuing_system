import { useSelector } from "react-redux";
import { reducerTypes } from "../../state/reducers";
import { ContentSpace, TableHeader, TableBody } from '../Generals';

export const Report = () => {
    const reports = useSelector((state: reducerTypes) => state.reports)
    
    return (
        <ContentSpace>
            <TableHeader />
            <TableBody type='Report[]' data={reports} />
            {/* <div>
                <h1>Báo cáo</h1>
                <table style={{ width: '100%', border: '1px solid black' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid black' }}>Số thứ tự</th>
                            <th style={{ border: '1px solid black' }}>Tên dịch vụ</th>
                            <th style={{ border: '1px solid black' }}>Thời gian cấp</th>
                            <th style={{ border: '1px solid black' }}>Tình trạng</th>
                            <th style={{ border: '1px solid black' }}>Nguồn cấp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reports.map((report, index) => {
                            return (
                                <tr key={index}>
                                    <td style={{ border: '1px solid black' }}>{report.progression_id}</td>
                                    <td style={{ border: '1px solid black' }}>{report.custom_service?.name}</td>
                                    <td style={{ border: '1px solid black' }}>{DateAndTimeFormatter('-', 'time', report.granted_date!)}</td>
                                    <td style={{ border: '1px solid black' }}>
                                        {<ProgressionStatus status={report.status!} />}
                                    </td>
                                    <td style={{ border: '1px solid black' }}>{report.custom_device?.type}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div> */}
        </ContentSpace>
    );
}