import { API } from 'services/index';
import * as URL from 'services/URLs';

export const getPostComments = (id) => {
    return API.get(`${URL.posts}/${id}/${URL.comments}`);
}