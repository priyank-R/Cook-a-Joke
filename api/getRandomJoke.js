import {apiClient,baseURL} from './source'

// export const getRandomJoke = async ()=>{
//     const response = await apiClient.get("/random_joke")
//     return response
// }

export const getTenRandomJokes = async ()=>{
    const response = await apiClient.get("/random_ten")
    return response
}