import { UpdatePath } from "../../utils/RUDPath";

export const Profile = () => {
    UpdatePath(['profile'])
    return (
        <div>
            <h1>Thông tin cá nhân</h1>
        </div>
    );
}