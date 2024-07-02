import { useDispatch, useSelector } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faEllipsis, faFaceLaughBeam, faFileCirclePlus, faFileImage, faL, faLocationDot, faPencil, faSortDown, faUserGroup, faUserTag, faVideo } from "@fortawesome/free-solid-svg-icons"
import ModalOverlay from "../PopUp"
import { Link } from "react-router-dom"
import 'tippy.js/dist/tippy.css';
import { useEffect, useRef, useState } from "react"
import FormCreate from "./FormCreate"
import EditImagePost from "./EditImagePost"
import ListImageEdit from "./ListImageEdit"

const CreatePost = (props) => {
    const { handleGetPost } = props

    const dispatch = useDispatch()

    const user = useSelector(state => state?.auth?.user)
    const [content, setContent] = useState()
    const [open, setOpen] = useState(false)
    const [closeImage, setCloseImage] = useState(false)
    const [listImage, setListImage] = useState([])
    const [imageEdit, setImageEdit] = useState(null)
    const [openEdit, setOpenEdit] = useState(false)
    const [openListImageEdit, setOpenListImageEdit] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleCloseImage = () => {
        setCloseImage(false)
        setListImage([])
    }

    const handleOpenImgae = () => {
        setCloseImage(true)
    }

    const handleOpenEdit = (idx) => {
        setOpenEdit(true)
        setImageEdit({
            src: listImage[idx].src,
            idx: idx,
        })
        setOpenListImageEdit(false)
    }

    const handleCloseEdit = () => {
        setOpenEdit(false)
        setImageEdit(null)
    }

    const handleOpenListImageEdit = () => {
        setOpenListImageEdit(open)
    }

    const handleCloseListImageEdit = () => {
        setOpenListImageEdit(false)
    }

    const handleDeleteImage = (idx)=>{
        setListImage(prevList=>{
            let data = [...prevList]
            data.splice(idx,1)
            return data
        })
    }

    const handleImage = async (e) => {
        const files = e.target.files
        Array.from(files).forEach(file => {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;
                const url = {
                    src: base64String
                }
                setListImage(prevList => [...prevList, url]);
            };
            reader.readAsDataURL(file);
        });
    }
    return (
        <>
            <div className="w-full p-3 bg-white rounded shadow">
                <div className="w-full flex items-center gap-4">
                    <Link to={`/profile?id=${user?._id}`}>
                        <div className="w-10 h-10 rounded-full border overflow-hidden">
                            <img src={user?.avatar} />
                        </div>
                    </Link>
                    <div onClick={handleOpen} className="bg-background flex-1 h-10 rounded-full cursor-pointer px-5 text-gray-400 flex items-center">
                        {user?.userName} ơi, bạn đang nghĩ gì thế?
                    </div>
                </div>
                <div className='w-full h-[1px] bg-[#aaa] my-3'></div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3">
                    <div className="flex items-center justify-center gap-3 hover:bg-gray-200 cursor-pointer rounded-lg py-2">
                        <FontAwesomeIcon className="text-xl text-rose-500" icon={faVideo} />
                        <span className=" font-medium text-gray-400">Video trực tiếp</span>
                    </div>
                    <div onClick={() => {
                        handleOpen()
                        handleOpenImgae()
                    }} className="flex items-center justify-center gap-3 hover:bg-gray-200 cursor-pointer rounded-lg py-2">
                        <FontAwesomeIcon className="text-xl text-green-500" icon={faFileImage} />
                        <span className=" font-medium text-gray-400">Ảnh/video</span>
                    </div>
                    <div className="hidden sm:flex items-center justify-center gap-3 hover:bg-gray-200 cursor-pointer rounded-lg py-2">
                        <FontAwesomeIcon className="text-xl text-orange-400" icon={faFaceLaughBeam} />
                        <span className=" font-medium text-gray-400">Cảm xúc/hoạt động</span>
                    </div>
                </div>
            </div>
            {open && <div>
                <ModalOverlay handleClose={handleClose}>
                    {openEdit && !!imageEdit && !openListImageEdit && <EditImagePost handleOpenListImageEdit={handleOpenListImageEdit} setListImage={setListImage} imageEdit={imageEdit} listImage={listImage} handleCloseEdit={handleCloseEdit} />}
                    {openListImageEdit && !openEdit && <ListImageEdit handleCloseEdit={handleCloseEdit} handleDeleteImage={handleDeleteImage} handleImage={handleImage} handleOpenEdit={handleOpenEdit} handleCloseListImageEdit={handleCloseListImageEdit} listImage={listImage} />}
                    {!openEdit && !openListImageEdit && <FormCreate content={content} setContent={setContent} user={user} handleOpenListImageEdit={handleOpenListImageEdit} handleGetPost={handleGetPost} listImage={listImage} setListImage={setListImage} handleClose={handleClose} closeImage={closeImage} handleImage={handleImage} handleCloseImage={handleCloseImage} handleOpenImgae={handleOpenImgae} handleOpenEdit={handleOpenEdit} />}
                </ModalOverlay>
            </div>}
        </>
    )
}

export default CreatePost