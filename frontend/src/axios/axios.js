import axios from "axios";

const baseUrl = 'http://127.0.0.1:8000';

const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    headers: {
        Authorization: localStorage.getItem('access_token')
            ? 'Bearer ' + localStorage.getItem('access_token')
            : null,
        'Content-Type': 'application/json',
        accept: 'application/json'
    }
});

axiosInstance.interceptors.response.use((response) => {
        return response;
    },
    async function (error) {
        const originalRequest = error.config;
        if (typeof error.response === 'undefined') {
            console.log('A server/netowork error occurred. ' +
                'Looks like CORS might be the problem. ' +
                'Sorry about this - we will get it fixed shortly.');
            return Promise.reject(error);
        }
        if (error.response.status === 401 && originalRequest.url === baseUrl + 'token/refresh/') {
            window.location.href = '/login';
            return Promise.reject(error)
        }
        // if (error.response.status === 401 && error.response.statusText === 'Unauthorized') {
        //     window.location.replace('/verify/user')
        //     return Promise.reject(error)
        // }
        if (error.response.data.code === 'token_not_valid' && error.response.status === 401 && error.response.statusText === 'Unauthorized') {
            const refreshToken = localStorage.getItem('refresh_token');
            if (refreshToken && refreshToken !== 'undefined' && refreshToken !== null) {
                const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));
                const now = Math.ceil(Date.now() / 1000);
                if (tokenParts.exp > now) {
                    return axiosInstance.post('token/refresh/', {refresh: refreshToken}).then((res) => {
                        console.log(res.data)
                        localStorage.setItem('access_token', res.data.access)
                        localStorage.setItem('refresh_token', res.data.refresh)
                        axiosInstance.defaults.headers['Authorization'] =
                            'JWT ' + res.data.access;
                        originalRequest.headers['Authorization'] =
                            'JWT ' + res.data.access;
                        return axiosInstance(originalRequest);
                    }).catch((err) => {
                        console.log(err)
                    });
                } else {
                    console.log('Refresh token is expired', tokenParts.exp, now);
                    return window.location.href = '/verify/user';
                }
            } else {
                console.log('Refresh token not available');
                localStorage.removeItem('refresh_token')
                localStorage.removeItem('access_token')
                localStorage.removeItem('token')
                return window.location.href = '/verify/user';
            }
        }
    })


export default axiosInstance