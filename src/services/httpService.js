import axios from "axios";

axios.defaults.baseURL = "http://api.vajehyab.com/v3";

export const http = {
    get: axios.get,
    post: axios.post,
    delete: axios.delete,
    put: axios.put
}

