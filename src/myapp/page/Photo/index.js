import { useDispatch, useSelector } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight, faComment, faDownLeftAndUpRightToCenter, faEllipsis, faMagnifyingGlassMinus, faMagnifyingGlassPlus, faShare, faTag, faThumbsUp, faUpRightAndDownLeftFromCenter, faXmark } from "@fortawesome/free-solid-svg-icons"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Header from "../../compoments/layout/Header"
import { fetchGetPost } from "../../redux/photoSlice"

const Photo = () => {

    const user = useSelector(state => state?.auth?.user)
    const [searchParams, setSearchParams] = useSearchParams()
    const [zoom, setZoom] = useState(null)
    const [scale, setScale] = useState(1)
    const data = useSelector(state => state?.photo?.data)
    const id = searchParams.get('id')
    const imageId = searchParams.get('imageId')
    const [index, setIndex] = useState(null)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleGetPost = async () => {
        dispatch(fetchGetPost({ user, id, dispatch }))
    }

    const tongleZoom = () => {
        setZoom(!zoom)
    }

    const handleScaleUp = () => {
        if (scale < 2) {
            setScale(scale + 0.25)
        }
    }

    const handleScaleDown = () => {
        if (scale > 1) {
            setScale(scale - 0.25)
        }
    }

    const onBack = () => {
        navigate(-1)
    }

    const handleUp = () => {
        if (index < data?.images?.length - 1) {
            setIndex(index + 1)
        }
        else {
            setIndex(0)
        }
    }

    const handleDown = () => {
        if (index > 0) {
            setIndex(index - 1)
        }
        else {
            setIndex(data?.images?.length - 1)
        }
    }

    const link = () => {
        navigate(`/photo?imageId=${data?.images[index]?._id}&id=${id}`)
    }

    useEffect(() => {
        if (id) {
            handleGetPost()
        }
    }, [id])

    useEffect(() => {
        if (data && imageId) {
            data?.images?.map((e, idx) => {
                if (e?._id === imageId) {
                    setIndex(idx)
                }
            })
        }
    }, [data])

    useEffect(() => {
        if (index !== null && data?.images?.length > 0) {
          link();
        }
      }, [index]);

    return (
        <div className="w-full h-full">
            <div className="w-full">
                <div className="w-full">
                    <Header />
                </div>
                <div className="w-full lg:flex">
                    <div className="w-full">
                        <div className={`w-full ${zoom ? 'h-[calc(100vh-61px)]' : 'h-[50vh]'} lg:h-[calc(100vh-61px)] gruop overflow-hidden relative grid place-content-center bg-black`}>
                            <div style={{ scale: `${scale}`, transition: `0.5s` }}>
                                <img className="h-auto max-h-[50vh] select-none" src={data?.images[index]?.src} />
                            </div>
                            <div className="absolute flex gap-3 top-4 z-[1] right-2">
                                <div onClick={handleScaleUp}>
                                    <div className="w-10 bg-black text-white bg-opacity-35 grid place-content-center cursor-pointer h-10 rounded-full overflow-hidden ">
                                        <FontAwesomeIcon className='text-lg' icon={faMagnifyingGlassPlus} />
                                    </div>
                                </div>
                                <div onClick={handleScaleDown}>
                                    <div className="w-10 bg-black text-white bg-opacity-35 grid place-content-center cursor-pointer h-10 rounded-full overflow-hidden ">
                                        <FontAwesomeIcon className='text-lg' icon={faMagnifyingGlassMinus} />
                                    </div>
                                </div>
                                <div>
                                    <div className="w-10 bg-black text-white bg-opacity-35 grid place-content-center cursor-pointer h-10 rounded-full overflow-hidden ">
                                        <FontAwesomeIcon className='text-lg' icon={faTag} />
                                    </div>
                                </div>
                                <div onClick={tongleZoom}>
                                    <div className="w-10 bg-black text-white bg-opacity-35 grid place-content-center cursor-pointer h-10 rounded-full overflow-hidden ">
                                        <FontAwesomeIcon className='' icon={zoom ? faDownLeftAndUpRightToCenter : faUpRightAndDownLeftFromCenter} />
                                    </div>
                                </div>
                            </div>
                            {/* <div onClick={onBack} className="z-20 absolute top-4 left-3">
                                <div className="w-10 text-xl bg-gray-200 text-white bg-opacity-35 grid place-content-center cursor-pointer h-10 rounded-full overflow-hidden ">
                                    <FontAwesomeIcon icon={faXmark} />
                                </div>
                            </div> */}
                            {
                                data?.images?.length > 1 &&
                                <>
                                    <div onClick={() => {
                                        handleDown()
                                        link()
                                    }} className="absolute overflow-hidden h-full  text-4xl hover:bg-opacity-10 text-white cursor-pointer grid place-content-center left-0 top-0 w-20 hover:w-16 transition-all bg-white bg-opacity-5">
                                        <FontAwesomeIcon icon={faAngleLeft} />
                                    </div>
                                    <div onClick={() => {
                                        handleUp()
                                        link()
                                    }} className="absolute overflow-hidden h-full  text-4xl hover:bg-opacity-10 text-white cursor-pointer grid place-content-center right-0 top-0 w-20 hover:w-16 transition-all bg-white bg-opacity-5">
                                        <FontAwesomeIcon icon={faAngleRight} />
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                    {
                        !zoom && <div className="w-full lg:max-w-[400px] max-h-[48vh] lg:max-h-[calc(100vh-61px)] overflow-y-auto ">
                            <div className="w-full p-3 min-h-[1000px] ">
                                <div className="w-full">
                                    <div className="flex items-center justify-between py-3">
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
                                        <div className="w-10 hover:bg-slate-100 grid place-content-center cursor-pointer h-10 rounded-full overflow-hidden ">
                                            <FontAwesomeIcon className='text-lg' icon={faEllipsis} />
                                        </div>
                                    </div>
                                    <div className="mb-10">
                                        <p dangerouslySetInnerHTML={{ __html: data?.content }}></p>
                                    </div>
                                </div>
                                <div className="border-y py-1 gap-3 grid grid-cols-3">
                                    <div className="flex items-center cursor-pointer hover:bg-gray-100 py-2 rounded-md  justify-center gap-2 text-[#aaa]">
                                        <FontAwesomeIcon className="h-5 translate-y-[-2px]" icon={faThumbsUp} />
                                    </div>
                                    <div className="flex items-center cursor-pointer hover:bg-gray-100 py-2 rounded-md  justify-center gap-2 text-[#aaa]">
                                        <FontAwesomeIcon className="h-5 translate-y-[-2px]" icon={faComment} />
                                    </div>
                                    <div className="flex items-center cursor-pointer hover:bg-gray-100 py-2 rounded-md  justify-center gap-2 text-[#aaa]">
                                        <FontAwesomeIcon className="h-5 translate-y-[-2px]" icon={faShare} />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sticky bottom-0 left-0 bg-red-200 h-[150px]">

                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Photo