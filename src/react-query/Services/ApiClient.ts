import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

class APICLient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  GetAll = () => {
    return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
  };

  Post = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };
}
export default APICLient;
