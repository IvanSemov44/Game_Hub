import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "302ea9682370438d9b02bd7b0cb2fe1c"
    }
});