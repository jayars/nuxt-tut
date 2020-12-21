import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://my-json-server.typicode.com/Code-Pop/real-world-nuxt",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json"
  }
});

export default {
  async getEvents() {
    const data = await apiClient.get("/events");
    return data;
  },
  async getEvent(id) {
    const data = await apiClient.get("/events/" + id);
    return data;
  }
};
