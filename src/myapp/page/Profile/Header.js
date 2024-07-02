import { faCamera, faMessage, faPencil, faPlus, faUserPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Links from "./Links"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { converBase64 } from "../../until"
import { fetchUpdateUser } from "../../redux/profileSlice"
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'

const Header = (props) => {

    const { handleShow,id,data } = props

    const user = useSelector(state => state.auth.user)
   
    const loading = useSelector(state => state.profile.loading)
    const dispatch = useDispatch()



    const onChangeBackground = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file)
            dispatch(fetchUpdateUser({ user, background: await converBase64(file), dispatch }))
        }
    }

    const onChangeAvatar = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file)
            dispatch(fetchUpdateUser({ user, avatar: await converBase64(file), dispatch }))
        }
    }


    return (
        <div className="w-full bg-white">
            <div className="w-full relative">
                <div className=" bg-gradient-to-t from-[#aaa] to-[#fff] w-full aspect-[2.7] rounded-b-2xl">
                    {
                        data?.background &&
                        <div className="w-full h-full">
                            <img className="w-full h-full object-cover" src={data?.background} alt="background" />
                        </div>
                    }
                </div>
                {id === user?._id && <label htmlFor="inputBg" className="absolute z-[1] cursor-pointer  right-5 bottom-5 bg-white px-3 py-2 rounded-md text-[17px] ">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <FontAwesomeIcon icon={faCamera} />
                        <div className="font-medium hidden lg:inline">
                            Thêm ảnh bìa
                        </div>
                    </div>
                    <input id="inputBg" hidden type="file" accept="image/*" onChange={onChangeBackground} />
                </label>}
            </div>
            <div className="w-full h-[260px]  lg:h-[150px]">
                <div className="w-full flex flex-col items-center justify-between px-5 lg:flex-row  translate-y-[-30%] lg:left-0 lg:translate-y-[-25%] gap-">
                    <div className="flex items-center gap-3 z-0 flex-col lg:flex-row ">
                        <div className="relative">
                            <div className="w-[168px] cursor-pointer h-[168px] border-[3px] border-white rounded-full overflow-hidden">
                                <img className="w-full h-full object-cover" src={data?.avatar ? data?.avatar : "https://tse1.mm.bing.net/th?id=OIP.GvNakgya1kk5A6CFQM6Z4gHaHZ&pid=Api&rs=1&c=1&qlt=95&w=112&h=112"} alt="avatar" />
                            </div>
                            {id === user?._id && <div className="absolute right-0 translate-x-[-2px] translate-y-[-130%]">
                                <label htmlFor="inputAvatar" className="w-9 h-9 cursor-pointer rounded-full overflow-hidden grid place-content-center bg-gray-200">
                                    <FontAwesomeIcon icon={faCamera} />
                                </label>
                                <input id="inputAvatar" hidden onChange={onChangeAvatar} type="file" accept="image/*" />
                            </div>}
                        </div>
                        <div className="text-center lg:translate-y-5 lg:translate-x-3">
                            <div className="text-3xl font-bold">
                                {data?.userName}
                            </div>
                            <div className="font-medium text-gray-300">
                                370 ban be
                            </div>
                            <div className="flex">
                                <div className="w-8 h-8 border border-white rounded-full overflow-hidden">
                                    <img className="w-full h-full object-cover" src="https://tse1.mm.bing.net/th?id=OIP.GvNakgya1kk5A6CFQM6Z4gHaHZ&pid=Api&rs=1&c=1&qlt=95&w=112&h=112" alt="avatar" />
                                </div>
                                <div className="w-8 h-8 border border-white rounded-full overflow-hidden">
                                    <img className="w-full h-full object-cover" src="https://tse1.mm.bing.net/th?id=OIP.GvNakgya1kk5A6CFQM6Z4gHaHZ&pid=Api&rs=1&c=1&qlt=95&w=112&h=112" alt="avatar" />
                                </div>
                                <div className="w-8 h-8 border border-white rounded-full overflow-hidden">
                                    <img className="w-full h-full object-cover" src="https://tse1.mm.bing.net/th?id=OIP.GvNakgya1kk5A6CFQM6Z4gHaHZ&pid=Api&rs=1&c=1&qlt=95&w=112&h=112" alt="avatar" />
                                </div>
                                <div className="w-8 h-8 border border-white rounded-full overflow-hidden">
                                    <img className="w-full h-full object-cover" src="https://tse1.mm.bing.net/th?id=OIP.GvNakgya1kk5A6CFQM6Z4gHaHZ&pid=Api&rs=1&c=1&qlt=95&w=112&h=112" alt="avatar" />
                                </div>
                                <div className="w-8 h-8 border border-white rounded-full overflow-hidden">
                                    <img className="w-full h-full object-cover" src="https://tse1.mm.bing.net/th?id=OIP.GvNakgya1kk5A6CFQM6Z4gHaHZ&pid=Api&rs=1&c=1&qlt=95&w=112&h=112" alt="avatar" />
                                </div>
                                <div className="w-8 h-8 border border-white rounded-full overflow-hidden">
                                    <img className="w-full h-full object-cover" src="https://tse1.mm.bing.net/th?id=OIP.GvNakgya1kk5A6CFQM6Z4gHaHZ&pid=Api&rs=1&c=1&qlt=95&w=112&h=112" alt="avatar" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {id === user?._id ?
                        <div className="flex items-center gap-3 translate-y-6">
                            <div>
                                <button className="bg-blue-500 text-white font-medium px-3 py-2 rounded">
                                    <FontAwesomeIcon className="mr-2" icon={faPlus} />
                                    Thêm vào tin
                                </button>
                            </div>
                            <div>
                                <button onClick={handleShow} className="bg-gray-300 text-black font-medium px-3 py-2 rounded">
                                    <FontAwesomeIcon className="mr-2" icon={faPencil} />
                                    Chỉnh sửa trang cá nhân
                                </button>
                            </div>
                        </div>
                        :
                        <div className="flex items-center gap-3 translate-y-6">
                            <div>
                                <button className="bg-blue-500 text-white font-medium px-3 py-2 rounded">
                                    <FontAwesomeIcon className="mr-2" icon={faFacebookMessenger} />
                                    Nhắn tin
                                </button>
                            </div>
                            <div>
                                <button onClick={handleShow} className="bg-gray-300 text-black font-medium px-3 py-2 rounded">
                                    <FontAwesomeIcon className="mr-2" icon={faUserPlus} />
                                    Thêm bạn bè
                                </button>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className="w-full px-4">
                <div className="w-full  h-[1px] bg-[#aaa]"></div>
            </div>
            <div className="w-full px-4">
                <Links id={id} />
            </div>

        </div>
    )
}

export default Header