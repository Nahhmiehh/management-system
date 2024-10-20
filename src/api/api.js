import axios from 'axios';

const API_URL = 'http://localhost:4000/';

export const createUser = async(user) => {
    const res = await axios.post(API_URL, user);
    return res.data;
}