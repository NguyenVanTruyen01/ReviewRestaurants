import {getDataAPI}from "../../utils/fetchData"

export const search = async (key) =>{
    const res = await getDataAPI(`users/search?key=${key}`);
    return res.data
}