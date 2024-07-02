import { useState } from "react"

const Hover = (props) => {
    const { children, text } = props

    const [show, setShow] = useState(false)

    const handelShow = () => {
        setShow(true)
    }

    const HandleHidden = () => {
        setShow(false)
    }

    return (
        <div className="relative cursor-pointer">
            <div onMouseMove={handelShow} onMouseLeave={HandleHidden}>
                {children}
            </div>
            {
                show && <div className="px-3 py-1 absolute right-1/2 translate-x-[50%] top-[110%]  whitespace-nowrap rounded-full text-white bg-black bg-opacity-50">
                    {text}
                </div>
            }
        </div>
    )
}

export default Hover