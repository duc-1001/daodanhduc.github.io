import { NavLink } from "react-router-dom"

const Links = (props) => {
    const { id } = props
    return (
        <div className="w-full py-3 px-3">
            <div className="flex gap-4">
                <NavLink to={`/profile?id=${id}`} className={(e) => (
                    `max-w-[120px] px-2 font-medium text-gray-400  border-b-[2px] py-2 rounded ${e.isActive ? "text-blue-600 border-blue-600" : 'hover:bg-gray-200 border-transparent'} `
                )}>
                    Bài viết
                </NavLink>
                <NavLink to={`/profile/giothieu?id=${id}`} className={(e) => (
                    `max-w-[120px] px-2 font-medium text-gray-400  border-b-[2px] py-2 rounded ${e.isActive ? "text-blue-600 border-blue-600" : 'hover:bg-gray-200 border-transparent'} `
                )}>
                    Giới thiệu
                </NavLink>
                <NavLink to={`/profile/friend?id=${id}`} className={(e) => (
                    `max-w-[120px] px-2 font-medium text-gray-400  border-b-[2px] py-2 rounded ${e.isActive ? "text-blue-600 border-blue-600" : 'hover:bg-gray-200 border-transparent'} `
                )}>
                    Bạn bè
                </NavLink>
                <NavLink to={`/profile/image?id=${id}`} className={(e) => (
                    `max-w-[120px] px-2 font-medium text-gray-400  border-b-[2px] py-2 rounded ${e.isActive ? "text-blue-600 border-blue-600" : 'hover:bg-gray-200 border-transparent'} `
                )}>
                    Ảnh
                </NavLink>
                {/* <NavLink to={`/profile/video?id=${id}`} className={(e) => (
                    `max-w-[120px] px-2 font-medium text-gray-400  border-b-[2px] py-2 rounded ${e.isActive ? "text-blue-600 border-blue-600" : 'hover:bg-gray-200 border-transparent'} `
                )}>
                    Video
                </NavLink> */}
                <NavLink to={`/profile/checkin?id=${id}`} className={(e) => (
                    `max-w-[120px] px-2 font-medium text-gray-400  border-b-[2px] py-2 rounded ${e.isActive ? "text-blue-600 border-blue-600" : 'hover:bg-gray-200 border-transparent'} `
                )}>
                    Check in
                </NavLink>
            </div>
        </div>
    )
}

export default Links