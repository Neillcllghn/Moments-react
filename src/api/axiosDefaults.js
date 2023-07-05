import axios from "axios";

axios.defaults.baseURL = "https://djangorestframework-project1-eaab70465c3f.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;