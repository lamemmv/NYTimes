import axios from 'axios';
import PageSetting from '../settings/page';

const baseUri = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const serverDomain = 'https://nytimes.com/';
const apiKey = 'f901cf852b34493fb89d952bcc304744';
const API = {
    getBaseUri() {
        return baseUri;
    },

    getServerDomain() {
        return serverDomain;
    },

    queryParams(params) {
        return Object.keys(params)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
            .join('&');
    },

    getNews(filter) {
        let params = {
            page: filter.page ? filter.page : 0
        };

        params = Object.assign({}, params, {
            'api-key': apiKey,
            'q': 'singapore'
        });

        let url = baseUri;
        url += (url.indexOf('?') === -1 ? '?' : '&') + API.queryParams(params);

        return axios({
            method: 'get',
            url: url,
            headers: []
        });
    },

    getNewsById(id) {
        let url = baseUri;

        return axios({
            method: 'get',
            url: url,
            headers: []
        });
    },
}

export default API;