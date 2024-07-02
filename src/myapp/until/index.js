import { jwtDecode } from 'jwt-decode'; // Sử dụng cú pháp import đặc biệt
import { refreshToken } from '../service/auth';
import request from '../config/axios';
import { update } from '../redux/authSlice';

const handleRefreshToken = async (user) => {
    try {
        const res = await refreshToken(user);
        return res;
    } catch (error) {
        console.log(error);
    }
};



export const createAxios = (user, dispatch) => {
    let axiosJWT = request.create();
    axiosJWT.interceptors.request.use(
        async (config) => {
            let date = new Date();
            const decodedToken = jwtDecode(user?.accessToken);
            if (decodedToken.exp < date.getTime() / 1000) {
                const data = await handleRefreshToken(user);
                if (data) {
                    // user.accessToken = data.accessToken; // Cập nhật accessToken mới cho user
                    // user.refreshToken = data.refreshToken; // Cập nhật accessToken mới cho user
                    config.headers['token'] = 'Bearer ' + data.accessToken; // Thêm token mới vào header
                    dispatch(update(data)); // Gọi hàm next để cập nhật thông tin user trong Redux hoặc Context
                }
            } else {
                config.headers['token'] = 'Bearer ' + user.accessToken; // Thêm token hiện tại vào header
            }
            return config;
        },
        (err) => {
            return Promise.reject(err);
        }
    );

    return axiosJWT;
};


export const converBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
    })
}

export const isUnique = (arr, id) => {
    return !arr.some(item => item?._id === id);
}
