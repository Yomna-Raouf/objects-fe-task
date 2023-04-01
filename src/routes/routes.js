import { PostPage, PostsPage } from 'pages';

const routes = [
    {
        name: "posts",
        path: "/",
        exact: true,
        element: <PostsPage />,
    },
    {
        name: "post",
        path: "/post/:id",
        exact: true,
        element: <PostPage />,
    },
];

export default routes;