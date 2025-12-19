import { configs } from "@/configs";

const { default: axios } = require("axios");

const getToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(configs.localstorageTokenName);
  }
  return null;
};

const getAccessToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem("access_token");
  }
  return null;
};


const createApiInstance = (contentType = "multipart/form-data") => {
  const token = getToken();
  
  return axios.create({
    baseURL: configs.baseURL,
    headers: {
      "Content-Type": "multipart/form-data",
      ...(token && { Authorization: `Bearer ${token}` })
    }
  });
};

const _get = async(url, config = {}, contentType = "multipart/form-data") => {
  try {
    const apiInstance = createApiInstance(contentType);
    const response = await apiInstance.get(url, config);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const _delete = async(url, config = {}, contentType = "multipart/form-data") => {
  try {
    const apiInstance = createApiInstance(contentType);
    const response = await apiInstance.delete(url, config);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const _post = async(url, data, config = {}, contentType = "multipart/form-data") => {
  try {
    const apiInstance = createApiInstance(contentType);
    const response = await apiInstance.post(url, data, config);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const _put = async(url, data, config = {}, contentType = "multipart/form-data") => {
  try {
    const apiInstance = createApiInstance(contentType);
    const response = await apiInstance.put(url, data, config);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export {_get, _delete, _post, _put , getAccessToken};