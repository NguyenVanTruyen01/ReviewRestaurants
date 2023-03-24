import axios from 'axios'
const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL })

export const getDataAPI = async (url, token) => {
    const res = await API.get(`/${url}`, {
        headers: { authorization: `Bearer ${token}` }
    })
    return res;
}

export const postDataAPI = async (url, post, token) => {
    const res = await API.post(`/${url}`, post, {
        headers: { authorization: `Bearer ${token}` }
    })
    return res;
}

export const putDataAPI = async (url, post, token) => {
    const res = await API.put(`/${url}`, post, {
        headers: { authorization: `Bearer ${token}` }
    })
    return res;
}

export const patchDataAPI = async (url, post, token) => {
    const res = await API.patch(`/${url}`, post, {
        headers: { authorization: `Bearer ${token}` }
    })
    return res;
}

export const deleteDataAPI = async (url, data, token) => {
    const res = await API.delete(`/${url}`, {
        data: data,
        headers: { authorization: `Bearer ${token}` }
    })
    return res;
}
