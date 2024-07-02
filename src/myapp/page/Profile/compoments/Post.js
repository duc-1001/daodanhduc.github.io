import { useEffect } from "react"
import CreatePost from "../../../compoments/layout/CreatePost"
import { useDispatch, useSelector } from "react-redux"
import { fetchGetPost } from "../../../redux/postSlice"
import PostLayout from "../../../compoments/layout/PostLayout"

const Post = (props) => {
    const { user, id } = props
    const dispatch = useDispatch()
    const posts = useSelector(state => state?.posts?.data)

    const handleGetPost = () => {
        dispatch(fetchGetPost({ user, id: id, dispatch }))
    }

    useEffect(() => {
        if (id) {
            handleGetPost()
        }
    }, [id])

    return (
        <div className="min-h-[1000px] w-full">
            <div className="w-full flex gap-3 p-3">
                <div className="bg-red-100 hidden md:w-2/5 md:inline-block">
                    Sidebar
                </div>
                <div className="w-full md:w-3/5 grid gap-4">
                    {user?._id === id && <div className="w-full">
                        <CreatePost handleGetPost={handleGetPost} />
                    </div>
                    }
                    <div className="w-full grid gap-4">
                        {
                            posts.length > 0 &&
                            posts.map((e) => (
                                <PostLayout key={e?._id} data={e} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post