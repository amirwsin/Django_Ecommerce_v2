import axiosInstance from "../axios/axios";


export const UpdateUserApi = (data) => {
    return axiosInstance.put(`/api/user/update/${data.id}/`, {
        email: data.email,
        first_name: data.first_name,
        last_name: data.last_name
    }).then((res) => {
        return res.data
    }).catch((err) => {
        console.log(err)
    })
}