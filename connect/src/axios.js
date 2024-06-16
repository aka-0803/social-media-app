import axios from "axios";

export const makeRequest = axios.create({
    baseURL: "http://social-media-app-server-phi.vercel.app",
    withCredentials: true,
});