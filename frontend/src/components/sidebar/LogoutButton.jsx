import { BiLogOut } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {
    const { loading, logout } = useLogout();

    const handleLogout = () => {
        if (!loading) {
            logout();
        }
    };

    return (
        <div className='mt-auto'>
            <BiLogOut
                className={`w-6 h-6 text-white cursor-pointer ${loading ? 'opacity-50 pointer-events-none' : ''}`}
                onClick={handleLogout}
            />
            {loading && <span className='loading loading-spinner'></span>}
        </div>
    );
};

export default LogoutButton;
