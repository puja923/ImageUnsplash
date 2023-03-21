import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com",

  headers: {
    Authorization:
      "Client-ID gP3ef6nzUqeLZWRrXse8IN2pgX7pNWJVHCOwKfwGPyg",
  },
});
