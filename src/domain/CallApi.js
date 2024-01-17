import axios from "axios";

export const CallApi = async ({
    endpoint,
    method,
    headers,
    params,
    data,
    baseUrl,
})=> {
    const baseURL = 'https://themealdb.com/api/json/v1/1'
    const option = {
      baseURL,
      url: endpoint,
      method,
      headers,
      params,
      data,
    }
    const response = await axios(option)
    return response?.data
}