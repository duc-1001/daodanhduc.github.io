import request from "../config/axios";
import { createAxios } from "../until";

const userRegsiter = (userName, email, password) => {
    return request.post('auth/register', { userName, email, password })
}

const loginUser = (email, password) => {
    return request.post('auth/login', { email, password })
}

const logoutUser = (user,dispatch) => {
    const axiosJWT = createAxios(user,dispatch);
    return axiosJWT.post('auth/logout',null, {
        headers: {
            'token': `Bearer ${user?.accessToken}`
        }
    })
}

const refreshToken = (user) => {
    return request.post('auth/refresh',null, {
        headers: {
            'refreshToken': `${user?.refreshToken}`
        }
    })
}


export {
    userRegsiter,
    loginUser,
    refreshToken,
    logoutUser
}