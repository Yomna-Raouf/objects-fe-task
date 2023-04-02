import { useState } from 'react';

import { Link } from 'react-router-dom';

import Modal from 'components/Modal';

import { ReactComponent as Logo } from 'assets/crown.svg';

import CreatePostForm from 'components/CreatePostForm';

import './Navbar.styles.scss';

const Navbar = ({ setPosts, posts }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModalVisibility = () => setShowModal(!showModal);

    return (
        <nav className='Navbar'>
            <div className='Navbar__container' >
                <Link className='Navbar__logoContainer' to='/'>
                    <Logo className='logo' />
                </Link>
                <h1>Social App</h1>
                <button onClick={toggleModalVisibility} >Add post</button>
                <Modal title="Create Post" onClose={toggleModalVisibility} show={showModal}>
                    <CreatePostForm toggleModalVisibility={toggleModalVisibility} setPosts={setPosts} posts={posts} />
                </Modal>
            </div>
        </nav>
    );
}

export default Navbar;