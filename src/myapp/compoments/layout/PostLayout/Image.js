import { Link } from "react-router-dom";

const ImagePost = (props) => {

    const { listImage, id } = props

    if (listImage) {
        switch (listImage.length) {
            case 0:
                return null
                break;
            case 1:
                return (
                    <div className="w-full relative grid grid-cols-5 max-h-[580px] gap-[2px] md:max-h-[680px] overflow-hidden grid-rows-6">
                        <div className='col-span-5 row-span-6'>
                            <Link to={`/photo?imageId=${listImage[0]?._id}&id=${id}`}>
                                <img className="w-full h-full object-cover" src={listImage[0]?.src} alt="Image 1" />
                            </Link>
                        </div>
                    </div>
                )
                break;
            case 2:
                return (
                    <div className="w-full relative grid grid-cols-4 max-h-[580px] gap-[2px] md:max-h-[680px] overflow-hidden grid-rows-6">
                        <div className='col-span-2 row-span-6'>
                            <Link to={`/photo?imageId=${listImage[0]?._id}&id=${id}`}>
                                <img className="w-full h-full object-cover" src={listImage[0]?.src} alt="Image 1" />
                            </Link>
                        </div>
                        <div className='col-span-2 row-span-6'>
                            <Link to={`/photo?imageId=${listImage[1]?._id}&id=${id}`}>
                                <img className="w-full h-full object-cover" src={listImage[1]?.src} alt="Image 1" />
                            </Link>
                        </div>
                    </div>
                )
                break;
            case 3:
                return (
                    <div className="w-full relative grid grid-cols-5 max-h-[580px] gap-[2px] md:max-h-[680px] overflow-hidden grid-rows-6">
                        <div className='col-span-3 row-span-6'>
                            <Link to={`/photo?imageId=${listImage[0]?._id}&id=${id}`}>
                                <img className="w-full h-full object-cover" src={listImage[0]?.src} alt="Image 1" />
                            </Link>
                        </div>
                        <div className='col-span-2 row-span-3'>
                            <Link to={`/photo?imageId=${listImage[1]?._id}&id=${id}`}>
                                <img className="w-full h-full object-cover" src={listImage[1]?.src} alt="Image 1" />
                            </Link>
                        </div>
                        <div className='col-span-2 row-span-3'>
                            <Link to={`/photo?imageId=${listImage[2]?._id}&id=${id}`}>
                                <img className="w-full h-full object-cover" src={listImage[2]?.src} alt="Image 1" />
                            </Link>
                        </div>
                    </div>
                )
                break;
            case 4:
                return (
                    <div className="w-full relative grid grid-cols-2 max-h-[580px] gap-[2px] md:max-h-[680px] overflow-hidden grid-rows-6">
                        <div className='row-span-3'>
                            <Link to={`/photo?imageId=${listImage[0]?._id}&id=${id}`}>
                                <img className="w-full h-full object-cover" src={listImage[0]?.src} alt="Image 1" />
                            </Link>
                        </div>
                        <div className='row-span-3'>
                            <Link to={`/photo?imageId=${listImage[1]?._id}&id=${id}`}>
                                <img className="w-full h-full object-cover" src={listImage[1]?.src} alt="Image 1" />
                            </Link>
                        </div>
                        <div className='row-span-3'>
                            <Link to={`/photo?imageId=${listImage[2]?._id}&id=${id}`}>
                                <img className="w-full h-full object-cover" src={listImage[2]?.src} alt="Image 1" />
                            </Link>
                        </div>
                        <div className='row-span-3'>
                            <Link to={`/photo?imageId=${listImage[3]?._id}&id=${id}`}>
                                <img className="w-full h-full object-cover" src={listImage[3]?.src} alt="Image 1" />
                            </Link>
                        </div>
                    </div>
                )
                break;

            default:
                return (
                    <div className="w-full relative grid grid-cols-5 max-h-[580px] gap-[2px] md:max-h-[680px] overflow-hidden grid-rows-6">
                        <div className="col-end-4 col-span-3 row-start-1 row-end-4 bg-black">
                            <Link to={`/photo?imageId=${listImage[0]?._id}&id=${id}`}>
                                <img className="w-full h-full object-cover" src={listImage[0]?.src} alt="Image 1" />
                            </Link>
                        </div>
                        <div className="col-end-4 col-span-3 row-start-4 row-end-7 bg-white">
                            <Link to={`/photo?imageId=${listImage[1]?._id}&id=${id}`}>
                                <img className="w-full h-full object-cover" src={listImage[1]?.src} alt="Image 2" />
                            </Link>
                        </div>
                        <div className="col-span-2 row-span-2 bg-black">
                            <Link to={`/photo?imageId=${listImage[2]?._id}&id=${id}`}>
                                <img className="w-full h-full object-cover" src={listImage[2]?.src} alt="Image 3" />
                            </Link>
                        </div>
                        <div className="col-span-2 row-span-2 bg-black">
                            <Link to={`/photo?imageId=${listImage[3]?._id}&id=${id}`}>
                                <img className="w-full h-full object-cover" src={listImage[3]?.src} alt="Image 4" />
                            </Link>
                        </div>
                        <div className="col-span-2 row-span-2 bg-black">
                            <Link to={`/photo?imageId=${listImage[4]?._id}&id=${id}`}>
                                <img className="w-full h-full object-cover" src={listImage[4]?.src} alt="Image 5" />
                            </Link>
                        </div>
                        {
                            listImage?.length - 5 > 0 &&
                            <Link to={`/photo?imageId=${listImage[4]?._id}&id=${id}`}>
                                <div className="bottom-0 select-none right-0 absolute w-2/5 h-1/3 flex items-center justify-center bg-black bg-opacity-30 text-7xl text-white row-span-2 ">
                                    +{listImage?.length - 5}
                                </div>
                            </Link>
                        }
                    </div>
                )
                break;
        }
    }
    else {
        return null
    }
}

export default ImagePost;
