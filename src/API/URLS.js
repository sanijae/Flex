import axios from 'axios'

export const UrlBase = axios.create({baseURL:'http://localhost:4000/api'})