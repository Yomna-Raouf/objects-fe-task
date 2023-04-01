import { Navbar, Post } from 'components';

import '../pageTemplate.styles.scss';

const PostsTemplate = () => {
  return (
    <div className='pageTemplate' >
        <Navbar />
        <section>
            <Post title='title' body="body" />
        </section>
    </div>
  )
}

export default PostsTemplate;