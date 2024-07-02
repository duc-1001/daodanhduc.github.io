import { Route, Routes, useAsyncError, useParams, useSearchParams } from "react-router-dom"
import Header from "./Header"
import { profileRoutes } from "../../router"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetUser, fetchUpdateUser } from "../../redux/profileSlice";
import ModalOverlay from "../../compoments/layout/PopUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { converBase64 } from "../../until";


const Profile = () => {
    const user = useSelector(state => state?.auth?.user)
    const dispatch = useDispatch()

    const [showUpdate, setShowUpdate] = useState(false)
    const data = useSelector(state => state.profile.user)
    const [searchParams, setSearchParams] = useSearchParams()
    const id = searchParams.get('id')

    const [avatar, setAvatar] = useState(null)
    const [background, setBackground] = useState(null)

    const handleShow = () => {
        setShowUpdate(true)
    }

    const handleClose = () => {
        setShowUpdate(false)
    }

    const handleAvatar = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = await converBase64(file)
            setAvatar(url)
        }
    }
    const handleBackground = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = await converBase64(file)
            setBackground(url)
        }
    }

    const handelUpdateUser = async (e) => {
        e.preventDefault()
        dispatch(fetchUpdateUser({ user, background: background, avatar: avatar, dispatch }))
        handleClose()
    }

    useEffect(() => {
        setAvatar(data?.avatar)
        setBackground(data?.background)
    }, [data])

    useEffect(() => {
        if (id) {
            dispatch(fetchGetUser({ user, id, dispatch }))
        }
    }, [id])

    if (data) {
        return (
            <div className="w-full">
                <div className="w-full z-[0] bg-background relative">
                    <div className="w-full bg-white">
                        <div className="w-full max-w-[1200px] m-auto">
                            <div className="w-full z-10">
                                <Header handleShow={handleShow} id={id} data={data} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full z-[0] bg-background">
                    <div className="w-full max-w-[1200px] m-auto">
                        <div className="w-full min-h-[1000px]">
                            <Routes>
                                {
                                    profileRoutes.map((e, index) => {
                                        const Page = e.element
                                        const path = e.path
                                        return <Route key={index} path={path} element={<Page id={id} user={user} />} />
                                    })
                                }
                            </Routes>
                        </div>
                    </div>
                </div>
                {
                    showUpdate && <div className="w-full">
                        <ModalOverlay handleClose={handleClose}>
                            <div className="w-full max-w-[680px] py-16 z-10 absolute">
                                <div className="overflow-hidden bg-white rounded-lg">
                                    <div className="w-full relative p-3 border-b border-[#aaa]">
                                        <div className="font-medium text-2xl text-center">
                                            Chỉnh sửa trang cá nhân
                                        </div>
                                        <button onClick={handleClose} className="absolute w-10 h-10 rounded-full text-xl top-1/2 translate-y-[-50%] right-3  bg-gray-200 hover:bg-gray-300 grid place-content-center">
                                            <FontAwesomeIcon icon={faClose} />
                                        </button>
                                    </div>
                                    <form onSubmit={handelUpdateUser} className="p-3 w-full grid gap-7">
                                        <div className="w-full">
                                            <div className="w-full flex items-center justify-between">
                                                <div className="font-medium text-xl">
                                                    Ảnh đại diện
                                                </div>
                                                <div>
                                                    <label className="text-blue-500 cursor-pointer" htmlFor="avatar">Thêm</label>
                                                    <input id="avatar" onChange={handleAvatar} hidden type="file" accept="image/*" />
                                                </div>
                                            </div>
                                            <div className="w-full mt-10">
                                                <div className="w-48 h-48 m-auto overflow-hidden rounded-full border">
                                                    <img src={avatar} alt="avatar" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <div className="w-full flex items-center justify-between">
                                                <div className="font-medium text-xl">
                                                    Ảnh bìa
                                                </div>
                                                <div>
                                                    <label className="text-blue-500 cursor-pointer" htmlFor="background">Thêm</label>
                                                    <input id="background" onChange={handleBackground} hidden type="file" accept="image/*" />
                                                </div>
                                            </div>
                                            <div className="w-full mt-10">
                                                <div className="w-full max-w-[580px] h-48 m-auto overflow-hidden rounded-xl border">
                                                    <img src={background} alt="background" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full mt-14">
                                            <button type="submit" className="w-full bg-blue-100 hover:bg-blue-200 text-blue-500 py-2 rounded font-medium">Chỉnh sửa thông tin giới thiệu</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </ModalOverlay>
                    </div>
                }
            </div>
        )
    }
    else {
        return <div>
            lllllllll
        </div>
    }
}

export default Profile