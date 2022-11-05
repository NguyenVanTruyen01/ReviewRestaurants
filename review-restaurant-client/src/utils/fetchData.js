import axios from 'axios'
const API = axios.create({baseURL: "http://localhost:5000"})

export const getDataAPI = async (url, token) => {
    const res = await API.get(`/${url}`, {
        headers: { Authorization: token}
    })
    return res;
}

export const postDataAPI = async (url, post, token) => {
    const res = await API.post(`/${url}`, post, {
        headers: { Authorization: token}
    })
    return res;
}

export const putDataAPI = async (url, post, token) => {
    const res = await API.put(`/${url}`, post, {
        headers: { Authorization: token}
    })
    return res;
}

export const patchDataAPI = async (url, post, token) => {
    const res = await API.patch(`/${url}`, post, {
        headers: { Authorization: token}
    })
    return res;
}

export const deleteDataAPI = async (url, token) => {
    const res = await API.delete(`/${url}`, {
        headers: { Authorization: token}
    })
    return res;
}