import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:3333'
});

 
// IOS    => "http://localhost:3333"
//Android => 'http://192.168.1.152:3333'
