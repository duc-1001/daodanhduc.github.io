import { useDispatch } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faEllipsis, faFaceLaughBeam, faFileCirclePlus, faFileImage, faLocationDot, faPencil, faSortDown, faUserGroup, faUserTag, faVideo } from "@fortawesome/free-solid-svg-icons"
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useEffect, useRef, useState } from "react"
import ImagePost from "../PostLayout/Image"
import { createNewPost } from "../../../service/post"

const FormCreate = (props) => {
    const {
        user,
        content,
        setContent,
        handleGetPost,
        listImage,
        setListImage,
        handleClose,
        closeImage,
        handleImage,
        handleCloseImage,
        handleOpenImgae,
        handleOpenEdit,
        handleOpenListImageEdit,
    } = props
    const textareaRef = useRef()
    const dispatch = useDispatch()

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    }, []);

    const handleInput = (e) => {
        const textarea = textareaRef.current;
        if (textarea) {
            setContent(e.target.value)
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };

    const handleCreateNewPost = async () => {
        try {
            if (!content && listImage.length === 0) {
                return
            }
            const res = await createNewPost(user, content, listImage, dispatch)
            handleGetPost()
            setContent('')
            setListImage([])
            handleClose()
        } catch (error) {
            console.log(error);
        }
    }

    console.log(listImage.length);

    return (
        <div className="w-full absolute z-10 max-w-[520px] py-16 top-1/2 translate-y-[-50%]">
            <div className="w-full bg-white  overflow-hidden rounded-lg">
                <div className="w-full relative p-3 border-b border-[#aaa]">
                    <div className="font-medium text-2xl text-center">
                        Tạo bài viết
                    </div>
                    <button onClick={handleClose} className="absolute w-10 h-10 rounded-full text-xl top-1/2 translate-y-[-50%] right-3  bg-gray-200 hover:bg-gray-300 grid place-content-center">
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </div>
                <div className="w-full">
                    <div className="w-full flex p-4 items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden border border-[#aaa]">
                            <img src={user?.avatar} alt="avatar" />
                        </div>
                        <div className="font-medium cursor-pointer">
                            {user?.userName}
                            <div className="flex items-center gap-1 bg-gray-300 rounded w-[80px] py-[2px] justify-center">
                                <FontAwesomeIcon className="w-3 h-3" icon={faUserGroup} />
                                <span className="text-[12px]">Bạn bè</span>
                                <FontAwesomeIcon className="w-3 h-3 translate-y-[-3px]" icon={faSortDown} />
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-h-[500px] overflow-y-auto px-4">
                        <div className="min-h-[200px] w-full whitespace-nowrap max-w-full">
                            <div className="w-full mb-3">
                                <textarea value={content} spellCheck='false' ref={textareaRef} onInput={handleInput} placeholder={`${user?.userName} ơi, bạn đang nghĩ gì thế?`} rows={1} className="w-full text-lg  resize-none outline-none whitespace-pre-line" />
                            </div>
                            {
                                closeImage &&
                                <div className="w-full relative">
                                    {
                                        listImage?.length > 0 ?
                                            <div className="w-full group z-10">
                                                <ImagePost listImage={listImage} />
                                                <div className="absolute left-4 top-4 flex gap-3 group-hover:visible invisible">
                                                    {listImage.length > 1 ?
                                                        <div onClick={handleOpenListImageEdit} className="flex items-center gap-2 cursor-pointer bg-white rounded p-2">
                                                            <FontAwesomeIcon icon={faPencil} />
                                                            <div>Chỉnh sửa tất cả</div>
                                                        </div> :
                                                        <div onClick={()=>{handleOpenEdit(0)}} className="flex items-center gap-2 cursor-pointer bg-white rounded p-2">
                                                            <FontAwesomeIcon icon={faPencil} />
                                                            <div>Chỉnh sửa</div>
                                                        </div>
                                                    }
                                                    <label htmlFor="pushImgae">
                                                        <div className="flex items-center gap-2 cursor-pointer bg-white rounded p-2">
                                                            <FontAwesomeIcon icon={faFileCirclePlus} />
                                                            <div>Thêm ảnh/video</div>
                                                        </div>
                                                    </label>
                                                    <input type="file" hidden onChange={handleImage} id="pushImgae" accept="image/*" multiple />
                                                </div>
                                            </div> :
                                            <div className="w-full">
                                                <label htmlFor="image">
                                                    <div className="w-full relative cursor-pointer border rounded p-2">
                                                        <div className="w-full h-[220px] grid place-content-center bg-gray-100 hover:bg-gray-200 rounded">
                                                            <div className="flex flex-col items-center gap-2">
                                                                <div className="w-10 h-10 grid place-content-center bg-gray-300 rounded-full">
                                                                    <FontAwesomeIcon icon={faFileCirclePlus} />
                                                                </div>
                                                                <div className="font-medium text-lg">
                                                                    Thêm ảnh/Video
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </label>
                                                <input id="image" onChange={handleImage} type="file" hidden accept="image/*" multiple />
                                            </div>
                                    }
                                    <div onClick={handleCloseImage} className="absolute cursor-pointer w-8 h-8 rounded-full bg-white grid place-content-center border border-[#aaa] top-4 right-4">
                                        <FontAwesomeIcon icon={faClose} />
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="w-full px-4 mt-3">
                        <div className="p-2 border border-[#aaa] rounded-md ">
                            <div className="w-full flex items-center justify-between">
                                <div className="font-medium text-[14px] mr-10">Thêm vào bài viết của bạn</div>
                                <div className="flex items-center sm:justify-between justify-end flex-1 max-w-[300px] gap-3">
                                    <Tippy content='Ảnh'>
                                        <div onClick={handleOpenImgae} className="w-9 h-9 rounded-full hover:bg-gray-200 grid place-content-center cursor-pointer">
                                            <FontAwesomeIcon className="text-xl text-green-500" icon={faFileImage} />
                                        </div>
                                    </Tippy>
                                    <Tippy content='Gắn thẻ người khác'>
                                        <div className="w-9 h-9 rounded-full hover:bg-gray-200 grid place-content-center cursor-pointer">
                                            <FontAwesomeIcon className="text-xl text-blue-500" icon={faUserTag} />
                                        </div>
                                    </Tippy>
                                    <Tippy content='Cảm xúc/hoạt động'>
                                        <div className="w-9 h-9 rounded-full hover:bg-gray-200 grid place-content-center cursor-pointer">
                                            <FontAwesomeIcon className="text-xl text-orange-400" icon={faFaceLaughBeam} />
                                        </div>
                                    </Tippy>
                                    <Tippy content='Check in'>
                                        <div className="w-9 h-9 rounded-full hover:bg-gray-200 grid place-content-center cursor-pointer">
                                            <FontAwesomeIcon className="text-xl text-red-500" icon={faLocationDot} />
                                        </div>
                                    </Tippy>
                                    <Tippy content='Xem thêm'>
                                        <div className="w-9 h-9 rounded-full hover:bg-gray-200 grid place-content-center cursor-pointer">
                                            <FontAwesomeIcon className="text-xl " icon={faEllipsis} />
                                        </div>
                                    </Tippy>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 mb-3">
                        <button onClick={handleCreateNewPost} className={`w-full py-2 rounded mt-3 font-medium ${content || listImage.length > 0 ? 'bg-blue-500 cursor-pointer text-white' : 'bg-gray-300 cursor-not-allowed'}`}>Đăng</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormCreate