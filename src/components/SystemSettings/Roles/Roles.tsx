import { useSelector } from "react-redux";
import { reducerTypes } from "../../../state/reducers";
import { Link } from "react-router-dom";

export const Roles = () => {
    const roles = useSelector((state:reducerTypes) => state.userRoles)

    return (
        <div>
            <h1>Danh sách vai trò</h1>
            <table style={{ width: '100%', border: '1px solid black' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black' }}>Tên vai trò</th>
                        <th style={{ border: '1px solid black' }}>Số người dùng</th>
                        <th style={{ border: '1px solid black' }}>Mô tả</th>
                        <th style={{ border: '1px solid black' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {roles.map((role, index) => {
                        return (
                            <tr key={index}>
                                <td style={{ border: '1px solid black' }}>{role.name}</td>
                                <td style={{ border: '1px solid black' }}>{role.user_count}</td>
                                <td style={{ border: '1px solid black' }}>{role.desc}</td>
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