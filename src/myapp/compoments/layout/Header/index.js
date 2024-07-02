import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import Options from "../Options"
import Links from "../Links"
import Search from "../Search"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"


const Header = () => {

    const user = useSelector(state => state?.auth?.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    return (
        <div className="w-full bg-white border-b border-[#aaa] px-4 py-2 flex items-center justify-between">
            <div className="flex items-center relative gap-3 w-1/4">
                <Link to={'/'} className="font-bold text-black">
                    <div className="h-11 w-11">
                        <img src="https://tse1.mm.bing.net/th?id=OIP.XFQn26nBqYC4w7TQEV3aKwHaHa&pid=Api&P=0&h=180" alt="logo" />
                    </div>
                </Link>
                <div className="z-[10]">
                    <Search />
                </div>
            </div>
            <div className="w-11 h-11 text-xl absolute xl:hidden top-1/2 left-[130px] translate-y-[-50%] grid place-content-center rounded-xl overflow-hidden cursor-pointer hover:bg-gray-200">
                <div className="">
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
            <div className="relative w-1/2  hidden md:flex h-11">
                <div className="w-full max-w-[800px] m-auto ">
                    <div className="w-[80%] m-auto">
                        <Links />
                    </div>
                </div>
            </div>
            <div className="w-1/4 flex justify-end">
                <Options user={user} />
            </div>
        </div>
    )
}

export default Header