import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

export const api = {
    // Destinations
    getDestinations: () => apiClient.get('/destinations'),
    getDestination: (slug: string) => apiClient.get(`/destinations/${slug}`),

    // News
    getNews: (destinationId?: number) =>
        apiClient.get('/news', { params: { destination_id: destinationId } }),
    getLatestNews: () => apiClient.get('/news/latest'),
    getNewsArticle: (slug: string) => apiClient.get(`/news/${slug}`),

    // Media
    getFeaturedMedia: () => apiClient.get('/media/featured'),
    getGallery: () => apiClient.get('/media/gallery'),

    // Pages
    getPage: (slug: string) => apiClient.get(`/pages/${slug}`),
};

export default api;
