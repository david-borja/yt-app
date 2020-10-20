import axios from 'axios';

const KEY = 'AIzaSyCXx0po9NS8K5ijGU2SOU5-Gcg-HtRNNFA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});