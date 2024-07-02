import { Link } from "react-router-dom";
import ImagePost from "./Image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faEllipsis, faComment, faShare, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { } from '@fortawesome/free-regular-svg-icons'

const PostLayout = (props) => {
    const { data } = props
    return (
        <div className="w-full rounded-md bg-white shadow">
            <div className="w-full p-3">
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link to={`/profile?id=${data?.user?._id}`}>
                            <div className="w-10 h-10 border rounded-full overflow-hidden">
                                <img src={data?.user?.avatar} alt="avatar" />
                            </div>
                        </Link>
                        <div>
                            <Link to={`/profile?id=${data?.user?._id}`}>
                                <div className="font-medium hover:underline">
                                    {data?.user?.userName}
                                </div>
                            </Link>
                            <div className="text-gray-300 text-[11px]">{data?.updatedAt}</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-10 text-lg h-10 rounded-full grid place-content-center cursor-pointer hover:bg-gray-200">
                            <FontAwesomeIcon icon={faEllipsis} />
                        </div>
                        <div className="w-10 text-lg h-10 rounded-full grid place-content-center cursor-pointer hover:bg-gray-200">
                            <FontAwesomeIcon icon={faClose} />
                        </div>
                    </div>
                </div>
                <div className="w-full mt-3 text-sm">
                    <p dangerouslySetInnerHTML={{ __html: data?.content }}></p>
                </div>
            </div>
            <div className="w-full mt-1 border">
                <ImagePost listImage={data?.images} id={data?._id} />
            </div>
            <div className="w-full px-2 mt-1 flex items-center justify-between">
                <div className="flex items-center gap-1">
                    <div className="flex">
                        <div className="w-[18px] cursor-pointer h-[18px]">
                            <img src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.5'/%3E%3Cpath d='M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z' fill='%23fff'/%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 .0005 8) scale(7.99958)'%3E%3Cstop offset='.5618' stop-color='%230866FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230866FF' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5257 10.9237) scale(10.1818)'%3E%3Cstop offset='.3143' stop-color='%2302ADFC'/%3E%3Cstop offset='1' stop-color='%2302ADFC' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3989' y1='2.3999' x2='13.5983' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2302ADFC'/%3E%3Cstop offset='.5' stop-color='%230866FF'/%3E%3Cstop offset='1' stop-color='%232B7EFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E" alt="like" />
                        </div>
                        <div className="w-[18px] cursor-pointer h-[18px]">
                            <img src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cg clip-path='url(%23clip0_15251_63610)'%3E%3Cpath d='M15.9953 7.9996c0 4.418-3.5816 7.9996-7.9996 7.9996S-.004 12.4176-.004 7.9996 3.5776 0 7.9957 0c4.418 0 7.9996 3.5815 7.9996 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M15.9973 7.9992c0 4.4178-3.5811 7.9992-7.9987 7.9992C3.5811 15.9984 0 12.417 0 7.9992S3.5811 0 7.9986 0c4.4176 0 7.9987 3.5814 7.9987 7.9992Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M15.9953 7.9996c0 4.418-3.5816 7.9996-7.9996 7.9996S-.004 12.4176-.004 7.9996 3.5776 0 7.9957 0c4.418 0 7.9996 3.5815 7.9996 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.8'/%3E%3Cpath d='M12.5278 8.1957c.4057.1104.6772.4854.623.9024-.3379 2.6001-2.5167 4.9012-5.1542 4.9012s-4.8163-2.3011-5.1542-4.9012c-.0542-.417.2173-.792.623-.9024.8708-.237 2.5215-.596 4.5312-.596 2.0098 0 3.6605.359 4.5312.596Z' fill='%234B280E'/%3E%3Cpath d='M11.5809 12.3764c-.9328.9843-2.1948 1.6228-3.5841 1.6228-1.3892 0-2.6512-.6383-3.5839-1.6225a1.5425 1.5425 0 0 0-.016-.0174c.4475-1.0137 2.2-1.3599 3.5999-1.3599 1.4 0 3.1514.3468 3.5998 1.3599l-.0157.0171Z' fill='url(%23paint3_linear_15251_63610)'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.3049 5.8793c.1614-1.1485-.6387-2.2103-1.7872-2.3717l-.0979-.0138c-1.1484-.1614-2.2103.6388-2.3717 1.7872l-.0163.1164a.5.5 0 0 0 .9902.1392l.0163-.1164c.0846-.6016.6408-1.0207 1.2424-.9362l.0978.0138c.6016.0845 1.0207.6407.9362 1.2423l-.0164.1164a.5.5 0 0 0 .9903.1392l.0163-.1164ZM2.6902 5.8793c-.1614-1.1485.6387-2.2103 1.7872-2.3717l.0979-.0138c1.1484-.1614 2.2103.6388 2.3717 1.7872l.0164.1164a.5.5 0 1 1-.9903.1392l-.0163-.1164c-.0846-.6016-.6408-1.0207-1.2423-.9362l-.098.0138c-.6015.0845-1.0206.6407-.936 1.2423l.0163.1164a.5.5 0 0 1-.9902.1392l-.0164-.1164Z' fill='%231C1C1D'/%3E%3C/g%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(0 7.9992 -7.99863 0 7.9986 7.9992)'%3E%3Cstop offset='.5637' stop-color='%23FF5758' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FF5758' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5272 10.9202) scale(10.1818)'%3E%3Cstop stop-color='%23FFF287'/%3E%3Cstop offset='1' stop-color='%23FFF287' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.396' y1='2.3999' x2='13.5954' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFF287'/%3E%3Cstop offset='1' stop-color='%23F68628'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint3_linear_15251_63610' x1='5.1979' y1='10.7996' x2='5.245' y2='14.2452' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FF60A4'/%3E%3Cstop offset='.2417' stop-color='%23FA2E3E'/%3E%3Cstop offset='1' stop-color='%23BC0A26'/%3E%3C/linearGradient%3E%3CclipPath id='clip0_15251_63610'%3E%3Cpath fill='%23fff' d='M-.002 0h16v15.9992h-16z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E" alt="like" />
                        </div>
                    </div>
                    <div className="text-gray-500 cursor-pointer text-[15px] hover:underline">
                        18
                    </div>
                </div>
                <div className="text-gray-300 cursor-pointer hover:underline select-none">
                    5 bình luận
                </div>
            </div>
            <div className="w-full mt-1">
                <div className="w-full h-[1px] bg-[#aaa]"></div>
            </div>
            <div className="w-full grid grid-cols-3 gap-3 p-1">
                <div className="flex cursor-pointer items-center hover:bg-gray-100 py-2 rounded-md  justify-center gap-2 text-[#aaa]">
                    <FontAwesomeIcon className="h-5 translate-y-[-2px]" icon={faThumbsUp} />
                    <div className="">Thích</div>
                </div>
                <div className="flex cursor-pointer items-center hover:bg-gray-100 py-2 rounded-md  justify-center gap-2 text-[#aaa]">
                    <FontAwesomeIcon className="h-5 translate-y-[-2px]" icon={faComment} />
                    <div className="">Bình luận</div>
                </div>
                <div className="flex cursor-pointer items-center hover:bg-gray-100 py-2 rounded-md  justify-center gap-2 text-[#aaa]">
                    <FontAwesomeIcon className="h-5 translate-y-[-2px]" icon={faShare} />
                    <div className="">Chia sẻ</div>
                </div>
            </div>
        </div>
    )
}

export default PostLayout