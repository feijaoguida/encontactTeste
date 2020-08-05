import axios from "axios";

const api = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/EnkiGroup/DesafioReactEncontact/",
});

export default api;
