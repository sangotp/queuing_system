import { useSelector } from "react-redux";
import { reducerTypes } from "../../../state/reducers";
import { AccountActivityStatus } from "./Status/AccountActivityStatus";
import { Link } from "react-router-dom";

export const Accounts = () => {
    const accounts = useSelector((state: reducerTypes) => state.users)

    return (
        <div>
            <h1>Danh sách tài khoản</h1>
            <table style={{ width: '100%', border: '1px solid black' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black' }}>Tên đăng nhập</th>
                        <th style={{ border: '1px solid black' }}>Họ tên</th>
                        <th style={{ border: '1px solid black' }}>Số điện thoại</th>
                        <th style={{ border: '1px solid black' }}>Email</th>
                        <th style={{ border: '1px solid black' }}>Vai trò</th>
                        <th style={{ border: '1px solid black' }}>Trạng thái hoạt động</th>
                        <th style={{ border: '1px solid black' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {accounts.map((account, index) => {
                        return (
                            <tr key={index}>
                                <td style={{ border: '1px solid black' }}>{account.username}</td>
                                <td style={{ border: '1px solid black' }}>{account.fullname}</td>
                                <td style={{ border: '1px solid black' }}>{account.phone_number}</td>
                                <td style={{ border: '1px solid black' }}>{account.email}</td>
                                <td style={{ border: '1px solid black' }}>{account.custom_role?.name}</td>
                                <td style={{ border: '1px solid black' }}>
                                    {<AccountActivityStatus status={account.activity_status} />}
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