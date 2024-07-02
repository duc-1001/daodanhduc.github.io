import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useRef, useEffect } from "react"

const Search = (props) => {
    const { children } = props
    const [show, setShow] = useState(false)
    const inputRef = useRef(null)
    const containerRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setShow(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [containerRef])

    useEffect(() => {
        if (show) {
            inputRef.current.focus()
        }
    }, [show])

    return (
        <div ref={containerRef} className="relative">
            <div className={`flex items-center border relative bg-gray-100 border-[#aaa] h-10 ${show ? 'w-[250px]' : 'xl:w-[250px] w-10'} rounded-full overflow-hidden transition-all`}>
                <input
                    ref={inputRef}
                    autoFocus={show}
                    onFocus={() => setShow(true)}
                    placeholder="Tìm kiếm ..."
                    className={`bg-transparent ml-[40px]`}
                />
                <div
                    className="w-10 h-10 cursor-pointer flex items-center bg-gray-100 justify-center absolute top-0 left-0"
                    onClick={() => setShow(true)}
                >
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>
        </div>
    )
}

export default Search
