import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5000'});

export const getMess = () => API.get('/mess');
export const createMess = (newMessData) => API.post('/mess', newMessData);

export const getAllReviews = () => API.get('/review');
export const getMessReview = (messName) => API.get(`/review/${messName}`);
export const createReview = (newReviewData) => API.post('/review', newReviewData)