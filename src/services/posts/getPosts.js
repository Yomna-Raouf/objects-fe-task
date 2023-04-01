import { API } from 'services/index';
import * as URL from 'services/URLs';

export const getPosts = () => {
    return API.get(URL.posts);
}