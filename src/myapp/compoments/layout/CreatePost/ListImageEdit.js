import { faArrowLeft, faFileCirclePlus, faImage, faPencil, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ListImageEdit = (props) => {
    const { handleCloseListImageEdit, handleDeleteImage, handleCloseEdit, listImage, handleOpenEdit, handleImage } = props
    return (
        <div className="w-full absolute z-10 max-w-[900px] py-16 top-1/2 translate-y-[-50%]">
            <div className="w-full bg-white rounded overflow-hidden">
                <div className="w-full relative p-3 border-b border-[#aaa]">
                    <div className="font-extrabold text-xl text-center">
                        Ảnh/Video
                    </div>
                    <button onClick={handleCloseListImageEdit} className="absolute w-10 h-10 rounded-full text-lg top-1/2 translate-y-[-50%] left-3  bg-gray-200 text-[#aaa] hover:bg-gray-300 grid place-content-center">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 bg-gray-300 gap-2 max-h-[80vh] overflow-y-auto py-6 px-2">
                    {
                        listImage.length > 0 ?
                            listImage.map((e, idx) => (
                                <div key={e.src} className="rounded-lg group relative h-[300px] overflow-hidden">
                                    <div className="w-full relative">
                                        <div >
                                            <img className="w-full h-[300px] blur" src={e.src} alt="image" />
                                        </div>
                                        <div className="absolute w-full z-10 top-0 left-1/2 translate-x-[-50%] ">
                                            <img className="h-[300px] object-contain" src={e.src} alt="image" />
                                        </div>
                                    </div>
                                    <div className="w-full flex items-end group-hover:visible invisible">
                                        <div onClick={() => { handleOpenEdit(idx) }} className="flex items-center absolute z-20 top-2 left-2 gap-2 cursor-pointer bg-white rounded px-2 py-1 hover:bg-gray-200">
                                            <FontAwesomeIcon icon={faPencil} />
                                            <div>Chỉnh sửa</div>
                                        </div>
                                        <div onClick={() => { handleDeleteImage(idx) }} className="w-7 h-7 cursor-pointer z-20 grid bg-white rounded-full place-content-center absolute right-2 top-2">
                                            <FontAwesomeIcon icon={faXmark} />
                                        </div>
                                    </div>
                                </div>
                            ))
                            :
                            <div className="w-full col-span-2 text-center">
                                <div className="">
                                    <FontAwesomeIcon className="h-20 w-20 text-gray-400" icon={faImage} />
                                </div>
                                <div className="mt-7 text-lg text-gray-600">
                                    Thêm ảnh/video để bắt đầu
                                </div>
                            </div>
                    }
                </div>
                <div className="w-full p-3">
                    <div className="w-full flex items-center justify-end gap-4">
                        <div>
                            <label htmlFor="pushImgae">
                                <div className="flex items-center gap-2 cursor-pointer text-blue-500 rounded p-2">
                                    <FontAwesomeIcon icon={faFileCirclePlus} />
                                    <div>Thêm ảnh/video</div>
                                </div>
                            </label>
                            <input type="file" hidden onChange={handleImage} id="pushImgae" accept="image/*" multiple />
                        </div>
                        <div onClick={() => {
                            handleCloseEdit()
                            handleCloseListImageEdit()
                        }}>
                            <button className="bg-blue-500 rounded text-white font-medium w-[120px] py-[5px]">Xong</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListImageEdit