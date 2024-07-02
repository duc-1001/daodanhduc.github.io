import { faArrowLeft, faCut, faFileLines, faFont, faLeftLong, faTag, faTurnUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useRef, useState } from "react";
import ImageCropper from "./ImageCropper";

const EditImagePost = (props) => {
    const { handleCloseEdit, listImage, setListImage, imageEdit, handleOpenListImageEdit } = props
    const cropperRef = useRef(null);


    const handleCrop = (croppedUrl, idx) => {
        setListImage((e) => {
            let newData = [...e]
            newData[idx] = { src: croppedUrl }
            return newData
        })

        if (listImage.length > 1) {
            handleOpenListImageEdit()
        }
        handleCloseEdit()
    };

    const cropImage = () => {
        if (cropperRef.current) {
            const croppedCanvas = cropperRef.current.cropper.getCroppedCanvas();
            const croppedBase64 = croppedCanvas.toDataURL('image/png');
            handleCrop(croppedBase64, imageEdit.idx);
        }
    };

    const rotateImage = () => {
        if (cropperRef.current) {
            cropperRef.current.cropper.rotate(90);
        }
    };

    return (
        <div className="w-full absolute z-10 max-w-[800px] py-16 top-1/2 translate-y-[-50%]">
            <div className="w-full bg-white rounded">
                <div className="w-full relative p-3 border-b border-[#aaa]">
                    <div className="font-extrabold text-xl text-center">
                        Chi tiết ảnh
                    </div>
                    <button onClick={handleCloseEdit} className="absolute w-10 h-10 rounded-full text-lg top-1/2 translate-y-[-50%] left-3  bg-gray-200 text-[#aaa] hover:bg-gray-300 grid place-content-center">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                </div>
                <div className="w-full flex gap-3 h-[700px]">
                    <div className="flex flex-col justify-between">
                        <div className="p-2 w-full">
                            <div onClick={rotateImage} className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer">
                                <div className={`w-10 h-10 rounded-full text-lg  bg-gray-200 hover:bg-gray-300 grid place-content-center`}>
                                    <FontAwesomeIcon icon={faTurnUp} />
                                </div>
                                <div className={`text-lg font-medium`}>
                                    Xoay
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer">
                                <div className={`w-10 h-10 rounded-full text-lg  bg-gray-200 hover:bg-gray-300 grid place-content-center`}>
                                    <FontAwesomeIcon icon={faTag} />
                                </div>
                                <div className={`text-lg font-medium`}>
                                    Gắn thẻ ảnh
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer">
                                <div className={`w-10 h-10 rounded-full text-lg  bg-gray-200 hover:bg-gray-300 grid place-content-center`}>
                                    <FontAwesomeIcon icon={faFont} />
                                </div>
                                <div className={`text-lg font-medium`}>
                                    Công cụ chèn văn bản
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer">
                                <div className={`w-10 h-10 rounded-full text-lg  bg-gray-200 hover:bg-gray-300 grid place-content-center`}>
                                    <FontAwesomeIcon icon={faFileLines} />
                                </div>
                                <div className={`text-lg font-medium`}>
                                    Văn bản thay thế
                                </div>
                            </div>
                        </div>
                        <div className="w-full p-2 flex gap-3">
                            <button className={`w-1/2 rounded font-medium py-2 bg-blue-500 text-white `} onClick={cropImage}>Lưu</button>
                            <button onClick={handleCloseEdit} className="w-1/2 rounded font-medium py-2 bg-gray-200">Huỷ</button>
                        </div>
                    </div>
                    <div className="flex-1 bg-black grid place-content-center">
                        <ImageCropper cropperRef={cropperRef} onCrop={handleCrop} src={imageEdit.src} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditImagePost