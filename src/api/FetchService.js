import axios from "axios";

class FetchService {
    getData(url) {
        return axios.get(url)
    }
}

export default new FetchService()