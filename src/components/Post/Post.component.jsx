import { useNavigate } from 'react-router-dom';

import './Post.styles.scss';

const Post = ({ title, body, id }) => {
    const navigate = useNavigate();
    
    return (
        <div className="Post" onClick={() => navigate(`/post/${id}`)} >
            <div className='post__header' >
                <p className='ellipseText line-clamp-1' >{title}</p>
            </div>
            <div className='post__body' >
                <p className='ellipseText line-clamp-2' >{body}</p> 
            </div>
            <div class="post__imageContainer" id="post__imageContainer">
                <img 
                    src="https://i0.wp.com/www.touristisrael.com/wp-content/uploads/2020/11/shutterstock_1490981186-scaled-1.jpg" 
                    alt="post content"  
                />
            </div>
        </div>
    );
}

export default Post;