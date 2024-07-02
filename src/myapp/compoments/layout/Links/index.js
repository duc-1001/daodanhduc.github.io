import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGamepad, faHome, faStore, faUsersViewfinder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react"
import { Link, NavLink } from "react-router-dom";
import 'tippy.js/dist/tippy.css'; // optional
const Links = () => {
    return (
        <div className="flex items-center justify-center gap-4">
            <NavLink to={'/'} className={(e) => (
                `w-1/4 max-w-[120px]  border-b-[2px] py-3 rounded ${e.isActive ? "text-blue-600 border-blue-600" : 'hover:bg-gray-200 border-transparent'} `
            )}>
                <Tippy content='trang chủ'>
                    <div className="grid place-content-center cursor-pointer">
                        <FontAwesomeIcon className='text-xl' icon={faHome} />
                    </div>
                </Tippy>
            </NavLink>
            <NavLink to={'/video'} className={(e) => (
                `w-1/4 max-w-[120px]  border-b-[2px] py-3 rounded ${e.isActive ? "text-blue-600 border-blue-600" : 'hover:bg-gray-200 border-transparent'} `
            )}>
                <Tippy content='video'>
                    <div className="grid place-content-center cursor-pointer">
                        <FontAwesomeIcon className='text-xl' icon={faYoutube} />
                    </div>
                </Tippy>
            </NavLink>
            <NavLink to={'/marketplace'} className={(e) => (
                `w-1/4 max-w-[120px]  border-b-[2px] py-3 rounded ${e.isActive ? "text-blue-600 border-blue-600" : 'hover:bg-gray-200 border-transparent'} `
            )}>
                <Tippy content='marketplace'>
                    <div className="grid place-content-center cursor-pointer">
                        <FontAwesomeIcon className='text-xl' icon={faStore} />
                    </div>
                </Tippy>
            </NavLink>
            <NavLink to={'/group'} className={(e) => (
                `w-1/4 max-w-[120px]  border-b-[2px] py-3 rounded ${e.isActive ? "text-blue-600 border-blue-600" : 'hover:bg-gray-200 border-transparent'} `
            )}>
                <Tippy content='nhóm'>
                    <div className="grid place-content-center cursor-pointer">
                        <FontAwesomeIcon className='text-xl' icon={faUsersViewfinder} />
                    </div>
                </Tippy>
            </NavLink>
            <NavLink to={'/game'} className={(e) => (
                `w-1/4 max-w-[120px]  border-b-[2px] py-3 rounded ${e.isActive ? "text-blue-600 border-blue-600" : 'hover:bg-gray-200 border-transparent'} `
            )}>
                <Tippy content='trò chơi'>
                    <div className="grid place-content-center cursor-pointer">
                        <FontAwesomeIcon className='text-xl' icon={faGamepad} />
                    </div>
                </Tippy>
            </NavLink>
        </div>
    )
}
export default Links