import { WithSpinner } from "HOCs";

import { useFetch } from 'Hooks';

import { getPosts } from 'services/posts/getPosts';

import PostsTemplate from './Posts.template';

const PostsPage = () => {
  const PostsTemplateContainer = WithSpinner(PostsTemplate);

  const { data, loading, error } = useFetch(getPosts);

  return (
    <PostsTemplateContainer 
      posts={data}
      error={error}
      isLoading={loading} 
    />
  );
}

export default PostsPage;