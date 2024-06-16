import axios from "axios";

export const makeRequest = axios.create({
    baseURL: "https://social-media-app-server-phi.vercel.app/api",
    withCredentials: true,
});