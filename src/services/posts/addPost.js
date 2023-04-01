import { API } from 'services/index';
import * as URL from 'services/URLs';

export const addPost = (payload) => {
    return API.post(URL.posts, payload);
}