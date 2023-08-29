import axios, { AxiosInstance } from "axios";

let ongoingRequests = 0;

const instance: AxiosInstance = axios.create({
  baseURL: "https://apidashaboarddev.azurewebsites.net/api/",
});

const getToken = () => {
  return localStorage.getItem("accessToken");
};

const displayGlobalError = (messageText: string) => {};

const displayGlobalSuccess = (messageText: string) => {};

instance.interceptors.request.use(
  (config: any) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (ongoingRequests === 0) {
      // Show loading spinner or perform other actions
    }

    ongoingRequests++;

    return config;
  },
  (error: any) => {
    ongoingRequests--;
    displayGlobalError("Request Error: " + error.response?.data?.message);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    ongoingRequests--;

    if (
      response.config.method?.toUpperCase() === "POST" &&
      response.status >= 200 &&
      response.status < 300
    ) {
      displayGlobalSuccess("POST Request Successful!");
    }

    return response;
  },
  (error) => {
    ongoingRequests--;

    displayGlobalError("Response Error: " + error.response?.data?.message);

    return Promise.reject(error);
  }
);

export default instance;
