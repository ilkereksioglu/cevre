import axios from "axios";
import store from "../store/index.js";
import tokenService from  "./token.js";

const axiosInstance = axios.create({
  baseURL: "https://localhost:44351",
  headers: {
  'Content-Type': 'application/json'
  },
});

//interceptors
axiosInstance.interceptors.request.use(async (config) => {
  store.commit('showLoadingOverlay');
  try{
    var token = await tokenService.isAuthenticated();
    if(token)
      config.headers["Authorization"] = "Bearer " +  token;
  } catch (error) {
      return Promise.reject(error);
  } 

  return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (res) => {
    store.commit('hideLoadingOverlay');
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (originalConfig.url !== '/girisyap' && err.response) {
      // Access Token was expired
      if (err.response.status === 401) {
        store.commit('showLoadingOverlay');
        originalConfig.Authorization = '';
        setTimeout(() => {
              window.location.reload();
          }, 100);
        
      }
    }
    return Promise.reject(err.response);
  }
);

export default axiosInstance;
