import { useState } from 'react'

import { usePost } from 'Hooks';

import { WithSpinner } from 'HOCs';

import { addPost } from 'services/posts/addPost';

import './CreatePostForm.styles.scss';

const Form = ({ createPost, error, toggleModalVisibility }) => {
  const [postData, setPostData] = useState({
    title: '',
    body: '',
  });

  const getPostData = (e) => {
    const { name, value } = e.target;
    setPostData({...postData, [name]: value})
  };

  return (
    <form className='CreatePostForm' >
      {error && <p>Ooops! something went wrong!</p>}
      <input 
        name="title" 
        placeholder='title' 
        value={postData.title} 
        onChange={(e) => getPostData(e)}  
      />
      <textarea 
        name="body"
        placeholder='body' 
        rows="4" 
        cols="50" 
        value={postData.body} 
        onChange={(e) => getPostData(e)}  
      />
      <button 
        onClick={(e) => {
          e.preventDefault();
          createPost(postData);
          if(!error) toggleModalVisibility(); 
        }} 
      >Create</button>
    </form>
  )
};

const CreatePostForm = ({ toggleModalVisibility }) => {
  const { loading, error, post: createPost } = usePost(addPost);

  const FormContainer = WithSpinner(Form);

  return <FormContainer 
    isLoading={loading} 
    createPost={createPost}
    error={error}
    toggleModalVisibility={toggleModalVisibility} 
  />;
}

export default CreatePostForm;