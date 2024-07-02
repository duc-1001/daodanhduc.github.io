import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import PostLayout from "../../compoments/layout/PostLayout"
import CreatePost from "../../compoments/layout/CreatePost"
import { fetchGetPost, pushPosts } from "../../redux/postSlice"
import { getAllPost } from "../../service/post"

const Home = (props) => {
    const user = useSelector(state => state?.auth?.user)
    const posts = useSelector(state => state?.posts?.data)
    const homeRef = useRef(null)
    const [page, setPage] = useState(1);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleGetPost = () => {
        dispatch(fetchGetPost({ user, id: 'All',page, dispatch }))
    }
    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
        else {
            handleGetPost()
        }
    }, [user])

    const getPost =async (user,id,page,dispatch)=>{
        try {
            const res = await getAllPost(user,id,page,dispatch)
            return res.data
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (homeRef) {
            let page=2
            let loading = false
            let isEndData = false
            const handleScroll = async (e) => {
                if (loading || isEndData) {
                    return
                }
                let isEndl = e.target.scrollTop + e.target.offsetHeight >= homeRef.current.offsetHeight
                if (isEndl) {
                    const data = await getPost(user,'All',page,dispatch)
                    if(!data.length){
                        isEndData = true
                    }
                    else{
                        page++
                        dispatch(pushPosts(data))
                    }
                }
            }
            homeRef.current?.parentNode?.parentNode?.parentNode?.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }

    }, [homeRef]);

    return (
        <div ref={homeRef} className="bg-[#f0f2f5] min-h-[1000px] w-full pb-16 px-3">
            <div className="w-full max-w-[680px] py-4 m-auto">
                <div className="w-full mb-4">
                    <CreatePost handleGetPost={handleGetPost} />
                </div>
                <div className="w-full grid gap-4">
                    {
                        !!posts &&
                        posts.map((e) => (
                            <PostLayout key={e?._id} data={e} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home