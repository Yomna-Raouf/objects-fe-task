import { Navbar, Post } from 'components';

import '../pageTemplate.styles.scss';

// We can implement pagination or infinite scrolling here
const PostsTemplate = ({ posts, error }) => {
    if(error) return(<div>Ooops! something went wrong!</div>)
    else return (
        <div className='pageTemplate' >
            <Navbar />
            <section>
                {posts?.map((post) => 
                    <Post 
                        key={post?.id} 
                        id={post?.id} 
                        title={post?.title} 
                        body={post?.body} 
                    />
                )}
            </section>
        </div>
    );
}

export default PostsTemplate;