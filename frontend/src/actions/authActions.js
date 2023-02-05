import {
    LOGIN_PROGRESS, LOGIN_SUCCESS, LOGIN_FAIL
} from '../types/authTypes'
import axiosBasicInstance from "../axios/axiosBasic";
import axiosInstance from "../axios/axios";

const client_id = "fM1JCZa2bQXvdKFNBVdck5SiVwh7dKko7hLWDtKW"
const client_secret = "LkS0U8iilSXGOlEIL8An5DE7Bs6llOTSJwXP8JX8Qd3VY9QiJGAdrz9qgNFvhOdsfkvlw6D71gsFmB7D3HUyvqk0nguU9EF0qgDxeluTupGSHUEoDJGu4P5G8u4XeDyu"

export const loadUser = (token) => async (dispatch) => {
    await axiosInstance.post(`/api/user/login/${token}/`,).then((res) => {
        localStorage.setItem('user', JSON.stringify(res.data))
        dispatch({
            type: LOGIN_SUCCESS,
            payload: JSON.stringify(res.data),
        })
    }).catch((err) => {
        dispatch({
            type: LOGIN_FAIL,
        })
        console.error(err)
    });
}


export const login = (data) => async (dispatch) => {

    dispatch({type: LOGIN_PROGRESS})
    await axiosBasicInstance.post(`/auth/token/`, {
        username: data.username,
        password: data.password,
        grant_type: "password",
        client_id: client_id,
        client_secret: client_secret
    }).then(async (res) => {
        if (res.status === 200) {
            localStorage.setItem('access_token', res.data.access_token)
            localStorage.setItem('refresh_token', res.data.refresh_token)
            loadUser(res.data.access_token)
        }
    }).catch((err) => {
        dispatch({
            type: LOGIN_FAIL,
        })
        console.error(err)
    });
}
