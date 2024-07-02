import request from "../config/axios";
import { createAxios } from '../until/index'

const getAllPost = (user, id, page, dispatch) => {
    const axiosJWT = createAxios(user, dispatch)
    return axiosJWT.get(`post?id=${id}&page=${page}`, null, {
        headers: {
            'token': `Bearer ${user?.accessToken}`
        }
    })
}

const createNewPost = (user, content, listImage, dispatch) => {
    const axiosJWT = createAxios(user, dispatch)
    return axiosJWT.post('post/create', { userId: user?._id, content, images: listImage }, {
        headers: {
            'token': `Bearer ${user?.accessToken}`
        }
    })
}

const getPost = (user, id, dispatch) => {
    const axiosJWT = createAxios(user, dispatch)
    return axiosJWT.get(`post/post?id=${id}`, null, {
        headers: {
            'token': `Bearer ${user?.accessToken}`
        }
    })
}

export {
    getAllPost,
    createNewPost,
    getPost,
}