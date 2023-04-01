import { API } from 'services/index';
import * as URL from 'services/URLs';

export const getPost = (id) => {
    return API.get(`${URL.posts}/${id}`);
}