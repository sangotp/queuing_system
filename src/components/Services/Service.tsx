import { useSelector } from "react-redux";
import { reducerTypes } from "../../state/reducers";
import { ContentSpace, ContentTitle, TableHeader, TableBody } from '../Generals';

export const Service = () => {
    const services = useSelector((state: reducerTypes) => state.services)

    return (
        <ContentSpace>
            <ContentTitle title='Quản lý dịch vụ' />
            <TableHeader />
            <TableBody type='Service[]' data={services} />
            {/* <div>
                <h1>Quản lý dịch vụ</h1>
                <table style={{ width: '100%', border: '1px solid black' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid black' }}>Mã dịch vụ</th>
                            <th style={{ border: '1px solid black' }}>Tên dịch vụ</th>
                            <th style={{ border: '1px solid black' }}>Mô tả</th>
                            <th style={{ border: '1px solid black' }}>Trạng thái hoạt động</th>
                            <th style={{ border: '1px solid black' }}></th>
                            <th style={{ border: '1px solid black' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service) => {
                            return (
                                <tr key={service.id}>
                                    <td style={{ border: '1px solid black' }}>{service.id}</td>
                                    <td style={{ border: '1px solid black' }}>{service.name}</td>
                                    <td style={{ border: '1px solid black' }}>{service.desc}</td>
                                    <td style={{ border: '1px solid black' }}>{<ServiceActivityStatus status={service.activity_status!}/>}</td>
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
            </div> */}
        </ContentSpace>
    );
}