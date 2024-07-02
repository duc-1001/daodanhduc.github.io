import { useEffect } from "react";

const ModalOverlay = (props) => {
    const { children, handleClose } = props
    return (
        <div className="w-full">
            <div className="absolute left-0 top-0 w-[100vw] z-50 h-[100vh] max-h-[100vh]  overflow-y-auto">
                <div className="w-full flex justify-center">
                    {children}
                </div>
                <div onClick={handleClose} className=" sticky left-0 top-0 w-full z-0 h-full  bg-black bg-opacity-75"></div>
            </div>
        </div>
    )
};

export default ModalOverlay