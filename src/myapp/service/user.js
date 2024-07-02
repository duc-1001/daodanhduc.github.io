import request from "../config/axios";
import { createAxios } from "../until";

const getUser = (user, id, dispatch) => {
    const axiosJWT = createAxios(user, dispatch);
    return axiosJWT.get(`user?id=${id}`, null, {
        headers: {
            'token': `Bearer ${user?.accessToken}`
        }
    })
}

const updateUser = (user, userName, avatar, background, dispatch) => {
    if (user) {
        const id = user?._id
        const axiosJWT = createAxios(user, dispatch);
        return axiosJWT.post(`user/update`, { id, userName, avatar, background }, {
            headers: {
                'token': `Bearer ${user?.accessToken}`
            }
        })
    }
}

export {
    getUser,
    updateUser,
} 
