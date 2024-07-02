import Tippy from '@tippyjs/react/headless'
import Wrapper from '../layout/Wrapper'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { persistor } from '../../redux/store'
import { logoutUser } from '../../service/auth'
import { logout } from '../../redux/authSlice'

const OptionUsers = (props) => {
    const { children, user } = props

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = async () => {
        await persistor.purge()
        const res = await logoutUser(user, dispatch)
        dispatch(logout())
        navigate('/login')
    }

    return (
        <Tippy
            interactive
            trigger='click'
            render={attrs => (
                <div className='w-[350px]' {...attrs}>
                    <Wrapper>
                        <div className='w-full'>
                            <div className='w-full shadow-[0_0_10px_#aaa] p-1 rounded'>
                                <Link to={`/profile?id=${user?._id}`}>
                                    <div className='p-2 flex items-center gap-3 hover:bg-gray-100 w-full cursor-pointer rounded-md'>
                                        <div className='w-10 h-10 rounded-full border overflow-hidden'>
                                            <img src={user?.avatar || 'https://scontent.fhan15-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFegdnIiTBy_iHaOYAyMG3fso2H55p0AlGyjYfnmnQCUXGW632xIxfRas3ql34UfSj9Ir5d-cKfZ1Xa-eCs5fMu&_nc_ohc=ajY79JSPPYMQ7kNvgEEAW5Q&_nc_ht=scontent.fhan15-2.fna&oh=00_AYBU6jSWXsttUctXK6Vht-rq1DWrcnza-OSj2n1e-7JJbQ&oe=66A0A578'} alt='avatar' />
                                        </div>
                                        <div className='font-medium'>
                                            {user?.userName}
                                        </div>
                                    </div>
                                </Link>
                                <div className='px-2 py-1'>
                                    <div className='w-full h-[1px] bg-gray-400'></div>
                                </div>
                                <div className='w-full'>
                                    <Link to={`/profile?id=${user?._id}`}>
                                        <div className='px-2 py-1 text-[15px] flex items-center gap-3 text-blue-600 font-medium hover:bg-gray-100 w-full cursor-pointer rounded-md'>
                                            Xem tất cả trang cá nhân
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='w-full grid gap-2 mt-3'>
                            <div onClick={handleLogout} className='w-full p-2 flex gap-3 items-center hover:bg-gray-100 cursor-pointer rounded-lg'>
                                <div className='w-10 h-10 rounded-full bg-gray-300 grid place-content-center '>
                                    <FontAwesomeIcon icon={faRightFromBracket} />
                                </div>
                                <div className='font-medium'>
                                    Đăng xuất
                                </div>
                            </div>
                        </div>
                    </Wrapper>
                </div>
            )}
        >
            <div>
                {children}
            </div>
        </Tippy>
    )
}

export default OptionUsers